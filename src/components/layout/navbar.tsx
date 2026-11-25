"use client";

import Link from "next/link";
import { Menu, Film } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label={siteConfig.name}
          onClick={() => setIsSheetOpen(false)}
        >
          <Film className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.navItems.map((item) =>
            item.href ? (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={cn(
                  "rounded-md px-4 py-2 text-sm tracking-wide transition-colors",
                  pathname === item.href
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ) : null
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-border/60 bg-background/95 backdrop-blur-xl">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="mt-10 flex flex-col gap-2">
                {siteConfig.navItems.map((item) =>
                  item.href ? (
                    <Link
                      key={`${item.href}-${item.label}-mobile`}
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-md px-4 py-3 text-base transition-colors",
                        pathname === item.href
                          ? "bg-accent/10 text-accent"
                          : "text-foreground hover:bg-accent/5"
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.icon && <item.icon className="mr-3 h-5 w-5" />}
                      {item.label}
                    </Link>
                  ) : null
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
