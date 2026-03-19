import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/assets/Logo_SMAN 24.png" alt="SMAN 24 Logo" width={48} height={48} className="object-contain" />
              <Image src="/assets/Logo_MPK.png" alt="MPK Logo" width={48} height={48} className="object-contain" />
            </div>
            <h3 className="text-lg font-bold text-foreground">MPK SMAN 24 Bandung</h3>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Majelis Perwakilan Kelas SMA Negeri 24 Bandung. Menampung aspirasi, mengawasi, dan mengarahkan menuju kebaikan bersama.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/tentang-kami" className="text-sm text-muted-foreground hover:text-brand transition-colors">Tentang Kami</Link></li>
              <li><Link href="/programs" className="text-sm text-muted-foreground hover:text-brand transition-colors">Programs</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-brand transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} MPK SMAN 24 Bandung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
