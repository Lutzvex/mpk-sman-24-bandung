import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-black text-white dark:bg-background dark:border-border">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/Logo_SMAN 24.png"
                alt="SMAN 24 Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <Image
                src="/assets/Logo_MPK.png"
                alt="MPK Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-white">
              MPK SMAN 24 Bandung
            </h3>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              Majelis Perwakilan Kelas SMA Negeri 24 Bandung. Menampung
              aspirasi, mengawasi, dan mengarahkan menuju kebaikan bersama.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-sm text-white/70 hover:text-brand transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-sm text-white/70 hover:text-brand transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/aspirasi"
                  className="text-sm text-white/70 hover:text-brand transition-colors"
                >
                  Aspirasi
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-sm text-white/70 hover:text-brand transition-colors"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-sm text-white/70 hover:text-brand transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Connect
            </h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.instagram.com/mpk_sman24bdg?igsh=NXZ4cTJqY2Ntajhj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-brand transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@mpksman24bandung65?si=cNhzpDznxHfrUGer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-brand transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:mpksman24bdg@gmail.com"
                className="text-white/70 hover:text-brand transition-colors"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-white/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} MPK SMAN 24 Bandung. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
