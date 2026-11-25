
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { aboutImages } from "@/data/media";
import { ContactForm } from "./contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, AtSign, Phone, Instagram, MessageCircle } from "lucide-react";

export default function AboutPage() {
  const [aboutIndex, setAboutIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setAboutIndex((current) => (current + 1) % aboutImages.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <section className="mb-16 text-center animate-in fade-in duration-700">
        <div className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 p-4">
          <Film className="h-10 w-10 text-accent" />
        </div>
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          The Story
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          About {siteConfig.name}
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A glimpse into the director's vision, craft, and passion for cinematic storytelling.
        </p>
      </section>

      <div className="grid items-start gap-12 md:grid-cols-3">
        <section className="space-y-8 md:col-span-2 animate-in fade-in slide-in-from-left-6 duration-700">
          <Card className="overflow-hidden border-border/60 bg-card/70 shadow-xl shadow-black/5">
            <CardHeader>
              <CardTitle className="text-2xl tracking-tight">The Director's Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground/90">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg md:aspect-[16/10]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={aboutImages[aboutIndex]}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={aboutImages[aboutIndex]}
                      alt={`${siteConfig.name} portrait`}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover"
                      priority={aboutIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {aboutImages.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setAboutIndex(index)}
                      aria-label={`Show about image ${index + 1}`}
                      className={`h-1.5 w-10 rounded-full transition-all duration-500 ${
                        aboutIndex === index ? "bg-accent" : "bg-white/45 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                Ugliest Director Zano is a visionary filmmaker and photographer with a
                sharp eye for capturing the extraordinary in the ordinary. With
                experience spanning commercials, short films, and evocative portraiture,
                Zano brings a distinctive artistic sensibility to every project.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Driven by a passion for visual storytelling, Zano believes in the power
                of images and motion to convey deep emotion and narrative. The work is
                defined by meticulous attention to detail, intentional composition, and a
                commitment to pushing creative boundaries.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                This portfolio is a testament to a diverse body of work, each frame
                reflecting a commitment to excellence and a singular creative voice.
                From intimate portraits to dynamic cinematic pieces, Zano's work aims to
                resonate, inspire, and endure.
              </p>
            </CardContent>
          </Card>
        </section>

        <aside className="space-y-8 md:col-span-1 animate-in fade-in slide-in-from-right-6 duration-700">
          <Card className="border-border/60 bg-card/70 shadow-xl shadow-black/5">
            <CardHeader>
              <CardTitle className="text-2xl tracking-tight">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-start gap-3">
                <AtSign className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="break-all text-muted-foreground transition-colors hover:text-accent"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <a
                    href={siteConfig.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold">Instagram</h4>
                  <div className="flex flex-col gap-1">
                    <a
                      href={siteConfig.socialLinks.instagramCinematic}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      @cinemagic <span className="text-xs text-muted-foreground/70">(Film)</span>
                    </a>
                    <a
                      href={siteConfig.socialLinks.instagramLifestyle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      @uglydirectorzano <span className="text-xs text-muted-foreground/70">(Lifestyle/Weddings)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="mb-3 font-semibold">Connect</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={siteConfig.socialLinks.instagramCinematic} target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-4 w-4" /> @cinemagic
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={siteConfig.socialLinks.instagramLifestyle} target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-4 w-4" /> @uglydirectorzano
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" /> WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 text-2xl font-semibold tracking-tight">Send an Inquiry</h3>
            <ContactForm />
          </div>
        </aside>
      </div>
    </div>
  );
}
