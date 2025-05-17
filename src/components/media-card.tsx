import Image from "next/image";
import type { MediaItem } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Video, Image as ImageIcon } from "lucide-react";

interface MediaCardProps {
  item: MediaItem;
  onViewDetails?: (item: MediaItem) => void; // Optional: For modal or detailed view
}

export function MediaCard({ item, onViewDetails }: MediaCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Image
          src={item.thumbnailSrc || item.src}
          alt={item.title}
          width={600}
          height={400}
          className="object-cover w-full aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={item.dataAiHint || "portfolio media"}
        />
        <div className="absolute top-2 right-2 bg-background/70 backdrop-blur-sm p-1.5 rounded-md">
          {item.type === "video" ? <Video className="w-5 h-5 text-foreground" /> : <ImageIcon className="w-5 h-5 text-foreground" />}
        </div>
      </CardHeader>
      <CardContent className="pt-4 flex-grow">
        <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          <Badge variant="secondary">{item.category}</Badge>
        </div>
        <div className="flex flex-wrap gap-1">
          {item.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {item.tags.length > 3 && <Badge variant="outline" className="text-xs">...</Badge>}
        </div>
      </CardContent>
      <CardFooter>
        {onViewDetails ? (
          <Button variant="ghost" className="w-full justify-start p-2 text-sm" onClick={() => onViewDetails(item)}>
            View Details <ArrowUpRight className="ml-auto h-4 w-4" />
          </Button>
        ) : (
           <span className="text-xs text-muted-foreground">Details unavailable</span>
        )}
      </CardFooter>
    </Card>
  );
}
