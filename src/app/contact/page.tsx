import { siteConfig } from "@/config/site";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Contact Us
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Get in touch with us.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-blue-600 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong> {siteConfig.phone}
            </p>
            <p>
              <strong>Location:</strong> {siteConfig.location}
            </p>
            <div>
              <strong>Social Media:</strong>
              <ul className="mt-2 flex space-x-4">
                {siteConfig.socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}