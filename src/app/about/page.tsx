import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ContactForm } from "./contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AtSign, Film, Github, Linkedin, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About & Contact",
  description: `Learn more about ${siteConfig.name}, their work, and how to get in touch.`,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <section className="text-center mb-16 animate-in fade-in duration-500">
        <Film className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          About {siteConfig.name}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the director's vision, background, and passion for storytelling.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Bio Section */}
        <section className="md:col-span-2 space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">The Director's Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <Image
                src="https://placehold.co/800x450.png" // Placeholder for director's image or related imagery
                alt={`Image related to ${siteConfig.name}`}
                width={800}
                height={450}
                className="rounded-md object-cover mb-6 shadow-md"
                data-ai-hint="director cinematic"
              />
              <p>
                Ugliest Director Zano is a visionary filmmaker and photographer with a knack for capturing the extraordinary in the ordinary. 
                With years of experience spanning commercials, short films, and evocative portraiture, Zano brings a unique artistic sensibility to every project.
              </p>
              <p>
                Driven by a passion for visual storytelling, Zano believes in the power of images and motion to convey deep emotions and narratives. 
                The work is characterized by meticulous attention to detail, a creative approach to lighting and composition, and a commitment to pushing creative boundaries.
              </p>
              <p>
                This portfolio is a testament to a diverse range of projects, each reflecting a commitment to excellence and a distinctive artistic voice. 
                Whether it's a sweeping landscape, an intimate portrait, or a dynamic commercial piece, Zano's work aims to resonate and inspire.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <aside className="md:col-span-1 space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <AtSign className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">(123) 456-7890 (Placeholder)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Planet Earth (Usually)</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-semibold mb-2">Follow Zano</h4>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Send an Inquiry</h3>
            <ContactForm />
          </div>
        </aside>
      </div>
    </div>
  );
}
