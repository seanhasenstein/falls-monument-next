import { getImages } from "@/lib/s3";

import Gallery from "@/components/Gallery";

export default async function CompanionGalleryPage() {
  const images = await getImages("companion-monuments");

  return <Gallery galleryImages={images} galleryName="Companion Monuments" />;
}
