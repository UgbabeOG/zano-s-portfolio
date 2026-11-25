import type { MediaItem, Category } from "@/types";
import {
  Video as VideoIcon,
  Briefcase as BriefcaseIcon,
  Mountain,
  Users,
} from "lucide-react";

export const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "portrait", name: "Portrait", icon: Users },
  { id: "landscape", name: "Landscape", icon: Mountain },
  { id: "commercial", name: "Commercial", icon: BriefcaseIcon },
  { id: "short-film", name: "Short Film", icon: VideoIcon },
  { id: "backstage", name: "Backstage", icon: VideoIcon },
];

export const heroImages = ["/hero-image.jpeg", "/hero-image2.jpeg"];
export const aboutImages = ["/about-image.jpeg", "/about-image2.jpeg"];

export const mediaItems: MediaItem[] = [
  {
    id: "1",
    type: "image",
    src: "/IMG_2577.JPG.jpeg",
    title: "Cinematic Portrait",
    description: "A moody portrait study shaped by light, texture, and presence.",
    category: "portrait",
    tags: ["portrait", "cinematic", "editorial", "mood"],
    dataAiHint: "cinematic portrait",
  },
  {
    id: "2",
    type: "image",
    src: "/IMG_2578.JPG.jpeg",
    title: "Frame in Motion",
    description: "A visual narrative capturing character through composition.",
    category: "short-film",
    tags: ["film", "storytelling", "character", "cinema"],
    dataAiHint: "film still",
  },
  {
    id: "3",
    type: "image",
    src: "/IMG_2579.JPG.jpeg",
    title: "Natural Light Study",
    description: "An intimate moment framed with natural light and atmosphere.",
    category: "landscape",
    tags: ["natural light", "atmosphere", "outdoor", "visual"],
    dataAiHint: "natural light",
  },
  {
    id: "4",
    type: "image",
    src: "/IMG_2580.JPG.jpeg",
    title: "Behind the Lens",
    description: "A backstage glimpse into the craft behind the camera.",
    category: "backstage",
    tags: ["backstage", "production", "director", "craft"],
    dataAiHint: "backstage production",
  },
  {
    id: "5",
    type: "image",
    src: "/IMG_2585.JPG.jpeg",
    title: "Editorial Vision",
    description: "A polished commercial frame with bold visual intent.",
    category: "commercial",
    tags: ["commercial", "editorial", "brand", "style"],
    dataAiHint: "editorial commercial",
  },
  {
    id: "6",
    type: "image",
    src: "/IMG_2588.JPG.jpeg",
    title: "Silent Narrative",
    description: "A still frame that carries the weight of an untold story.",
    category: "portrait",
    tags: ["portrait", "narrative", "moody", "story"],
    dataAiHint: "moody portrait",
  },
];
