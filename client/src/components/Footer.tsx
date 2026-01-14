import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLocation } from "wouter";

export function Footer() {
  const [location] = useLocation();

  return (
    <footer className="bg-black/80 border-t border-white/10 py-4 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="text-left">
            <h4 className="text-lg font-display font-bold text-white">MicroComputer</h4>
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
          
          {location === "/" && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2"
            >
              <span className="text-gray-300 text-xs">Made By</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 text-xs">
                Krishna (Student)
              </span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            </motion.div>
          )}
        </div>
      </div>
    </footer>
  );
}
