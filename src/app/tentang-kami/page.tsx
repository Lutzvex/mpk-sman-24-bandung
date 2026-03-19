import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { Target, Lightbulb, ShieldCheck, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Tentang Kami | MPK SMAN 24 Bandung",
  description: "Visi, Misi, Garda Aspirasi, dan Pengenalan TRIXIIIUM MPK SMAN 24 Bandung.",
};

export default function About() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Header */}
      <AnimatedSection className="text-center md:max-w-3xl md:mx-auto mb-20">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Tentang Kami <span className="text-brand">MPK SMAN 24</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Majelis Perwakilan Kelas is the legislative and supervisory body of the student organization in SMAN 24 Bandung.
        </p>
      </AnimatedSection>

      {/* Garda Aspirasi Section */}
      <AnimatedSection delay={0.1} className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image 
                src="/assets/Logo_MPK.png" 
                alt="Logo MPK SMAN 24 Bandung" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              Garda Aspirasi & Demokrasi <br className="hidden md:block"/><span className="text-brand">SMAN 24 Bandung</span>
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
          <Card className="p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target className="h-40 w-40" />
            </div>
            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <div className="p-3 rounded-xl bg-brand/10 text-brand">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">VISI</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed flex-1 relative z-10">
              &quot;Menjadikan MPK SMA Negeri 24 Bandung sebagai organisasi yang profesional, inovatif, dan kreatif, berlandaskan IMTAQ dan nilai-nilai kekeluargaan, dengan fokus pada solidaritas, pemanfaatan IPTEK, serta pengembangan potensi anggota untuk mendukung tujuan organisasi dan visi misi sekolah.&quot;
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="h-full">
          <Card className="p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Lightbulb className="h-40 w-40" />
            </div>
            <div className="flex items-center space-x-4 mb-8 relative z-10">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                <Lightbulb className="h-8 w-8" />
              </div>
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
                  <span className="text-amber-500 font-bold mr-4 text-xl leading-none mt-1">{i + 1}.</span>
                  <span className="leading-snug">{misi}</span>
                </li>
              ))}
            </ul>
          </Card>
        </AnimatedSection>
      </div>

      {/* TRIXIIIUM Section */}
      <AnimatedSection delay={0.4} className="mb-24">
        <Card className="overflow-hidden border-border/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 bg-card">
            
            {/* Image Side */}
            <div className="lg:col-span-2 relative aspect-square lg:aspect-auto h-full min-h-[400px] lg:min-h-[500px]">
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
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
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
        </Card>
      </AnimatedSection>

      {/* Struktur Organisasi */}
      <AnimatedSection delay={0.5} className="mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
            <ShieldCheck className="h-8 w-8 text-brand" />
            Struktur Organisasi
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-12 text-center border-t-4 border-t-brand">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-border rounded-xl bg-background shadow-sm hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold text-foreground">Ketua Umum</h3>
                <p className="text-sm text-muted-foreground mt-2">Leading the organization</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-background shadow-sm hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold text-foreground">Sekretaris</h3>
                <p className="text-sm text-muted-foreground mt-2">Administrative tasks</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-background shadow-sm hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold text-foreground">Bendahara</h3>
                <p className="text-sm text-muted-foreground mt-2">Financial management</p>
              </div>
            </div>
            <div className="mt-8 p-6 border border-border rounded-xl bg-background shadow-sm hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-foreground">Komisi-Komisi</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
                Komisi A (Aspirasi & Penyaluran), Komisi B (Pengawasan & Evaluasi), Komisi C (Hukum & Etika Disiplin)
              </p>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}
