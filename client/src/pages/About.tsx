import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Trophy, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Industry Recognized",
      description: "Our certifications are valued by top employers across the technology sector."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Instructors",
      description: "Learn from professionals with years of real-world experience in their fields."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Practical Training",
      description: "Focus on hands-on projects and practical skills over pure theory."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <div id="about" className="py-24 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            MicroComputer is a premier institute dedicated to providing high-quality computer education. 
            Our mission is to empower students with the skills needed to succeed in the digital age. 
            With experienced instructors and a practical approach to learning, we ensure that every student 
            gains hands-on experience and industry-relevant knowledge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-12 border border-white/10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            "To bridge the digital divide by providing affordable, accessible, and high-quality computer education to students from all backgrounds, enabling them to build successful careers in technology."
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
