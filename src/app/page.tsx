"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroImages, mediaItems } from "@/data/media";
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
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featuredMedia = mediaItems.slice(0, 6);
  const [heroIndex, setHeroIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    api.on("slidesChanged", () => autoplayPlugin.current.reset());
  }, [api]);

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full min-h-[88vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={heroImages[heroIndex]}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={heroImages[heroIndex]}
                alt="Cinematic hero visual"
                fill
                priority={heroIndex === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_45%)]" />
        </div>

        <div className="relative container mx-auto flex min-h-[88vh] items-center px-4 py-24">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80 backdrop-blur-sm">
              <Film className="h-4 w-4 text-accent" />
              Film & Photography Director
            </div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/60">
              Visual Storytelling
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              {siteConfig.description} Crafting cinematic frames that feel intimate,
              intentional, and unforgettable.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90"
              >
                <Link href="/gallery">
                  View Gallery <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/25 bg-black/20 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/about">
                  About Zano
                  <Sparkles className="ml-2 h-5 w-5 text-accent" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 flex gap-3">
              {heroImages.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setHeroIndex(index)}
                  aria-label={`Show hero image ${index + 1}`}
                  className={cn(
                    "h-1.5 w-14 rounded-full transition-all duration-500",
                    heroIndex === index ? "bg-accent" : "bg-white/30 hover:bg-white/55"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Selected Frames
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Featured Work
            </h2>
          </div>
          <div className="relative px-0 sm:px-4 md:px-8">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
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
                      <Card className="group h-full overflow-hidden border-border/60 bg-card/70 shadow-none transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/10">
                        <CardHeader className="p-0">
                          <div className="relative overflow-hidden">
                            <Image
                              src={item.thumbnailSrc || item.src}
                              alt={item.title}
                              width={900}
                              height={1200}
                              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              data-ai-hint={item.dataAiHint || "director portfolio"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow pt-6">
                          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            {item.category}
                          </p>
                          <CardTitle className="mb-2 text-xl">{item.title}</CardTitle>
                          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="link" asChild className="p-0 text-primary">
                            <Link href="/gallery">
                              View Details <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 sm:flex" />
              <CarouselNext className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 sm:flex" />
            </Carousel>
            <div className="py-4 text-center text-sm text-muted-foreground">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "mx-1 h-2 w-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-ring ring-offset-background",
                    current === index
                      ? "scale-125 bg-accent"
                      : "bg-muted hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="secondary" asChild className="shadow-md">
              <Link href="/gallery">Explore Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-border/50 bg-secondary/30 py-16 md:py-24 dark:bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Behind the Vision
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Meet the Director</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Learn more about Zano's journey, artistic philosophy, and how to
            collaborate on your next visionary project.
          </p>
          <Button size="lg" asChild className="shadow-lg shadow-primary/20">
            <Link href="/about">Discover Zano's Story</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
