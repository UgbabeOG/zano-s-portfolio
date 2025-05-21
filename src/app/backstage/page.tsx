import { Metadata } from "next";
import { MediaGallery } from "@/app/gallery/media-gallery";
import { mediaItems, categories } from "@/data/media"; // Use main mediaItems for now

export const metadata: Metadata = {
  title: "Backstage",
  description: "A collection of backstage videos and pictures.",
};

export default function BackstagePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Backstage
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Take a look behind the scenes with these backstage videos and
          pictures.
        </p>
      </div>
      <MediaGallery
        items={mediaItems}
        categories={categories}
        onOpenAiTagger={() => {}}
      />
    </section>
  );
}
