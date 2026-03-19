"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function Hero() {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="relative w-full min-h-[85vh] md:min-h-0 md:aspect-[21/9] flex flex-col items-center justify-center overflow-hidden py-20 md:py-0">
        <Image
          src="/assets/MPK Photo Studio.jpeg"
          alt="MPK SMAN 24"
          fill
          priority
          className="object-cover object-[center_30%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3),transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white mb-6"
          >
            Selamat Datang di MPK SMAN 24 Bandung
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Wadah aspirasi siswa, pengawas kinerja OSIS, dan penggerak perubahan
            positif di lingkungan sekolah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/aspirasi"
              className="group inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-4 text-sm font-medium shadow-lg transition-all hover:bg-black/80 dark:hover:bg-gray-200 hover:-translate-y-1"
            >
              Sampaikan Aspirasi
            </Link>

            <Link
              href="/tentang-kami"
              className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/20 hover:-translate-y-1"
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 bg-background border-t border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-8 lg:hidden text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
              Tentang Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full rounded-3xl overflow-hidden shadow-2xl group border border-border/50 order-1 lg:order-2 bg-muted/20"
            >
              <Image
                src="/assets/MPK Photo Studio.jpeg"
                alt="MPK SMAN 24 Studio"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col order-2 lg:order-1"
            >
              <h2 className="hidden lg:block text-5xl font-extrabold text-foreground mb-6">
                Tentang Kami
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                MPK SMAN 24 Bandung merupakan lembaga perwakilan siswa yang
                berfungsi sebagai representatif kelas serta mitra kerja OSIS
                dalam menjalankan kegiatan kesiswaan di sekolah. Melalui
                perannya sebagai aspirator, evaluator, dan planner, MPK
                berkomitmen menyalurkan aspirasi siswa, mengevaluasi program
                kerja, serta merancang gagasan demi terciptanya organisasi yang
                aktif, transparan, dan bertanggung jawab.
              </p>

              <div className="flex gap-4 sm:gap-8 mb-10 w-full">
                <div className="flex flex-col items-center sm:items-start bg-muted/30 p-4 rounded-xl border border-border/50 flex-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center gap-3">
                    <AnimatedNumber value={24} />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-muted-foreground mt-2 text-center sm:text-left">
                    Anggota
                  </span>
                </div>
                <div className="flex flex-col items-center sm:items-start bg-muted/30 p-4 rounded-xl border border-border/50 flex-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center gap-3">
                    <AnimatedNumber value={25} />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-muted-foreground mt-2 text-center sm:text-left">
                    Program Kerja
                  </span>
                </div>
              </div>

              <Link
                href="/tentang-kami"
                className="group inline-flex w-full sm:w-fit items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-4 text-sm font-medium shadow-lg transition-all hover:bg-black/80 dark:hover:bg-gray-200 hover:-translate-y-1"
              >
                Ketahui lebih lanjut
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 bg-muted/20 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-6 lg:hidden text-center md:text-left">
            <h3 className="text-sm font-bold tracking-widest text-brand uppercase mb-2">
              ASPIRASI BERKALA
            </h3>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
              Aspirasi Membangun <br className="hidden md:block" />
              Masa Depan!
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full lg:order-1 order-1 flex justify-center items-center"
            >
              <Image
                src="/assets/Aspirasi Berkala .png"
                alt="Aspirasi Berkala"
                width={1200}
                height={1200}
                className="w-2/3 max-w-xs h-auto object-contain hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col lg:order-2 order-2"
            >
              <div className="hidden lg:block">
                <h3 className="text-sm font-bold tracking-widest text-brand uppercase mb-3">
                  ASPIRASI BERKALA
                </h3>
                <h2 className="text-5xl font-extrabold text-foreground mb-6 leading-tight">
                  Aspirasi Membangun <br />
                  Masa Depan!
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10 text-center lg:text-left">
                Bantu kami membuat SMAN 24 BANDUNG menjadi lebih baik dengan
                aspirasi kalian.
              </p>

              <Link
                href="https://mpk-aspirasi-website.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQofB5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadWA-BWx9E2TnYVrnDGcQUyTZNSITjHoim5kadBJE8y1oUk0C1bB65tipsAJQ_aem_U9N5TFDcrsJq66yhdKT0aA"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-fit mx-auto lg:mx-0 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-8 py-4 text-sm font-medium shadow-lg transition-all hover:bg-black/80 dark:hover:bg-gray-200 hover:-translate-y-1"
              >
                Sampaikan Aspirasimu
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
