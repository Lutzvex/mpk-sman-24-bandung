import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Gallery | MPK SMAN 24 Bandung",
  description: "Memories and highlights of our activities",
};

// Dummy image placeholders with gradient backgrounds to emulate a high-quality visual feel
const galleryItems = [
  { id: 1, title: "LDKS 2023", color: "from-blue-500 to-indigo-600" },
  { id: 2, title: "Pemilu OSIS", color: "from-emerald-400 to-teal-600" },
  { id: 3, title: "Sidang Paripurna", color: "from-purple-500 to-pink-600" },
  { id: 4, title: "Rapat Kerja", color: "from-amber-400 to-orange-500" },
  { id: 5, title: "Baksos", color: "from-cyan-400 to-blue-600" },
  { id: 6, title: "Class Meeting", color: "from-rose-400 to-red-500" },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Media <span className="text-brand">Gallery</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse through memories and highlights of our recent activities.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {galleryItems.map((item, index) => (
          <AnimatedSection key={item.id} delay={index * 0.1}>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-border bg-muted cursor-pointer transition-shadow hover:shadow-xl dark:hover:shadow-brand/5">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:scale-105 transition-transform duration-500`}></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <h3 className="text-white text-2xl font-bold tracking-tight opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.title}
                </h3>
                <div className="h-1 w-12 bg-white rounded-full mt-4 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-100"></div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
