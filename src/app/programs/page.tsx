import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { CheckCircle2 } from "lucide-react";

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
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-black dark:text-white">
          Program Kerja
        </h1>
      </AnimatedSection>

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
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
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
  );
}
