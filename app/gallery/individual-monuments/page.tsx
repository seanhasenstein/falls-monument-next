import { Metadata } from "next";

import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Individual Monuments Gallery | Falls Monument | (920) 467-4939",
};

export default async function IndividualGalleryPage() {
  const images = await getImages("individual-monuments");

  return <Gallery galleryImages={images} galleryName="Individual Monuments" />;
}
