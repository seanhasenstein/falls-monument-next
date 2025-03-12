"use client";

import Link from "next/link";
import styled from "styled-components";

export default function GalleryLinks() {
  return (
    <GalleryLinksStyles>
      <div className="container">
        <h3>See our work</h3>
        <h2>Photo Galleries</h2>
        <div className="grid">
          <Link
            href="/gallery/individual-monuments"
            className="grid-item individual"
          >
            <div className="label">Individual Monuments</div>
          </Link>
          <Link
            href="/gallery/companion-monuments"
            className="grid-item companion"
          >
            <div className="label">Companion Monuments</div>
          </Link>
          <Link href="/gallery/etchings" className="grid-item etching">
            <div className="label">Etchings Examples</div>
          </Link>
          <Link href="/gallery/granite-colors" className="grid-item granite">
            <div className="label">Granite Colors</div>
          </Link>
        </div>
      </div>
    </GalleryLinksStyles>
  );
}

const GalleryLinksStyles = styled.div`
  padding: 5rem 1.5rem 7rem;

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
  }

  h2 {
    margin: 0.75rem 0 3rem;
  }

  h3 {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ca9711;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.25rem;
  }

  .grid-item {
    position: relative;
    width: 100%;
    height: 18rem;
    background-color: #9ca3af;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0.25rem;
    transition: all 100ms ease-in-out;

    &.individual {
      background-image: url("/images/individual-thumbnail.jpg");
    }

    &.companion {
      background-image: url("/images/companion-thumbnail.jpg");
    }

    &.etching {
      background-image: url("/images/etchings-thumbnail.jpg");
    }

    &.granite {
      background-image: url("/images/granite-thumbnail.jpg");
    }

    &:hover {
      transform: translateY(-3px);
      filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
        drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #f9fafb 0px 0px 0px 2px, #1d4ed8 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border-radius: 0.25rem;
      box-shadow: inset 0 -90px 50px rgba(10, 10, 10, 0.6);
    }
  }

  .label {
    padding: 0 1rem;
    position: absolute;
    bottom: 1.75rem;
    left: 0;
    right: 0;
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    z-index: 200;
  }

  @media (max-width: 900px) {
    padding: 4rem 1.5rem 7rem;

    .container {
      padding: 3rem 0 0;
      border-top: 1px solid #d1d5db;
    }

    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
