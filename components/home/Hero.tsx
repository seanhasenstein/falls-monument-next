"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroStyles>
      <div className="container">
        <h2>Welcome to Falls Monument</h2>
        <p>
          Respectfully serving the Sheboygan Falls and southeastern Wisconsin
          for over 70 years.
        </p>
        <Link href="/contact" className="link-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Schedule an appointment
        </Link>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.div`
  padding: 6rem 1.5rem 10rem;
  background-image: url("/images/hero.jpg");
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;

  .container {
    margin: 0 auto;
    padding: 2rem 0;
    max-width: 1000px;
    width: 100%;
  }

  h2 {
    margin: 0 0 1.5rem;
    font-size: 1.75rem;
    color: #f9fafb;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.75);
  }

  p {
    margin: 0;
    max-width: 500px;
    font-size: 1.25rem;
    font-weight: 500;
    color: #d1d5db;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    line-height: 1.35;
  }

  .link-button {
    margin: 2rem 0 0;
    padding: 0.875rem 1.875rem;
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
    box-shadow: inset 0 1px 1px #0891b2, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    svg {
      margin: 0 0.625rem 0 0;
      height: 0.9375rem;
      width: 0.9375rem;
      color: rgba(255, 255, 255, 0.35);
    }

    &:hover {
      background-color: #087796;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #575757 0px 0px 0px 2px, #1d4ed8 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  @media (max-width: 500px) {
    padding: 4rem 1.5rem 8.5rem;

    .link-button {
      padding: 0.875rem 1rem;
      width: 100%;
    }
  }
`;
