import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { CalendarDays } from "lucide-react";

export const metadata = {
  title: "Programs | MPK SMAN 24 Bandung",
  description: "Explore our programs and events",
};

const programs = [
  {
    id: 1,
    title: "Aspirasi Box",
    status: "Active",
    description: "A continuous program to collect feedback and aspirations from all students regarding school facilities, events, and policies.",
    duration: "All Year Round"
  },
  {
    id: 2,
    title: "Pemilu OSIS",
    status: "Upcoming",
    description: "The democratic election process for the new OSIS leaders, promoting transparency and student engagement.",
    duration: "October 2024"
  },
  {
    id: 3,
    title: "Evaluasi Triwulan",
    status: "Active",
    description: "Quarterly evaluation of OSIS performance to ensure all planned programs are executed effectively.",
    duration: "Quarterly"
  },
  {
    id: 4,
    title: "Bulan Etika & Disiplin",
    status: "Completed",
    description: "A month-long campaign to promote good ethics and discipline among students through various interactive activities.",
    duration: "February 2024"
  }
];

export default function Programs() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Our <span className="text-brand">Programs</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the initiatives and programs we organize to improve the student experience and oversee student activities.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <AnimatedSection key={program.id} delay={index * 0.1}>
            <Card isHoverable className="p-8 h-full flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform group-hover:scale-110">
                <CalendarDays className="h-40 w-40" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-foreground max-w-[75%] leading-tight">{program.title}</h3>
                  <span className={`px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-md border ${
                    program.status === 'Active' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' : 
                    program.status === 'Upcoming' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' : 
                    'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20'
                  }`}>
                    {program.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-8 flex-1 text-lg">
                  {program.description}
                </p>
                <div className="inline-flex items-center self-start text-sm font-semibold text-foreground bg-muted/50 px-4 py-2 rounded-lg border border-border/50 shadow-sm">
                  <CalendarDays className="h-4 w-4 mr-2 text-brand" />
                  {program.duration}
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
