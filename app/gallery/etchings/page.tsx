import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Etchings Gallery | Falls Monument | (920) 467-4939",
  description:
    "Browse our gallery of custom monument etchings featuring portraits, scenes, and personalized artwork.",
};

export default async function EtchingsGalleryPage() {
  const images = await getImages("etchings");

  return <Gallery galleryImages={images} galleryName="Etchings" />;
}
