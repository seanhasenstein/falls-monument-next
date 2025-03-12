"use client";

import styled from "styled-components";

import { formattedPhoneNumber, rawphoneNumber } from "@/constants";

export default function StoreInformation() {
  return (
    <StoreInformationStyles>
      <div className="section store-details">
        <h3>
          <span>Store Details</span>
        </h3>
        <ul>
          <li>
            <a
              href="https://goo.gl/maps/R9Lf7VRV7mX5seYZ6"
              target="_blank"
              rel="noreferrer"
            >
              1098 Fond du Lac Avenue <br />
              Sheboygan Falls, WI 53085
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href={`"tel:1${rawphoneNumber}"`}
              target="_blank"
              rel="noreferrer"
            >
              {formattedPhoneNumber}
            </a>
          </li>
        </ul>
      </div>
      <div className="section store-hours">
        <h3>
          <span>Store Hours</span>
        </h3>
        <ul>
          <li>
            <span>Monday</span>9:00am-4:00pm
          </li>
          <li>
            <span>Tuesday</span>9:00am-4:00pm
          </li>
          <li>
            <span>Wednesday</span>9:00am-4:00pm
          </li>
          <li>
            <span>Thursday</span>9:00am-4:00pm
          </li>
          <li>
            <span>Friday</span>9:00am-4:00pm
          </li>
          <li>
            <span>Saturday</span>Closed
          </li>
          <li>
            <span>Sunday</span>Closed
          </li>
          <li className="italic">- After hours appointments available</li>
        </ul>
      </div>
    </StoreInformationStyles>
  );
}

const StoreInformationStyles = styled.div`
  flex-shrink: 0;
  margin: 0 0;
  max-width: 18rem;
  width: 100%;

  h3 {
    position: relative;
    margin: 0 0 1rem;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;

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

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 0 0.375rem;
    line-height: 1.5;
    color: #4b5563;

    a {
      color: #4b5563;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      display: inline-block;
      width: 8rem;
    }
  }

  .store-hours {
    margin: 4rem 0 0;

    li {
      display: flex;
      justify-content: space-between;
      color: #374151;

      &.italic {
        margin: 1.25rem 0 0;
        letter-spacing: -0.0125em;
        font-style: italic;
        color: #4b5563;
      }
    }
  }

  @media (max-width: 900px) {
    max-width: unset;
    width: 100%;
  }
`;
