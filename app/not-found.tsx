"use client";

import Link from "next/link";
import styled from "styled-components";

export default function FourOhFour() {
  return (
    <FourOhFourStyles>
      <div className="container">
        <h2>404 - Page not found!</h2>
        <p>Sorry, but the page you were looking for could not be found.</p>
        <p>
          You can <Link href="/">return to our homepage</Link>, or{" "}
          <Link href="/contact">contact us</Link> if you can&apos;t find what
          you are looking for.
        </p>
      </div>
    </FourOhFourStyles>
  );
}

const FourOhFourStyles = styled.div`
  padding: 8rem 1.5rem;

  .container {
    margin: 0 auto;
    padding: 2rem 2.5rem;
    max-width: 45rem;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  h2 {
    margin: 0 0 1rem;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p {
    margin: 0 0 1rem;

    &:last-of-type {
      margin: 0;
    }
  }

  a {
    color: #1865c6;
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;
