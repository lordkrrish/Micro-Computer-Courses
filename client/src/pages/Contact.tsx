import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      <div id="contact" className="py-12">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
