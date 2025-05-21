import { Metadata } from "next";
import { mediaItems, categories } from "@/data/media"; // Use main mediaItems for now
import BackstageClientContent from "./backstage-client-content";

// This file remains a Server Component to export metadata
export const metadata: Metadata = {
  title: "Backstage",
  description: "A collection of backstage videos and pictures.",
};

export default function BackstagePage() {
  const backstageItems = mediaItems.filter(
    (item) => item.category === "backstage"
  );

  return (
    <BackstageClientContent
      items={backstageItems}
      categories={categories}
    />
  );
}
