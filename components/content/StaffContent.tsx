"use client";

import Image from "next/image";
import styled from "styled-components";

export default function StaffContent() {
  return (
    <StaffStyles>
      <div className="container">
        <h2>Meet our staff</h2>
        <p className="intro">
          Our caring staff is here to be of assistance. We offer attention to
          detail, creativity, and exceptional worksmanship with thoughtful
          consideration for the families we serve.
        </p>
        <ul>
          <li>
            <div className="profile-photo">
              <Image
                src="/images/staff/eric-zabel-2023.jpg"
                alt="Eric Zabel with his family"
                width={657}
                height={683}
              />
            </div>
            <div>
              <h3>Eric Zabel - CM, AICA</h3>
              <p>
                Eric is a third generation memorialist and current owner of
                Falls Monument. He is involved in all aspects of the business
                with a focus on layout, design, and customization.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </StaffStyles>
  );
}

const StaffStyles = styled.div`
  padding: 4rem 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
  }

  .intro {
    max-width: 38rem;
  }

  h3 {
    margin: 0 0 1rem;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  ul {
    margin: 2.5rem 0 0;
    padding: 0 2rem;
    list-style-type: none;
    background: #fff;
    border: 1px solid #f3f4f6;
    border-radius: 0.125rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    max-width: 38rem;
  }

  li {
    padding: 2rem 0;
    display: flex;
    border-bottom: 1px solid #e5e7eb;

    &:last-of-type {
      border-bottom: none;
    }
  }

  .profile-photo {
    flex-shrink: 0;
    width: 14rem;
    margin-right: 2rem;
    img {
      width: 100%;
      height: auto;
    }
  }

  .profile-photo img {
    width: 100%;
    border-radius: 1px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 600px) {
    text-align: center;

    ul {
      padding: 0 2rem;
    }

    li {
      flex-direction: column;
      align-items: center;
      text-align: center;

      &:last-of-type {
        border: none;
      }

      .profile-photo {
        flex-shrink: 0;
        margin-right: 0;
        margin-bottom: 1.5rem;
      }
    }
  }
`;
