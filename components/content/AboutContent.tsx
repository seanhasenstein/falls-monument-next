"use client";

import Image from "next/image";
import styled from "styled-components";

export default function AboutContent() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="grid">
          <div>
            <h2>About Us</h2>
            <p>
              We have respectfully served the Sheboygan Falls area along with
              the surrounding communities of Southeastern Wisconsin for over 70
              years.
            </p>

            <p>
              We believe that a memorial should tell a story that will continue
              long after we are gone. We take pride in our work and that our
              customers and families entrust us to create a memorial that will
              commemorate their loved ones.
            </p>
          </div>
          <div>
            <h3>What is a memorialist?</h3>
            <p>
              A memorialist is both an artist and a craftsman that creates their
              own work with a focus on the highest quality. At Falls Monument,
              we are proud to be one of the three businesses in Wisconsin that
              has a Certified Memorialist (CM) on staff.
            </p>
          </div>
        </div>
        <div className="certs">
          <div className="item">
            <div className="logo">
              <Image
                src="/images/aioca.png"
                alt="American Institute of Commemorative Art"
                layout="fixed"
                height={50}
                width={50}
              />
            </div>
            <h3>American Institute of Commemorative Art</h3>

            <p>
              The AICA is an institute consisting of 55 of the top memorial
              designers in North America. Membership in the AICA is by invite
              only and we are proud to have the only member in Wisconsin.
            </p>
            <a
              href="https://www.monuments-aica.com/"
              target="_blank"
              rel="noreferrer"
              className="external-link"
            >
              Visit their website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
          <div className="item">
            <div className="logo">
              <Image
                src="/images/mb.png"
                alt="Monument Builders of North America"
                layout="fixed"
                height={50}
                width={50}
              />
            </div>
            <h3>Monument Builders of North America</h3>
            <p>
              An organization of memorialists that focus on ethical and honest
              business practices that are committed to the monument industry and
              monument art.
            </p>
            <a
              href="https://monumentbuilders.org/"
              target="_blank"
              rel="noreferrer"
              className="external-link"
            >
              Visit their website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
          <div className="item">
            <div className="logo">
              <Image
                src="/images/waomb.png"
                alt="Wisconsin Association of Monument Builders"
                layout="fixed"
                height={50}
                width={50}
              />
            </div>
            <h3>Wisconsin Association of Monument Builders</h3>

            <p>
              Industry professionals that choose to enhance their knowledge and
              participation in the industry. We are proud to have had three
              generations serve as the president of the WAMB.
            </p>
            <a
              href="http://wambonline.org/"
              target="_blank"
              rel="noreferrer"
              className="external-link"
            >
              Visit their website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

const AboutStyles = styled.div`
  padding: 4rem 1.5rem 6rem;

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
  }

  h3 {
    margin: 3rem 0 1rem;
  }

  p {
    margin: 0 0 1.5rem;
    max-width: 45rem;
  }

  .grid {
    display: flex;
    flex-direction: column;
  }

  .certs {
    margin: 3rem 0 0;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    text-align: center;

    .item {
      padding: 2rem 2.5rem;
      width: calc(33.333%);
      display: flex;
      flex-direction: column;
      background: #fff;
      border: 1px solid #eee;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    }

    .logo {
      margin: 0 auto;
      width: 50px;

      img {
        width: 100%;
      }
    }

    h3 {
      margin: 1rem 0 1.25rem;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      line-height: 1.25;
    }

    p {
      margin: 0 auto 1.5rem;
      font-size: 1rem;
    }
  }

  .external-link {
    margin: auto auto 0;
    padding: 0.75rem 1.25rem;
    max-width: 15rem;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.9375rem;
    font-weight: 400;
    color: #1f2937;
    line-height: 1;
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    svg {
      margin: 0 0 0 0.375rem;
      height: 0.8125rem;
      width: 0.8125rem;
      color: #9ca3af;
    }

    &:hover {
      border-color: #bbc1ca;
      color: #111827;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #f8fafc 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  @media (max-width: 900px) {
    .certs {
      flex-direction: column;
      gap: 2rem;

      .item {
        width: 100%;
      }

      p,
      h3 {
        margin-right: auto;
        margin-left: auto;
        max-width: 400px;
      }
    }
  }
`;
