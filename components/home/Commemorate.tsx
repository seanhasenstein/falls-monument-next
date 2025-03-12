"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import StoreInformation from "../StoreInformation";

export default function Commemorate() {
  return (
    <CommemorateStyles>
      <div className="container">
        <div>
          <div className="content">
            <div className="center-column">
              <Image
                src="/images/logo-min.png"
                alt="FM"
                width={119}
                height={126}
              />
              <h3>Commemorating Every Life</h3>
            </div>
            <p>
              Our caring staff is here to be of assistance in selecting a
              lasting memorial. We offer attention to detail, creativity, and
              exceptional worksmanship with thoughtful consideration.
            </p>
            <p>
              We believe that a memorial does more than mark an
              individual&apos;s final resting place. It reflects the love,
              warmth, and affection that inspires reverance, faith, and hope for
              the living. It&apos;s a work of are that links the past and
              present.
            </p>
            <p>
              If you have any questions or would like to schedule an
              appointment, please do not hestitate to{" "}
              <Link href="/contact">Contact us</Link>.
            </p>
            <p>Sincerely,</p>
            <p>- The Falls Monument Staff</p>
          </div>
        </div>
        <StoreInformation />
      </div>
    </CommemorateStyles>
  );
}

const CommemorateStyles = styled.div`
  padding: 0 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
  }

  .content {
    margin: -6rem 0 0;
    padding: 5rem;
    background-color: #fff;
    border-radius: 0.125rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);

    img {
      margin: 0 auto 1.75rem;
      width: 2rem;
      height: auto;
    }

    h3 {
      margin: 0 0 2rem;
      font-size: 1.25rem;
      text-align: center;
    }

    p {
      margin: 0 0 2rem;

      &:last-of-type {
        margin-top: 2rem;
        font-family: "Dancing Script", cursive;
        font-size: 1.5rem;
        font-weight: 700;
        color: #466ea5;
      }

      a {
        color: #4b5563;
        text-decoration: underline;
      }
    }
  }

  .center-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 900px) {
    .container {
      margin: 0 auto;
      max-width: 1000px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 3.5rem;
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    .content {
      padding: 2rem;

      p:last-of-type {
        margin: 0 0 0.75rem;
      }
    }
  }

  @media (max-width: 370px) {
    .content {
      padding: 1.5rem;

      h3 {
        line-height: 1.5;
      }

      p:last-of-type {
        margin: 0 0 0.5rem;
        font-size: 1.25rem;
      }
    }
  }
`;
