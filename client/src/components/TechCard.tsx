import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function TechCard({ title, description, icon: Icon, delay = 0 }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 255, 128, 0.2)" }}
      className="bg-secondary/50 backdrop-blur-sm border border-primary/20 p-6 rounded-lg relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-24 h-24 text-primary" />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4 text-primary border border-primary/30">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white font-tech tracking-wider">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50" />
    </motion.div>
  );
}
