"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styled from "styled-components";

type Props = {
  isNavOpen: boolean;
  closeNav: () => void;
};

const links = [
  { href: "/", text: "Home" },
  { href: "/services", text: "Services" },
  { href: "/gallery/individual-monuments", text: "Gallery" },
  { href: "/about", text: "About" },
  { href: "/staff", text: "Staff" },
  { href: "/contact", text: "Contact" },
];

export default function Navigation({ isNavOpen, closeNav }: Props) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Only run when pathname changes, not on initial render
    if (prevPathRef.current !== pathname) {
      // Close menu after navigation is complete
      closeNav();

      // Smooth scroll to top of page
      window.scrollTo({ top: 0 });

      // Update the previous pathname reference
      prevPathRef.current = pathname;
    }
  }, [pathname, closeNav]);

  return (
    <NavigationStyles className={isNavOpen ? "open" : ""}>
      <nav id="nav-menu">
        <ul>
          {links.map(({ href, text }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => {
                  if (pathname === href) {
                    closeNav();
                  }
                }}
                className={
                  pathname === href ||
                  (text === "Gallery" && pathname.includes("gallery"))
                    ? "active"
                    : ""
                }
              >
                {text}
              </Link>
            </li>
          ))}
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
        line-height: 1;
        text-decoration: none;
        border-bottom: 1px solid #1f1d18;
        transition: color 200ms ease-in-out;

        &.active {
          color: #678cbf;
        }
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
