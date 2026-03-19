import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Aspirasi | MPK SMAN 24 Bandung",
  description: "Sampaikan aspirasi kamu untuk SMAN 24 Bandung yang lebih baik.",
};

export default function Aspirasi() {
  return (
    <main className="w-full">
      <div className="relative w-full h-[25vh] md:h-[40vh] min-h-[160px] md:min-h-[250px] mb-12 md:mb-16 overflow-hidden flex items-center">
        <Image
          src="/assets/SMAN 24 BANDUNG.jpg"
          alt="SMAN 24 Bandung Header"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 md:mb-4 drop-shadow-lg">
              Aspirasi
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl drop-shadow">
              Suaramu penting untuk kemajuan dan perbaikan bersama.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8 max-w-5xl">
        <AnimatedSection delay={0.1}>
          <div className="mb-4 lg:hidden text-center md:text-left pt-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Aspirasi Berkala
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center pt-2 lg:pt-8">
            <div className="flex-1 space-y-6 order-2 lg:order-1">
              <h2 className="hidden lg:block text-3xl font-bold tracking-tight text-foreground">
                Aspirasi Berkala
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
                Aspirasi Berkala merupakan program MPK yang bertujuan untuk
                menampung dan menyalurkan aspirasi siswa secara rutin, sebagai
                bentuk partisipasi aktif dalam membangun lingkungan sekolah yang
                lebih baik, transparan, dan demokratis.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Tujuan
                </h3>
                <ul className="space-y-3">
                  {[
                    "Menyediakan sarana penyampaian aspirasi siswa",
                    "Menjalin komunikasi yang efektif antara siswa dan pihak sekolah",
                    "Mendorong keterlibatan aktif siswa dalam kehidupan sekolah",
                    "Mendukung terciptanya lingkungan sekolah yang kondusif dan transparan",
                  ].map((tujuan, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-lg font-bold text-black dark:text-white mr-3 shrink-0 mt-1">
                        {index + 1}.
                      </span>
                      <span className="text-lg text-muted-foreground">
                        {tujuan}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="https://mpk-aspirasi-website.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQofB5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadWA-BWx9E2TnYVrnDGcQUyTZNSITjHoim5kadBJE8y1oUk0C1bB65tipsAJQ_aem_U9N5TFDcrsJq66yhdKT0aA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-4 font-medium shadow-lg transition-all hover:bg-black/80 dark:hover:bg-gray-200 hover:-translate-y-1 w-full sm:w-auto text-lg"
                >
                  Sampaikan Aspirasimu
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-lg hover:scale-105 transition-transform duration-700 drop-shadow-2xl">
                <Image
                  src="/assets/Aspirasi Berkala .png"
                  alt="Aspirasi Berkala"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
