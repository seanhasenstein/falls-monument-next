"use client";

import Image from "next/image";
import styled from "styled-components";
import {
  formattedFaxNumber,
  formattedPhoneNumber,
  rawphoneNumber,
} from "@/constants";

export default function Footer() {
  return (
    <FooterStyles>
      <div className="inner">
        <div className="brand">
          <Image
            src="/images/logo.png"
            alt="Falls Monument"
            width={200}
            height={42}
            className="logo"
          />
          <p>
            Respectfully serving the Sheboygan Falls and southeastern Wisconsin
            for over 70 years.
          </p>
          <div className="certs">
            <a href="http://wambonline.org/" target="_blank" rel="noreferrer">
              <Image
                src="/images/waomb.png"
                alt="Wisconsin Association of Monument Builders"
                height={48}
                width={48}
                className="cert-img"
              />
            </a>
            <a
              href="https://monumentbuilders.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/mb.png"
                alt="Monument Builders of North America"
                height={48}
                width={48}
                className="cert-img"
              />
            </a>
            <a
              href="https://www.monuments-aica.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/aioca.png"
                alt="American Institute of Commemorative Art"
                height={48}
                width={48}
                className="cert-img"
              />
            </a>
          </div>
        </div>
        <div>
          <h3>Address</h3>
          <p>
            <a
              href="https://goo.gl/maps/R9Lf7VRV7mX5seYZ6"
              target="_blank"
              rel="noreferrer"
            >
              1098 Fond du Lac Avenue <br />
              Sheboygan Falls, WI 53085
            </a>
          </p>
          <h3>Store Hours</h3>
          <p>Monday-Friday: 9:00am-4:00pm</p>
          <p>*After hour appointments available</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            <span>Phone:</span>{" "}
            <a href={`tel:1${rawphoneNumber}`} target="_blank" rel="noreferrer">
              {formattedPhoneNumber}
            </a>
          </p>
          <p>
            <span>Fax:</span> {formattedFaxNumber}
          </p>
        </div>
      </div>
      <div className="copy">
        Copyright {new Date().getFullYear()} - Falls Monument Company
      </div>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  position: relative;
  background-color: #2a2721;

  .inner {
    max-width: 1000px;
    width: 100%;
    padding: 5rem 0 6rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    > div:nth-of-type(2) h3:nth-of-type(2) {
      margin-top: 4rem;
    }
  }

  h3 {
    margin: 0 0 0.75rem;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #96938d;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p,
  a {
    margin: 0;
    color: #e1e0df;
    letter-spacing: 0.2px;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      color: #2563eb;
      text-decoration: underline;
    }
  }

  .brand {
    max-width: 18rem;
    width: 100%;

    p {
      line-height: 1.5;
    }
  }

  .logo {
    margin: 0 0 2.5rem;
    width: 12.5rem;
    height: auto;
  }

  .certs {
    margin: 2.5rem 0 0;
    display: flex;
    align-items: center;
    gap: 0.875rem;

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

  .copy {
    margin: 0 auto;
    padding: 1.5rem 0;
    max-width: 1000px;
    font-size: 1rem;
    text-align: left;
    color: #65625c;
    border-top: 1px solid #3c3a37;
    letter-spacing: 0.25px;
  }

  @media (max-width: 1040px) {
    .inner {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
    }

    .copy {
      max-width: calc(100% - 3rem);
    }
  }

  @media (max-width: 900px) {
    .inner {
      flex-direction: column;
    }

    h3 {
      margin-top: 4rem;
    }
  }
`;
