"use client"; // Required for React hooks like useRef, useState, useEffect

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mediaItems } from "@/data/media";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featuredMedia = mediaItems.slice(0, 6); // Using 6 items for a richer carousel

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap()); // 0-indexed

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    // Re-initialize autoplay when slides change, e.g. due to filtering (though not applicable here)
    api.on("slidesChanged", () => {
      autoplayPlugin.current.reset();
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10">
        <div className="container mx-auto text-center px-4 animate-in fade-in duration-700">
          <div className="inline-block p-3 bg-primary/10 rounded-lg mb-6">
            <Film className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.description} Discover a unique vision in filmmaking and
            photography.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:gap-0 sm:space-x-4">
            <Button
              size="lg"
              asChild
              className="shadow-lg hover:shadow-primary/30 transition-shadow w-full sm:w-auto"
            >
              <Link href="/gallery">
                View Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="shadow-lg hover:shadow-accent/30 transition-shadow w-full sm:w-auto group"
            >
              <Link href="/about">
                About Zano
                <Sparkles className="ml-2 h-5 w-5 text-yellow-400 group-hover:text-muted-foreground transition-colors duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Work
          </h2>
          <div className="relative px-0 sm:px-4 md:px-8">
            {" "}
            {/* Adjust padding for button visibility */}
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
              onMouseEnter={autoplayPlugin.current.stop}
              onMouseLeave={autoplayPlugin.current.reset}
            >
              <CarouselContent className="-ml-4">
                {featuredMedia.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 h-full flex flex-col">
                        <CardHeader className="p-0">
                          <Image
                            src={item.thumbnailSrc || item.src}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-60"
                            data-ai-hint={
                              item.dataAiHint || "director portfolio"
                            }
                          />
                        </CardHeader>
                        <CardContent className="pt-6 flex-grow">
                          <CardTitle className="text-xl mb-2">
                            {item.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="link"
                            asChild
                            className="p-0 text-primary"
                          >
                            <Link href={`/gallery?item=${item.id}`}>
                              View Details{" "}
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
            </Carousel>
            <div className="py-4 text-center text-sm text-muted-foreground">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 w-2 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-ring ring-offset-background transition-colors",
                    current === index
                      ? "bg-primary scale-125"
                      : "bg-muted hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="shadow-md hover:shadow-md transition-shadow"
            >
              <Link href="/gallery">Explore Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action / About Teaser */}
      <section className="w-full py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
        <div className="container mx-auto text-center px-4 animate-in fade-in duration-700">
          <h2 className="text-3xl font-bold mb-6">Meet the Director</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Learn more about Zano's journey, artistic philosophy, and how to
            collaborate on your next visionary project.
          </p>
          <Button
            size="lg"
            asChild
            className="shadow-lg hover:shadow-primary/30 transition-shadow"
          >
            <Link href="/about">Discover Zano's Story</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
