import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CourseCard } from "@/components/CourseCard";
import { BookOpen, Code, Database, Cpu, Layout, Globe, Braces } from "lucide-react";

const FEATURED_COURSES = [
  { id: 1, name: "ADCA", description: "Advance Diploma in Computer Application", icon: <Database /> },
  { id: 2, name: "DCA", description: "Diploma in Computer Application", icon: <BookOpen /> },
  { id: 5, name: "PYTHON", description: "Core and Advanced Python Programming", icon: <Braces /> },
  { id: 7, name: "JAVA", description: "Java Enterprise Edition & Development", icon: <Code /> },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      <Hero />
      
      <section className="py-24 relative bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Programs</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_COURSES.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
