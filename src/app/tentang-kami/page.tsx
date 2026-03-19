import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { ShieldCheck, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Tentang Kami | MPK SMAN 24 Bandung",
  description: "Visi, Misi, Garda Aspirasi, dan Pengenalan TRIXIIIUM MPK SMAN 24 Bandung.",
};

const orgStructure = [
  {
    category: "Pengurus Inti",
    items: [
      {
        image: "/assets/Ketua umum dan wakil ketua umum mpk.jpeg",
        members: [
          { role: "KETUA UMUM", name: "Fathan Dwi Raditya" },
          { role: "WAKIL KETUA UMUM", name: "Ana Nurul Mahabatain Wijayanti" }
        ],
        featured: true
      },
      {
        image: "/assets/Sekretaris MPK.jpeg",
        members: [
          { role: "SEKRETARIS 1", name: "Hana Khairunnisa" },
          { role: "SEKRETARIS 2", name: "Zahira Kekasih Hati" }
        ]
      },
      {
        image: "/assets/Bendahara MPK.jpeg",
        members: [
          { role: "BENDAHARA 1", name: "Keiza Abiyyaqzhan Hamdani" },
          { role: "BENDAHARA 2", name: "Lathifah Dewi Kirana" }
        ]
      }
    ]
  },
  {
    category: "Komisi A (Aspirasi & Penyaluran)",
    items: [
      {
        image: "/assets/Ketua Komisi A MPK.jpeg",
        members: [
          { role: "KETUA KOMISI A", name: "Friska Agustina Wulandari" }
        ],
        featured: true
      },
      {
        image: "/assets/Koordinator Aspirasi Sekolah.jpeg",
        members: [
          { role: "KOORDINATOR ASPIRASI SEKOLAH 1", name: "Farrel Ibnu Khiar" },
          { role: "KOORDINATOR ASPIRASI SEKOLAH 2", name: "Rachma Nuraini" },
          { role: "KOORDINATOR ASPIRASI SEKOLAH 3", name: "Raisya Shafa Rafidah" }
        ]
      },
      {
        image: "/assets/Koordinator OSIS.jpeg",
        members: [
          { role: "KOORDINATOR OSIS 1", name: "Tsaabitah Abidah Hasna" },
          { role: "KOORDINATOR OSIS 2", name: "Alfan Maulana Setiawan" }
        ]
      }
    ]
  },
  {
    category: "Komisi B (Pengawasan & Evaluasi)",
    items: [
      {
        image: "/assets/Ketua Komisi B MPK.jpeg",
        members: [
          { role: "KETUA KOMISI B", name: "Rizky Herlambang Putra Sumirat" }
        ],
        featured: true
      },
      {
        image: "/assets/Evaluator MPK.jpeg",
        members: [
          { role: "EVALUATOR 1", name: "Advaya Fathin Satria" },
          { role: "EVALUATOR 2", name: "Fiisabiila Radisty Reflianti" },
          { role: "EVALUATOR 3", name: "Adla Muhammad Firdaus" },
          { role: "EVALUATOR 4", name: "Idham Maulana Hakim" },
          { role: "EVALUATOR 5", name: "Muhammad Gaza Saputra" }
        ]
      }
    ]
  },
  {
    category: "Komisi C (Hukum & Etika Disiplin)",
    items: [
      {
        image: "/assets/Ketua Komisi C MPK.jpeg",
        members: [
          { role: "KETUA KOMISI C", name: "Muhammad Adli Huzaeni" }
        ],
        featured: true
      },
      {
        image: "/assets/Koordinator Planner Internal.jpeg",
        members: [
          { role: "KOORDINATOR PLANNER INTERNAL 1", name: "Raffi Muhammad Aziz" },
          { role: "KOORDINATOR PLANNER INTERNAL 2", name: "Almaira Tharazayna Adityan" },
          { role: "KOORDINATOR PLANNER INTERNAL 3", name: "Anisa Putri Gunawan" }
        ]
      },
      {
        image: "/assets/Koordinator Planner Eksternal.jpeg",
        members: [
          { role: "KOORDINATOR PLANNER EKSTERNAL 1", name: "Fathir Raihan Muzakki" },
          { role: "KOORDINATOR PLANNER EKSTERNAL 2", name: "Alynda Natasya" }
        ]
      }
    ]
  }
];

export default function About() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Header */}
      <AnimatedSection className="text-center md:max-w-3xl md:mx-auto mb-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Tentang Kami
        </h1>
      </AnimatedSection>

      {/* Garda Aspirasi Section */}
      <AnimatedSection delay={0.1} className="mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight text-center md:text-left">
              Garda Aspirasi & Demokrasi SMAN 24 Bandung
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Sebagai lembaga tertinggi kesiswaan, MPK mengemban tanggung jawab dalam menjaga ekosistem demokrasi sekolah melalui lima fungsi utama:
            </p>
            <ul className="space-y-6">
              {[
                { title: "Legislasi", desc: "Menyusun dan menetapkan aturan serta kebijakan organisasi siswa yang berlandaskan nilai keadilan dan kepentingan bersama." },
                { title: "Aspirasi", desc: "Menjadi jembatan komunikasi yang aktif untuk menampung ide, kritik, dan saran dari seluruh siswa SMAN 24 Bandung untuk disampaikan kepada pihak sekolah." },
                { title: "Supervisi & Evaluasi", desc: "Memantau jalannya program kerja OSIS secara objektif serta memberikan penilaian performa demi kualitas kegiatan yang lebih baik." },
                { title: "Kaderisasi", desc: "Menyelenggarakan proses seleksi dan uji kelayakan bagi calon pengurus OSIS untuk memastikan keberlanjutan kepemimpinan yang berintegritas." },
                { title: "Advokasi", desc: "Bertindak sebagai penengah atau mediator dalam menyelesaikan permasalahan antar-organisasi maupun isu kesiswaan lainnya dengan asas keadilan." }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand mr-4 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-foreground text-lg">{item.title}: </span>
                    <span className="text-muted-foreground text-md leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Visi & Misi */}
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12 mb-24">
        <AnimatedSection delay={0.2} className="h-full">
          <div className="md:px-2 md:py-4 h-full flex flex-col relative overflow-hidden">
            <div className="flex items-center mb-6 relative z-10">
              <h2 className="text-3xl font-bold tracking-tight">VISI</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed flex-1 relative z-10">
              &quot;Menjadikan MPK SMA Negeri 24 Bandung sebagai organisasi yang profesional, inovatif, dan kreatif, berlandaskan IMTAQ dan nilai-nilai kekeluargaan, dengan fokus pada solidaritas, pemanfaatan IPTEK, serta pengembangan potensi anggota untuk mendukung tujuan organisasi dan visi misi sekolah.&quot;
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="h-full">
          <div className="md:px-2 md:py-4 h-full flex flex-col relative overflow-hidden">
            <div className="flex items-center mb-8 relative z-10">
              <h2 className="text-3xl font-bold tracking-tight">MISI</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground text-lg flex-1 relative z-10">
              {[
                "Melaksanakan iman dan taqwa kepada Tuhan Yang Maha Esa",
                "Menjunjung tinggi norma, etika, dan nilai-nilai Pancasila dalam setiap program kerja",
                "Memaksimalkan penggunaan teknologi informasi dan IPTEK dalam program kerja",
                "Meningkatkan rasa solidaritas dan kerja sama antar anggota",
                "Mengembangkan keterampilan dan kompetensi anggota",
                "Menciptakan lingkungan yang harmonis dan produktif"
              ].map((misi, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-foreground font-bold mr-4 text-xl leading-none mt-1">{i + 1}.</span>
                  <span className="leading-snug">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>

      {/* TRIXIIIUM Section */}
      <AnimatedSection delay={0.4} className="mb-24">
        <div className="overflow-hidden border-none shadow-none">
          <div className="flex flex-col bg-transparent">
            
            {/* Image Side */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[300px]">
              <Image 
                src="/assets/TRIXIIIUM.jpeg" 
                alt="TRIXIIIUM MPK 13" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">TRIXIIIUM</h3>
                <p className="text-white/80 font-medium tracking-wide text-sm md:text-base">Equality, Integrity, Morality — To the Top, Never Stop</p>
              </div>
            </div>

            {/* Text Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-block px-5 py-2 rounded-full bg-brand/10 text-brand font-bold text-sm mb-8 w-fit tracking-widest uppercase">
                [ WELCOME TRIXIIIUM ]
              </div>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p className="font-semibold text-foreground text-xl">Salam hangat, Radupat!</p>
                <p>
                  Angkatan kami bernaung di bawah nama <strong className="text-foreground">TRIXIIIUM</strong> dengan makna Equality, Integrity, Morality — To the Top, Never Stop. TRIXIIIUM menjadi jati diri Angkatan 13 MPK SMAN 24 Bandung yang visioner, berintegritas, dan penuh dedikasi. Dengan semangat kemenangan, keandalan, serta persatuan, kami berkomitmen untuk terus bergerak melampaui batas, menjaga nilai-nilai organisasi, dan bersama meraih tujuan demi kemajuan MPK.
                </p>
                <p>
                  Filosofi logo TRIXIIIUM melambangkan nilai yang kami pegang. Neraca menggambarkan komitmen menjunjung tinggi keadilan, sementara bintang yang melaju melambangkan semangat untuk terus maju meraih tujuan besar. Helm prajurit pada huruf I menjadi simbol kesiapan menjaga nilai organisasi sekaligus berinovasi. Tiga pilar bangunan Yunani melambangkan kestabilan serta tiga fungsi utama MPK sebagai Aspirator, Evaluator, dan Planner. Warna emas di awal dan akhir menjadi simbol harapan akan kejayaan dari awal hingga akhir masa jabatan.
                </p>
                <p>
                  Dengan doa dan dukungan dari seluruh Radupat, TRIXIIIUM siap melangkah dengan integritas, semangat kolaborasi, dan tanggung jawab untuk menjalankan setiap amanah dengan sebaik-baiknya.
                </p>
                <p className="font-bold text-brand mt-6 pt-6 border-t border-border/50 text-xl">
                  — MPK&apos;13
                </p>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Struktur Organisasi */}
      <AnimatedSection delay={0.5} className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold flex items-center justify-center gap-3 tracking-tight">
            <ShieldCheck className="h-10 w-10 text-brand" />
            Struktur Organisasi
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Anggota dan Pengurus MPK SMAN 24 Bandung
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-24">
          {orgStructure.map((category, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="inline-block px-6 py-2 rounded-full bg-brand/10 text-brand font-bold text-sm mb-10 w-fit tracking-widest uppercase text-center mx-auto">
                {category.category}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-center">
                {category.items.map((item, itemIdx) => (
                  <Card 
                    key={itemIdx} 
                    className={`overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card flex flex-col ${
                      item.featured ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] bg-muted/30">
                      <Image
                        src={item.image}
                        alt={item.members.map(m => m.name).join(", ")}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center bg-card flex-1 border-t border-border/50">
                      <ul className="space-y-4">
                        {item.members.map((member, mIdx) => (
                          <li key={mIdx} className="flex flex-col">
                            <span className="text-xs font-bold text-brand uppercase tracking-wider mb-1">{member.role}</span>
                            <span className="text-lg font-semibold text-foreground leading-snug">{member.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
