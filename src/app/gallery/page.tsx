import { AnimatedSection } from "@/components/AnimatedSection";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Galeri MPK | MPK SMAN 24 Bandung",
  description: "Galeri foto dan dokumentasi kegiatan MPK SMAN 24 Bandung",
};

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl font-sans flex border flex-col h-full h-screen">
      <AnimatedSection className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-black dark:text-white">
          Galeri MPK
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="flex-1 flex flex-col justify-center min-h-[50vh]">
        <div className="flex flex-col items-center justify-center p-16 md:p-24 text-center rounded-3xl bg-muted/20 border border-border/50 drop-shadow-sm">
          <Clock className="h-20 w-20 text-muted-foreground mb-6 opacity-40 hover:scale-110 hover:opacity-100 transition-all duration-500" />
          <h2 className="text-4xl font-black text-foreground mb-4 tracking-tight">Coming Soon!</h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Galeri foto dan dokumentasi kegiatan MPK SMAN 24 Bandung masih dalam tahap penyusunan.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
