import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { CourseCard } from "@/components/CourseCard";
import { useCourses } from "@/hooks/use-courses";
import { Loader2, ServerCrash } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "All Courses", href: "#courses" },
    { name: "About Us", href: "#about" },
    { name: "Contact Info", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-display font-bold text-white">MicroComputer</span>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#courses"
            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full text-sm font-medium transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  const { data: courses, isLoading, error } = useCourses();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      <Hero />

      <section id="courses" className="py-24 bg-black/40 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Premium Courses</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-lg">
              Designed to take you from beginner to expert. Choose your path and start learning today.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ServerCrash className="w-16 h-16 text-destructive mb-4" />
              <h3 className="text-xl font-bold text-white">Unable to load courses</h3>
              <p className="text-gray-500 mt-2">Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses?.map((course, idx) => (
                <CourseCard key={course.id} course={course} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

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

      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
}
