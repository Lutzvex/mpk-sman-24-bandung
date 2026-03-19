"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Programs", href: "/programs" },
  { name: "Aspirasi", href: "/aspirasi" },
  { name: "Galeri", href: "/gallery" },
  { name: "Kontak", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <Image src="/assets/Logo_SMAN 24.png" alt="SMAN 24 Logo" width={32} height={32} className="object-contain hover:scale-105 transition-transform" />
          <Image src="/assets/Logo_MPK.png" alt="MPK Logo" width={32} height={32} className="object-contain hover:scale-105 transition-transform" />
          <span className="text-[10px] sm:text-base md:text-xl font-bold tracking-tight text-foreground leading-tight max-w-[120px] sm:max-w-none">MPK SMAN 24 BANDUNG</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground font-semibold" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:flex-none md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:bg-muted p-2 rounded-md transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-foreground/10 text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
