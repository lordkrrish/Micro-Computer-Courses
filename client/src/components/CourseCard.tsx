import { motion } from "framer-motion";
import { Code2, Monitor, Terminal, Cpu } from "lucide-react";
import { Link } from "wouter";

interface CourseCardProps {
  course: {
    name: string;
    description: string;
  };
  index: number;
}

// Map course names to icons
const getIcon = (name: string) => {
  const n = name.toUpperCase();
  if (n.includes("HTML")) return <Code2 className="w-10 h-10 text-orange-400" />;
  if (n.includes("HARDWARE")) return <Cpu className="w-10 h-10 text-cyan-400" />;
  if (n.includes("ADCA")) return <Terminal className="w-10 h-10 text-purple-400" />;
  return <Monitor className="w-10 h-10 text-emerald-400" />;
};

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <Link href="/contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group relative overflow-hidden cursor-pointer"
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
