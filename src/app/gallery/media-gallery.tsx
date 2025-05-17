"use client";

import { useState, useMemo } from "react";
import type { MediaItem as MediaItemType, Category } from "@/types";
import { MediaCard } from "@/components/media-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface MediaGalleryProps {
  items: MediaItemType[];
  categories: Category[];
  onOpenAiTagger: () => void; // Callback to open AI tagger modal
}

export function MediaGallery({ items, categories, onOpenAiTagger }: MediaGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredItems = useMemo(() => {
    return items
      .filter((item) =>
        selectedCategory === "all" ? true : item.category.toLowerCase() === selectedCategory.toLowerCase()
      )
      .filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
  }, [items, selectedCategory, searchTerm]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-card rounded-lg shadow">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200"
            >
              {category.icon && <category.icon className="mr-2 h-4 w-4" />}
              {category.name}
            </Button>
          ))}
        </Button>
        <Button onClick={onOpenAiTagger} variant="secondary" className="shadow hover:shadow-md">
          Suggest Tags with AI
        </Button>
        </div>
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search media..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          {searchTerm && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
              onClick={() => setSearchTerm("")}
            >
              <XCircle className="h-5 w-5 text-muted-foreground" />
            </Button>
          )}
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <MediaCard item={item} onViewDetails={() => { /* Implement detail view if needed */}} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No media items match your criteria.</p>
        </div>
      )}
    </div>
  );
}
