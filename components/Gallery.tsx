"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import styled from "styled-components";

import Lightbox from "./Lightbox";

import { slugify } from "../utils";
import useLightbox from "../hooks/useLightbox";

import { ImageMetadata } from "../types";

const sidebarLinks = [
  {
    slug: "individual-monuments",
    label: "Individual Monuments",
  },
  {
    slug: "companion-monuments",
    label: "Companion Monuments",
  },
  {
    slug: "etchings",
    label: "Etchings",
  },
  {
    slug: "granite-colors",
    label: "Granite Colors",
  },
];

type Props = {
  galleryImages: ImageMetadata[];
  galleryName: string;
};

export default function Gallery({ galleryImages, galleryName }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const galleryProps = useLightbox(galleryImages);
  const { handleClick, ...lightboxProps } = galleryProps;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/gallery/${e.target.value}`);
  };

  return (
    <>
      <GalleryStyles>
        <div className="container">
          <aside>
            <div className="sidebar-box">
              <h3>Choose a Gallery</h3>
              <div className="nav">
                {sidebarLinks.map(({ slug, label }) => (
                  <Link
                    key={slug}
                    href={`/gallery/${slug}`}
                    className={
                      pathname === `/gallery/${slug}` ? "current-page" : ""
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
          <div className="gallery">
            <h2>
              <span>{galleryName} Gallery</span>
            </h2>
            <div className="mobile-nav">
              <select
                onChange={handleSelectChange}
                value={slugify(galleryName)}
              >
                {sidebarLinks.map((l) => (
                  <option key={l.slug} value={l.slug}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            {galleryProps.images.length === 0 ? (
              <div className="empty-message">
                There are currently no photos in this gallery
              </div>
            ) : (
              <div className="grid">
                {galleryProps.images.map((image, index) => (
                  <button
                    key={image.key}
                    onClick={(e) => handleClick(e, index)}
                    className="grid-item"
                  >
                    <img
                      src={image.url}
                      alt={`${galleryName} photo ${index + 1} of ${
                        galleryProps.images.length
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </GalleryStyles>
      <Lightbox {...lightboxProps} galleryName={galleryName} />
    </>
  );
}

const GalleryStyles = styled.div`
  padding: 5rem 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 64rem;
    width: 100%;
    display: flex;
    gap: 3rem;
  }

  h2 {
    margin: 0 0 2rem;
    position: relative;
    font-size: 1.25rem;
    text-align: center;
    user-select: none;

    span {
      padding: 0 1.5rem;
      position: relative;
      background-color: #f8fafc;
      z-index: 200;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0.875rem;
      width: 100%;
      height: 1px;
      background-color: #cbd5e1;
      z-index: 10;
    }
  }

  .gallery {
    width: 100%;
  }

  .grid {
    margin: 0 auto;
    max-width: 43rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(8rem, 1fr));
    gap: 0.875rem;
  }

  .grid-item {
    padding: 0;
    position: relative;
    aspect-ratio: 4 / 3;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    border: 5px solid #fff;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0.25);
      transition: box-shadow 200ms ease-in-out;
    }

    &:hover::after {
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0);
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
    }
  }

  .empty-message {
    color: #64748b;
  }

  .mobile-nav {
    display: none;
  }

  aside {
    margin: 0 auto;
    display: block;
    max-width: 18rem;
    width: 100%;

    .sidebar-box {
      margin: 0 1rem 0 0;
      padding: 0 0 0.75rem;
      background-color: #fff;
      border: 1px solid #ececea;
      border-radius: 0.125rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }

    h3 {
      padding: 0.875rem 1.75rem;
      background: #2a2721;
      color: #e7e5e4;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: center;
      border-bottom: 1px solid #000;
      border-radius: 0.125rem 0.125rem 0 0;
    }

    .nav {
      padding-top: 0.75rem;
      display: flex;
      flex-direction: column;
    }

    a {
      padding: 0.875rem 1.625rem;
      position: relative;
      display: flex;
      align-items: center;
      font-family: "Merriweather", serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: #374151;
      text-decoration: none;
      line-height: 1;
      user-select: none;

      &:last-of-type {
        border: none;
      }

      &:hover {
        color: #111827;

        svg {
          color: #d1d5db;
        }
      }

      &.current-page {
        color: #111827;

        svg {
          color: #2b6ac0;
        }
      }
    }

    svg {
      margin: 0 0.4375rem 0 0;
      width: 1.125rem;
      height: 1.125rem;
      color: #fff;
    }
  }

  @media (max-width: 1024px) {
    aside {
      display: none;
    }

    .mobile-nav {
      margin: 0 0 2rem;
      display: flex;
      justify-content: center;

      select {
        min-width: 15rem;
      }
    }
  }

  @media (max-width: 991px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
  }

  @media (max-width: 500px) {
    h2 {
      span {
        padding: 0;
        background-color: transparent;
      }

      &::after {
        background-color: transparent;
      }
    }

    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.625rem;
    }

    .grid-item {
      border: 3px solid #fff;
    }

    .mobile-nav select {
      width: 100%;
    }
  }
`;
