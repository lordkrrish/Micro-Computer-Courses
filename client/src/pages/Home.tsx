import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
