import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";

export function Footer() {
  const [location] = useLocation();

  return (
    <footer className="bg-black/95 border-t border-white/10 py-8 backdrop-blur-xl relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-white tracking-wide">MicroComputer</h4>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Empowering students with modern computer education and technical skills.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="/courses">
              <a className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-sm font-bold transition-all hover:border-primary/50">
                Our Courses
              </a>
            </Link>
            <Link href="/about">
              <a className="px-6 py-2 bg-primary text-black rounded-full text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all">
                Learn More
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-gray-600">
            © {new Date().getFullYear()} MicroComputer Institute. All rights reserved.
          </div>
          
          {location === "/" && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-3 py-1 bg-primary/5 rounded-full border border-primary/20 backdrop-blur-sm"
            >
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                Design by <span className="text-primary">Krishna (Student)</span>
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </footer>
  );
}
