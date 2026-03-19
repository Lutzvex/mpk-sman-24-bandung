import { AnimatedSection } from "@/components/AnimatedSection";
import { Clock } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Galeri MPK | MPK SMAN 24 Bandung",
  description: "Galeri foto dan dokumentasi kegiatan MPK SMAN 24 Bandung",
};

export default function Gallery() {
  return (
    <main className="w-full flex-1 flex flex-col min-h-screen">
      <div className="relative w-full h-[25vh] md:h-[40vh] min-h-[160px] md:min-h-[250px] mb-10 md:mb-12 overflow-hidden flex items-center shrink-0">
        <Image
          src="/assets/SMAN 24 BANDUNG.jpg"
          alt="SMAN 24 Bandung Header"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
              Galeri MPK
            </h1>
          </AnimatedSection>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8 max-w-7xl font-sans flex flex-col flex-1">
        <AnimatedSection
          delay={0.1}
          className="flex-1 flex flex-col justify-center min-h-[50vh]"
        >
          <div className="flex flex-col items-center justify-center p-16 md:p-24 text-center rounded-3xl bg-muted/20 border border-border/50 drop-shadow-sm">
            <Clock className="h-20 w-20 text-muted-foreground mb-6 opacity-40 hover:scale-110 hover:opacity-100 transition-all duration-500" />
            <h2 className="text-4xl font-black text-foreground mb-4 tracking-tight">
              Coming Soon!
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Galeri foto dan dokumentasi kegiatan MPK SMAN 24 Bandung masih
              dalam tahap penyusunan.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
