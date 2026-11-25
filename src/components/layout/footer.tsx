import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80 py-10 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            Film & Photography
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild className="hover:text-accent">
            <Link
              href={siteConfig.socialLinks.instagramCinematic}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cinematic"
              title="@cinemagic"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:text-accent">
            <Link
              href={siteConfig.socialLinks.instagramLifestyle}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Lifestyle"
              title="@uglydirectorzano"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:text-accent">
            <Link
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
