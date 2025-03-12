"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styled from "styled-components";

type Props = {
  isNavOpen: boolean;
};

export default function Navigation({ isNavOpen }: Props) {
  const pathname = usePathname();
  const galleryIsActive = pathname.split("/").includes("gallery");

  return (
    <NavigationStyles className={isNavOpen ? "open" : ""}>
      <nav id="nav-menu">
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/individual-monuments"
              className={galleryIsActive ? "active" : ""}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/staff"
              className={pathname === "/staff" ? "active" : ""}
            >
              Staff
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="store-hours">
        <h3>Store Hours</h3>
        <p>Monday-Friday: 9am-4pm</p>
      </div>
    </NavigationStyles>
  );
}

const NavigationStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ul {
    margin: 0;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
  }

  nav {
    max-width: 38rem;
    width: 100%;
    z-index: 50;

    a {
      padding: 0.875rem 0.5rem;
      display: block;
      font-family: "Merriweather", serif;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.65);
      letter-spacing: 0.0625em;
      line-height: 1;
      text-decoration: none;
      border-radius: 0.125rem;
      transition: color 200ms ease-in-out;

      &:hover {
        color: #fff;
      }

      &.active {
        color: #fff;
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        outline: 2px solid #2563eb;
      }
    }
  }

  .store-hours {
    display: none;
  }

  @media (max-width: 900px) {
    display: none;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;

    &.open {
      display: block;
    }

    ul {
      padding: 0;
      flex-direction: column;
      justify-content: flex-start;
    }

    nav {
      max-width: unset;
      border-width: 1px 0 1px 0;
      border-style: solid;
      border-color: #1f1d18;

      li:last-of-type a {
        border-bottom: none;
      }

      a {
        margin: 0;
        padding: 1.25rem 0;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #fff;
        line-height: 1;
        text-decoration: none;
        border-bottom: 1px solid #1f1d18;
        transition: color 200ms ease-in-out;
      }
    }

    .store-hours {
      padding: 3rem 0 0;
      display: block;
      text-align: center;
      letter-spacing: 0.025em;

      h3 {
        margin: 0 0 0.75rem;
        font-family: "Source Sans Pro", sans-serif;
        color: #fde68a;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 1rem;
      }

      p {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: #e5e7eb;
      }
    }
  }
`;
