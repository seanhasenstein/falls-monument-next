"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Questions() {
  return (
    <QuestionsStyles>
      <div className="container">
        <h2>How can we help?</h2>
        <p>
          Please let us know if there is anything that you need. Do you have any
          questions? Would you like to schedule an appointment?
        </p>
        <Link href="/contact" className="link-button">
          Send us a message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </QuestionsStyles>
  );
}

const QuestionsStyles = styled.div`
  padding: 1rem 1.5rem 6rem;
  background: rgb(249, 250, 251);
  background: linear-gradient(
    180deg,
    rgba(249, 250, 251, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    text-align: center;
  }

  p {
    margin: 0 auto;
    max-width: 650px;
    font-weight: 500;
  }

  .link-button {
    margin: 1.75rem 0 0;
    padding: 0.875rem 1.875rem;
    display: inline-flex;
    align-items: center;
    background-color: #0e7490;
    font-size: 0.9375rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 0.0125em;
    text-decoration: none;
    border-radius: 0.25rem;

    svg {
      margin: 0.125rem 0 0 0.625rem;
      height: 1.0625rem;
      width: 1.0625rem;
      color: rgba(255, 255, 255, 0.4);
    }

    &:hover {
      background-color: #087796;

      svg {
        transform: translateX(2px);
      }
    }
  }
`;
