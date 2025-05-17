"use client"; // Required for useState, onClick handlers

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { mediaItems, categories } from "@/data/media";
import { MediaGallery } from "./media-gallery";
import { AiTagSuggester } from "./ai-tag-suggester";
import { Sparkles } from "lucide-react";

// This page needs to be a client component to manage modal state
export default function GalleryPage() {
  const [isAiTaggerOpen, setIsAiTaggerOpen] = useState(false);
  
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <section className="text-center mb-12 animate-in fade-in duration-500">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {siteConfig.name}'s Gallery
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a curated collection of photography and videography. Use the filters to navigate through different categories and find inspiration.
        </p>
      </section>

      <MediaGallery 
        items={mediaItems} 
        categories={categories}
        onOpenAiTagger={() => setIsAiTaggerOpen(true)}
      />

      <AiTagSuggester 
        isOpen={isAiTaggerOpen}
        onOpenChange={setIsAiTaggerOpen}
      />

      {/* Fun Animation Example (subtle pulse on an element) */}
      <div className="mt-16 text-center">
        <Sparkles className="inline-block h-8 w-8 text-accent animate-pulse" />
        <p className="text-sm text-muted-foreground mt-2">Discover the Art of Visual Storytelling</p>
      </div>
    </div>
  );
}
