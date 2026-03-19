import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Kontak Kami | MPK SMAN 24 Bandung",
  description: "Hubungi kami untuk menyampaikan aspirasi, masukan, atau pertanyaan Anda",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
      <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Kontak Kami
        </h1>
        <p className="text-lg text-muted-foreground">
          Hubungi kami untuk menyampaikan aspirasi, masukan, atau pertanyaan Anda
        </p>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto w-full">
        <AnimatedSection delay={0.2} className="flex flex-col space-y-10 mb-20 text-center md:text-left">
          
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Alamat</h3>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Jl. A.H. Nasution No.27 Bandung
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground md:text-lg leading-relaxed font-medium">
              mpksman24bdg@gmail.com
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Telepon & Kontak</h3>
            <div className="text-muted-foreground md:text-lg leading-relaxed space-y-2">
              <p><strong>Telp/Fax:</strong> (022) 7800196</p>
              <p><strong>ID Line:</strong> anamahabatain (Ana)</p>
              <p><strong>No. WA:</strong> 0882-1889-8343 (Ana)</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Sosial Media</h3>
            <div className="text-muted-foreground md:text-lg leading-relaxed space-y-2">
              <p>Instagram: @mpk_sman24bdg</p>
              <p>Youtube: @mpksman24bandung65</p>
            </div>
          </div>
          
        </AnimatedSection>

        {/* Google Maps Section */}
        <AnimatedSection delay={0.4} className="w-full mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center md:text-left">Lokasi SMAN 24 Bandung</h2>
          <div className="w-full overflow-hidden rounded-xl border border-border/50 shadow-lg relative aspect-[16/9] md:aspect-[21/9]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.860926956328!2d107.68697243433638!3d-6.907228491821647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd4115ba1931%3A0x64f024f236515588!2sSMA%20Negeri%2024%20Bandung!5e0!3m2!1sid!2sid!4v1773931010453!5m2!1sid!2sid" 
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
