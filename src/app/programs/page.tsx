import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import Image from "next/image";

export const metadata = {
  title: "Program Kerja | MPK SMAN 24 Bandung",
  description: "Program Kerja MPK SMAN 24 Bandung",
};

const programsData = [
  {
    komisi: "KOMISI A",
    programs: [
      "Aspiration day",
      "Mading aspirasi",
      "Mading profil",
      "Pohon aspirasi",
      "Semangka day",
      "Pengambilan aspirasi melalui media sosial",
      "Menfess",
    ],
  },
  {
    komisi: "KOMISI B",
    programs: [
      "Mengawasi dan mengevaluasi kinerja OSIS",
      "Melakukan evaluasi internal",
      "Rapat komisi secara rutin",
      "Bertanggung jawab atas MOU",
      "Bertanggung jawab atas kaderisasi tahap 3",
      "Bertanggung jawab atas pelaksanaan UPGRADING",
      "Menerima LPJ AT OSIS",
    ],
  },
  {
    komisi: "KOMISI C",
    programs: [
      "Kalender MPK",
      "GBHK",
      "Peraturan Organisasi",
      "Riung Mumpulung",
      "AD/ART",
      "TUS MPK",
      "PEMIRA",
      "Kaderisasi",
      "LPJ AT",
      "Rapat",
      "SCREENING",
    ],
  },
];

export default function Programs() {
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
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Program Kerja
            </h1>
          </AnimatedSection>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8 max-w-7xl">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programsData.map((group, index) => (
          <AnimatedSection key={group.komisi} delay={index * 0.1}>
            <Card className="p-8 h-full flex flex-col relative overflow-hidden bg-card border-t-4 border-t-black dark:border-t-white shadow-lg transition-transform hover:-translate-y-1 duration-300">
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
                {group.komisi}
              </h2>
              <ul className="space-y-4 flex-1">
                {group.programs.map((program, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-lg font-bold text-black dark:text-white mr-3 shrink-0 mt-0.5">
                      {idx + 1}.
                    </span>
                    <span className="text-lg text-foreground leading-snug">
                      {program}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      </div>
    </main>
  );
}
