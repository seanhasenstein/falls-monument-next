"use server";

import { redirect } from "next/navigation";

import { createMessageId, formatPhoneNumber } from "@/utils";
import { sendEmail } from "@/utils/sendEmail";
import { createEmailTemplate } from "@/emails/contactMessage";
import { formattedPhoneNumber } from "@/constants";

export type FormState = {
  error: string | null;
  customerName: string | null;
  email: string | null;
  phone: string | null;
  companyName: string | null;
  message: string | null;
} | null;

async function sendContactMessage(
  _prevState: FormState | null,
  formData: FormData
) {
  const messageId = createMessageId();
  const customerName = formData.get("customerName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("companyName") as string;
  const formLoadTime = Number(formData.get("formLoadTime"));
  const elapsedMs = Date.now() - formLoadTime;

  // Silently drop honeypot hits
  if (honeypot) {
    redirect("/contact/success");
  }

  // Silently drop suspiciously fast submissions
  if (!formLoadTime || elapsedMs < 2000) {
    redirect("/contact/success");
  }

  // Require more than a single word in the message
  const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount < 2) {
    return {
      error:
        "Could you share a little more detail about how we can help? A short sentence or two is perfect.",
      customerName,
      email,
      phone,
      message,
      companyName: "",
    };
  }

  try {
    const formattedMessage = {
      id: messageId,
      name: customerName.trim(),
      email: email.toLowerCase().trim(),
      phone: formatPhoneNumber(phone),
      message: message.trim(),
    };

    const { text, html } = createEmailTemplate(formattedMessage);

    await sendEmail({
      to: process.env.TO_EMAIL_ADDRESS,
      from: process.env.FROM_EMAIL_ADDRESS,
      subject: `Contact message from ${customerName} [#${messageId}]`,
      replyTo: formattedMessage.email,
      bcc: process.env.BCC_EMAIL_ADDRESS,
      text,
      html,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred sending the message.";
    console.error(errorMessage);
    return {
      error: `Something went wrong. Please try sending your message again. You can also email us directly at ${process.env.TO_EMAIL_ADDRESS} or call ${formattedPhoneNumber}.`,
      customerName,
      email,
      phone,
      message,
      companyName: "",
    };
  }
  redirect("/contact/success");
}

export { sendContactMessage };
