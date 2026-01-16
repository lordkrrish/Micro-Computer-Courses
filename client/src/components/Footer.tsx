import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";

export function Footer() {
  const [location] = useLocation();

  return (
    <footer className="bg-black/95 border-t border-white/10 py-6 backdrop-blur-xl relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-white tracking-wide">MicroComputerEducation</h4>
          </div>

          <div className="flex-1 flex justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-1.5 bg-primary/5 rounded-full border border-primary/20 backdrop-blur-sm"
            >
              <span className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">
                Design by <span className="text-primary">Krishna (Student)</span>
              </span>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end gap-4">
            <Link href="/courses">
              <a className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-xs font-bold transition-all hover:border-primary/50">
                Courses
              </a>
            </Link>
            <Link href="/about">
              <a className="px-4 py-1.5 bg-primary text-black rounded-full text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
