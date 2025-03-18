import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Granite Colors Gallery | Falls Monument | (920) 467-4939",
};

export default async function GraniteColorsGalleryPage() {
  const images = await getImages("granite-colors");

  return <Gallery galleryImages={images} galleryName="Granite Colors" />;
}
