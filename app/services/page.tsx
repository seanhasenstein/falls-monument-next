import { Metadata } from "next";

import ServicesContent from "@/components/content/ServicesContent";

export const metadata: Metadata = {
  title: "Services | Falls Monument | (920) 467-4939",
  description:
    "At Falls Monument our main focus is to provide the best quality workmanship for our customers.",
};

export default function Services() {
  return <ServicesContent />;
}
