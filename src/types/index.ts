export type MediaItem = {
  id: string;
  type: 'image' | 'video';
  src: string; 
  thumbnailSrc?: string; // Optional: if video thumbnail is different from src
  title: string;
  description: string;
  category: string;
  tags: string[];
  dataAiHint?: string; // For placeholder image generation
};

export type Category = {
  id: string;
  name: string;
  icon?: React.ElementType; // For Lucide icons
};
