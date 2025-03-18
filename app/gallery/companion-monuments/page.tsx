import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Companion Monuments Gallery | Falls Monument | (920) 467-4939",
};

export default async function CompanionGalleryPage() {
  const images = await getImages("companion-monuments");

  return <Gallery galleryImages={images} galleryName="Companion Monuments" />;
}
