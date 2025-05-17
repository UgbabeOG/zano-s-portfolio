
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { suggestMediaTags, SuggestMediaTagsInput } from "@/ai/flows/suggest-media-tags";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// A small, transparent 1x1 PNG as a Base64 data URI
const EXAMPLE_IMAGE_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";


interface AiTagSuggesterProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AiTagSuggester({ isOpen, onOpenChange }: AiTagSuggesterProps) {
  const [description, setDescription] = useState("");
  const [mediaDataUri, setMediaDataUri] = useState(EXAMPLE_IMAGE_DATA_URI); // Default to example
  const [mediaType, setMediaType] = useState<"image" | "video">("image");
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!mediaDataUri) {
      toast({
        title: "Error",
        description: "Please provide a media data URI (or use the example).",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSuggestedTags([]);

    try {
      const input: SuggestMediaTagsInput = {
        mediaDataUri,
        mediaType,
        description: description || undefined,
      };
      const result = await suggestMediaTags(input);
      setSuggestedTags(result.tags);
      toast({
        title: "Tags Suggested!",
        description: "AI has successfully suggested tags for your media.",
      });
    } catch (error) {
      console.error("Error suggesting tags:", error);
      toast({
        title: "Error",
        description: "Failed to suggest tags. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-accent" />
            AI Tag Suggester
          </DialogTitle>
          <DialogDescription>
            Provide media details to get AI-powered tag suggestions. For demo purposes, you can use the example data URI.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full"
              placeholder="Optional: e.g., 'Sunset over mountains'"
            />
          </div>
          <div>
            <Label htmlFor="mediaDataUri">Media Data URI</Label>
            <Input
              id="mediaDataUri"
              value={mediaDataUri}
              onChange={(e) => setMediaDataUri(e.target.value)}
              className="mt-1 w-full"
              placeholder="data:image/png;base64,..."
            />
          </div>
           <div>
            <Label htmlFor="mediaType">Media Type</Label>
            <select
              id="mediaType"
              value={mediaType}
              onChange={(e) => setMediaType(e.target.value as "image" | "video")}
              className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>

          {suggestedTags.length > 0 && (
            <div className="pt-2">
              <Label>Suggested Tags:</Label>
              <div className="flex flex-wrap gap-2 mt-2 p-3 border rounded-md bg-muted/50">
                {suggestedTags.map((tag, index) => (
                  <Badge key={index} variant="default">{tag}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Get AI Tags
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
