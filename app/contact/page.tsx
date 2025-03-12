"use client";

import { useActionState, useState, useTransition } from "react";

import styled from "styled-components";

import PhoneInput from "@/components/PhoneInput";
import StoreInformation from "@/components/StoreInformation";

import { sendContactMessage } from "@/lib/actions";

export default function Contact() {
  const [state, formAction] = useActionState(sendContactMessage, null);
  const [isPending, startTransition] = useTransition();
  const [phoneNumber, setPhoneNumber] = useState(state?.phone || "");

  const handleSubmit = (formData: FormData) => {
    formData.set("phone", phoneNumber);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <ContactStyles>
      <div className="container">
        <div className="section-1">
          <h2>Contact Us</h2>
          <p>
            How can we help you? Let us know if you have any questions or if you
            would like to schedule an appointment.
          </p>
        </div>
        <div className="section-2">
          <form action={handleSubmit}>
            <h4>
              <span>Please fill out this form</span>
            </h4>
            <div className="form-item">
              <label htmlFor="customerName">Your name</label>
              <input
                defaultValue={state?.customerName}
                id="customerName"
                name="customerName"
                required
              />
            </div>
            <div className="grid-col-2">
              <div className="form-item">
                <label htmlFor="email">Email address</label>
                <input
                  defaultValue={state?.email}
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <PhoneInput
                name="phone"
                value={state?.phone}
                onChange={setPhoneNumber}
                required
                className="form-item"
              />
            </div>
            <div className="form-item">
              <label htmlFor="message">How can we help you?</label>
              <textarea
                defaultValue={state?.message}
                id="message"
                name="message"
                required
              />
            </div>
            <div className="form-item sr-only">
              <label htmlFor="honey">Please leave this field blank</label>
              <input id="honey" tabIndex={-1} />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="submit-button"
            >
              {isPending ? <span className="spinner" /> : "Send your message"}
            </button>
            {!!state?.error && <p className="server-error">{state.error}</p>}
          </form>
        </div>
        <div className="section-3">
          <StoreInformation />
        </div>
      </div>
    </ContactStyles>
  );
}

const ContactStyles = styled.div`
  padding: 4rem 1.5rem 5rem;

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-areas: "section-1 section-3" "section-2 section-3";
    gap: 0 5rem;
  }

  .section-1 {
    grid-area: section-1;
  }
  .section-2 {
    grid-area: section-2;
  }

  .section-3 {
    margin: 4rem 0 0;
    grid-area: section-3;
  }

  h4 {
    display: none;
    position: relative;
    margin: 0 0 1rem;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #1f2937;

    span {
      padding: 0 1.25rem 0 0;
      position: relative;
      background-color: #f8fafc;
      z-index: 200;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0.5625rem;
      width: 100%;
      height: 1px;
      background-color: #d1d5db;
      z-index: 10;
    }
  }

  p {
    margin: 0;
    max-width: 30rem;
  }

  form {
    margin: 0;
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    width: 100%;
  }

  .grid-col-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 0 1rem;
  }

  .form-item {
    margin: 1.25rem 0 0;
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 0 0 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }

  input,
  textarea {
    appearance: none;
    margin: 0;
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    color: #262626;
    line-height: 1.25;
    background-color: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 0.1875rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    &::placeholder {
      color: #d4d4d4;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #4338ca;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, #4338ca 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  textarea {
    resize: vertical;
    min-height: 8rem;
  }

  .submit-button {
    position: relative;
    margin: 1.25rem 0 0;
    padding: 0.875rem 1.875rem;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #0e7490;
    border: 1px solid #164e63;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.0125em;
    text-decoration: none;
    border-radius: 0.3125rem;
    box-shadow: inset 0 1px 1px #0891b2;
    cursor: pointer;

    svg {
      margin: 0 0.625rem 0 0;
      height: 0.9375rem;
      width: 0.9375rem;
      color: #2496b5;
    }

    &:hover {
      background-color: #087796;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #f9fafb 0px 0px 0px 2px, #1d4ed8 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 2px solid rgba(255, 255, 255, 0.6);
    border-right: 2px solid transparent;
    animation: spinner 0.6s linear infinite;
  }

  .server-error {
    margin: 24px 0 0;
    padding: 16px;
    display: flex;
    align-items: center;
    background-color: #fdf2f2;
    border-left: 4px solid #f98080;
    border-top: 1px solid #fee2e2;
    border-bottom: 1px solid #fee2e2;
    border-right: 1px solid #fee2e2;
    border-radius: 0.125rem;

    svg {
      margin-right: 10px;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      color: #f98080;
    }

    p,
    a {
      margin: 0;
      color: #c81e1e;
      font-size: 0.875rem;
      line-height: 20px;
    }

    a {
      text-decoration: underline;
      transition: color 150ms ease-in-out;
    }
  }

  @media (max-width: 767px) {
    .container {
      grid-template-areas: "section-1" "section-3" "section-2";
    }

    .section-2 {
      margin: 4rem 0 0;
    }

    .section-3 {
      margin: 0;
    }

    h3,
    h4 {
      margin-bottom: 1.75rem;
    }

    h4 {
      display: block;
    }

    p {
      margin: 0 0 4rem;
    }

    form {
      max-width: 100%;
    }
  }

  @media (max-width: 500px) {
    input,
    textarea {
      font-size: 1rem;
    }
  }
`;
