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
import { VisuallyHidden } from "@/components/ui/dialog"; // VisuallyHidden is exported from dialog.tsx
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react"; // Import useState

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State for sheet open/close

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label={siteConfig.name}
          onClick={() => setIsSheetOpen(false)}
        >
          <Film className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {siteConfig.navItems.map((item) => (
            item.href && ( // Ensure item.href exists
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center text-foreground hover:text-accent-foreground hover:bg-accent transition-colors p-3 rounded-md text-base",
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col space-y-4 mt-8">
                {siteConfig.navItems.map((item) => (
                  item.href && ( // Ensure item.href exists
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center p-3 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-base",
                        pathname === item.href
                          ? "text-primary font-medium"
                          : "text-foreground"
                      )}
                      onClick={() => setIsSheetOpen(false)} // Close sheet on link click
                    >
                      {item.icon && <item.icon className="mr-3 h-5 w-5" />}
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
