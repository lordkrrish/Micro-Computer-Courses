import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      <div id="about" className="py-24 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            MicroComputer is a premier institute dedicated to providing high-quality computer education. 
            Our mission is to empower students with the skills needed to succeed in the digital age. 
            With experienced instructors and a practical approach to learning, we ensure that every student 
            gains hands-on experience and industry-relevant knowledge.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
