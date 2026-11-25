import Link from "next/link";
import { AtSign, Instagram, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "../about/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for film, photography, and creative collaborations.`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <section className="mb-14 text-center animate-in fade-in duration-700">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Let's Create
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Contact</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          For commissions, collaborations, films, or visual storytelling projects,
          reach out through any channel below.
        </p>
      </section>

      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <Card className="border-border/60 bg-card/70 shadow-xl shadow-black/5">
          <CardHeader>
            <CardTitle className="text-2xl tracking-tight">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-3">
              <AtSign className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">WhatsApp</p>
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
                <p className="font-semibold">Instagram</p>
                <div className="mt-1 flex flex-col gap-2">
                  <a
                    href={siteConfig.socialLinks.instagramCinematic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    @cinemagic <span className="text-xs text-muted-foreground/70">— Cinematic / Film</span>
                  </a>
                  <a
                    href={siteConfig.socialLinks.instagramLifestyle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    @uglydirectorzano <span className="text-xs text-muted-foreground/70">— Lifestyle / Weddings</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border/60 pt-5">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Quick Links
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={siteConfig.socialLinks.instagramCinematic} target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> Film
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={siteConfig.socialLinks.instagramLifestyle} target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" /> Lifestyle
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
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
