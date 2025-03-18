import { Metadata } from "next";

import ContactContent from "@/components/content/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Falls Monument | (920) 467-4939",
  description:
    "Please let us know if you have any questions or if you would like to set up an appoinment.",
};

export default function Contact() {
  return <ContactContent />;
}
