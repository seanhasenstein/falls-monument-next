"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import Navigation from "./Navigation";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <HeaderStyles>
      <div className="container">
        <div className="brand">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Falls Monument"
              width={600}
              height={126}
              className="logo"
            />
          </Link>
          <button
            className="menu-button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-expanded={isNavOpen ? "true" : "false"}
            aria-controls="nav-menu"
          >
            {isNavOpen ? (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
            <span className="sr-only">Navigation Menu</span>
          </button>
        </div>
        <Navigation isNavOpen={isNavOpen} />
      </div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  padding: 0.1875rem 0;
  position: relative;
  width: 100%;
  background-color: #2a2721;
  z-index: 50;

  .container {
    margin: 0 auto;
    padding: 0 1.5rem;
    max-width: 1048px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand {
    width: 188px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      padding: 0.25rem;
      border-radius: 0.125rem;

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        outline: 2px solid #2563eb;
      }
    }
  }

  .logo {
    width: 11.25rem;
    height: auto;
  }

  .menu-button {
    display: none;
  }

  @media (max-width: 900px) {
    .container {
      flex-direction: column;
    }

    .brand {
      padding: 1rem 0 1.125rem;
      width: 100%;
    }

    .menu-button {
      padding: 4px 6px;
      display: inline-flex;
      height: 36px;
      background-color: transparent;
      border: none;
      color: #ffffff;
      cursor: pointer;

      svg {
        width: 28px;
        height: 28px;
      }
    }
  }
`;
