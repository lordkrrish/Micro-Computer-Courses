import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function Footer() {
  const [location] = useLocation();

  return (
    <footer className="bg-black/80 border-t border-white/10 py-2 backdrop-blur-lg relative">
      <div className="container mx-auto px-4 relative flex justify-center items-center">
        <div className="text-center">
          <h4 className="text-base font-display font-bold text-white tracking-wide">MicroComputer</h4>
          <div className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
        
        {location === "/" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute right-4 md:right-0 bottom-1/2 translate-y-1/2"
          >
            <div className="px-2 py-0.5 bg-white/5 rounded-md border border-white/10 backdrop-blur-sm">
              <span className="text-[9px] text-gray-400 uppercase tracking-wider font-medium">
                Made By <span className="text-primary font-bold">Krishna (Student)</span>
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </footer>
  );
}
