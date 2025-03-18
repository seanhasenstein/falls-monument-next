import { Metadata } from "next";

import StaffContent from "@/components/content/StaffContent";

export const metadata: Metadata = {
  title: "Meet Our Staff | Falls Monument | (920) 467-4939",
  description:
    "Our caring staff is here to be of assistance. We offer attention to detail, creativity, and exceptional worksmanship with thoughtful consideration for the families we serve.",
};

export default function Staff() {
  return <StaffContent />;
}
