import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { BookOpen, Code, Database, Cpu, Layout, Globe, Braces } from "lucide-react";

// Using hardcoded data instead of database as requested
const STATIC_COURSES = [
  { id: 1, name: "ADCA", description: "Advance Diploma in Computer Application", icon: <Database /> },
  { id: 2, name: "DCA", description: "Diploma in Computer Application", icon: <BookOpen /> },
  { id: 3, name: "HTML", description: "HyperText Markup Language", icon: <Globe /> },
  { id: 4, name: "HARDWARE", description: "Computer Hardware Networking", icon: <Cpu /> },
  { id: 5, name: "PYTHON", description: "Core and Advanced Python Programming", icon: <Braces /> },
  { id: 6, name: "CSS", description: "Cascading Style Sheets & Modern Design", icon: <Layout /> },
  { id: 7, name: "JAVA", description: "Java Enterprise Edition & Development", icon: <Code /> },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      <section id="courses" className="py-24 relative overflow-hidden">
        {/* Course-specific Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Premium Courses</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-lg">
              Designed to take you from beginner to expert. Choose your path and start learning today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATIC_COURSES.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
