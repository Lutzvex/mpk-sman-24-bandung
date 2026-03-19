import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us | MPK SMAN 24 Bandung",
  description: "Get in touch with us",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
      <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Get in <span className="text-brand">Touch</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Have an aspiration, feedback, or a question? Reach out to us. We are here to listen and act.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <AnimatedSection delay={0.2} className="flex flex-col space-y-8">
          <Card className="p-8 flex items-start space-x-6 border-l-4 border-l-brand relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <MapPin className="h-32 w-32" />
            </div>
            <div className="p-4 bg-brand/10 text-brand rounded-2xl relative z-10">
              <MapPin className="h-8 w-8" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Our Location</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sekretariat MPK-OSIS<br />
                SMA Negeri 24 Bandung<br />
                Jl. A.H. Nasution No.27, Ujung Berung<br />
                Kota Bandung, Jawa Barat 40614
              </p>
            </div>
          </Card>

          <Card className="p-8 flex items-start space-x-6 relative overflow-hidden border-l-4 border-l-emerald-500">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Mail className="h-32 w-32" />
            </div>
            <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl relative z-10">
              <Mail className="h-8 w-8" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                mpk@sman24bdg.sch.id<br />
                aspirasi.mpk@gmail.com
              </p>
            </div>
          </Card>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection delay={0.4}>
          <Card className="p-8 md:p-10 h-full">
            <div className="flex items-center space-x-3 mb-8">
              <MessageSquare className="h-6 w-6 text-brand" />
              <h2 className="text-2xl font-bold">Send an Aspiration</h2>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" id="name" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="E.g. John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="class" className="text-sm font-medium text-foreground">Class</label>
                  <input type="text" id="class" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="E.g. XII MIPA 1" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input type="text" id="subject" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="E.g. Facility Feedback" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea id="message" rows={5} className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" placeholder="Tell us your aspiration or what's on your mind..."></textarea>
              </div>
              <button type="button" className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-brand px-8 py-3.5 text-sm font-medium text-white shadow transition-all hover:bg-brand-hover hover:-translate-y-0.5">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
