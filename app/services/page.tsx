"use client";

import styled from "styled-components";

const servicesList = [
  {
    id: 1,
    title: "Custom Monument Design",
    description:
      "We work with you to create a lasting memory of your loved one's journey",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
          clipRule="evenodd"
        />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Veteran Bronze Installation",
    description:
      "We install veteran bronze markers with great care and respect to commemorate the service that the individual provided for our country.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z" />
        <path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Garden Art",
    description:
      "Engraved stones with special sayings for those peaceful moments spent in your garden.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Memorial Cleaning",
    description:
      "We provide washing and cleaning services for memorials that may need a some TLC.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Engraved Rocks and Pavers",
    description:
      'Engravings on rocks and pavers. For example, "In Memory of" for a memorial garden pathway or your address for a home or business.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path
          fillRule="evenodd"
          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <ServicesStyles>
      <div className="container">
        <h2>Our Services</h2>
        <p className="intro">
          At Falls Monument our main focus is to provide the best quality
          workmanship for our customers. The following is a list of the services
          that we offer.
        </p>
        <ul>
          {servicesList.map((s) => (
            <li key={s.id}>
              <div className="icon">{s.icon}</div>
              <div className="content">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ServicesStyles>
  );
}

const ServicesStyles = styled.div`
  padding: 4rem 1.5rem 6rem;

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
  }

  .intro {
    margin: 0;
    max-width: 38rem;
  }

  ul {
    margin: 2.75rem 0 0;
    padding: 0.75rem 2.5rem;
    list-style: none;
    max-width: 40rem;
    width: 100%;
    background: #fff;
    border: 1px solid #f3f4f6;
    border-radius: 0.125rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  li {
    padding: 1.75rem 0;
    display: flex;
    border-bottom: 1px solid #e5e7eb;

    &:last-of-type {
      border-bottom: none;
    }

    .icon {
      margin: 0 1.5rem 0 0;
      flex-shrink: 0;
      height: 1.375rem;
      width: 1.375rem;
      color: #466ea5;
    }

    h3 {
      margin: 0 0 0.625rem;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }

    p {
      margin: 0;
      line-height: 1.5;
    }
  }
`;
