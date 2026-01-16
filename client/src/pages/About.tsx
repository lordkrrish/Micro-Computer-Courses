import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Trophy, Users, Star } from "lucide-react";

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
    <div className="min-h-screen bg-black text-white pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <div id="about" className="py-24 container mx-auto px-4 relative overflow-hidden">
        {/* Background Accents (Synced with Courses) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 -right-24 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            MicroComputer is a premier institute dedicated to providing high-quality computer education. 
            Our mission is to empower students with the skills needed to succeed in the digital age. 
            With experienced instructors and a practical approach to learning, we ensure that every student 
            gains hands-on experience and industry-relevant knowledge.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-24 text-center">
          <h3 className="text-3xl font-display font-bold mb-12 relative inline-block">
            Meet Our Leadership
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto">
            {/* Owner */}
            <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Star className="w-6 h-6 text-black fill-black" />
                </div>
              </div>
              <h4 className="text-2xl font-display font-bold text-white mt-4 mb-2 group-hover:text-primary transition-colors">
                Rakesh Sharma
              </h4>
              <p className="text-primary font-medium tracking-wide text-sm uppercase mb-4">Owner & Founder</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Visionary leader committed to excellence in education and shaping the future of IT professionals.
              </p>
            </div>

            {/* Teacher */}
            <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-display font-bold text-white mt-4 mb-2 group-hover:text-purple-400 transition-colors">
                Bipin Sir
              </h4>
              <p className="text-purple-400 font-medium tracking-wide text-sm uppercase mb-4">Senior Instructor</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expert educator with a passion for teaching complex concepts with simplicity and practical examples.
              </p>
            </div>
          </div>
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
