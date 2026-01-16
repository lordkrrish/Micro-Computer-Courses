import { motion } from "framer-motion";
import { Code2, Monitor, Cpu, BookOpen, Layers, Coffee } from "lucide-react";
import { Link } from "wouter";
import { SiPython, SiHtml5, SiCss3 } from "react-icons/si";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: {
    name: string;
    description: string;
  };
  index: number;
}

// Map course names to icons/logos with vibrant colors
const getIcon = (name: string) => {
  const n = name.toUpperCase();
  if (n.includes("HTML")) return <SiHtml5 className="w-12 h-12 text-[#FF4B2B] drop-shadow-[0_0_8px_rgba(255,75,43,0.5)]" />;
  if (n.includes("CSS")) return <SiCss3 className="w-12 h-12 text-[#2B86C5] drop-shadow-[0_0_8px_rgba(43,134,197,0.5)]" />;
  if (n.includes("PYTHON")) return <SiPython className="w-12 h-12 text-[#FFD43B] drop-shadow-[0_0_8px_rgba(255,212,59,0.5)]" />;
  if (n.includes("JAVA")) return <Coffee className="w-12 h-12 text-[#F8981D] drop-shadow-[0_0_8px_rgba(248,152,29,0.5)]" />;
  if (n.includes("HARDWARE")) return <Cpu className="w-12 h-12 text-[#00F260] drop-shadow-[0_0_8px_rgba(0,242,96,0.5)]" />;
  if (n.includes("ADCA")) return <Layers className="w-12 h-12 text-[#8E2DE2] drop-shadow-[0_0_8px_rgba(142,45,226,0.5)]" />;
  if (n.includes("DCA")) return <BookOpen className="w-12 h-12 text-[#00C9FF] drop-shadow-[0_0_8px_rgba(0,201,255,0.5)]" />;
  return <Monitor className="w-12 h-12 text-primary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />;
};

export function CourseCard({ course, index }: CourseCardProps) {
  // Define border color based on course name for colorful glows
  const getGlowColor = (name: string) => {
    const n = name.toUpperCase();
    if (n.includes("HTML")) return "hover:border-[#FF4B2B] hover:shadow-[0_0_30px_-5px_rgba(255,75,43,0.4)]";
    if (n.includes("CSS")) return "hover:border-[#2B86C5] hover:shadow-[0_0_30px_-5px_rgba(43,134,197,0.4)]";
    if (n.includes("PYTHON")) return "hover:border-[#FFD43B] hover:shadow-[0_0_30px_-5px_rgba(255,212,59,0.4)]";
    if (n.includes("JAVA")) return "hover:border-[#F8981D] hover:shadow-[0_0_30px_-5px_rgba(248,152,29,0.4)]";
    if (n.includes("HARDWARE")) return "hover:border-[#00F260] hover:shadow-[0_0_30px_-5px_rgba(0,242,96,0.4)]";
    if (n.includes("ADCA")) return "hover:border-[#8E2DE2] hover:shadow-[0_0_30px_-5px_rgba(142,45,226,0.4)]";
    if (n.includes("DCA")) return "hover:border-[#00C9FF] hover:shadow-[0_0_30px_-5px_rgba(0,201,255,0.4)]";
    return "hover:border-primary hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]";
  };

  return (
    <Link href="/contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className={cn(
          "glass-card rounded-2xl p-6 flex flex-col items-center text-center group relative overflow-hidden cursor-pointer",
          getGlowColor(course.name)
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="mb-4 p-4 rounded-full bg-white/5 ring-1 ring-white/10 shadow-lg group-hover:ring-primary/50 transition-all duration-300">
          {getIcon(course.name)}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 font-display tracking-wide group-hover:text-primary transition-colors">
          {course.name}
        </h3>
        
        <p className="text-sm text-gray-300 leading-relaxed relative z-10">
          {course.description}
        </p>

        <div className="mt-6 pt-4 border-t border-white/5 w-full">
          <span className="text-xs font-semibold text-primary/80 uppercase tracking-widest">
            Click to Enroll
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
