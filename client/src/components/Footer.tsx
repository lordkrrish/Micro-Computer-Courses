import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-8 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-white">MicroComputer</h4>
            <p className="text-sm text-gray-400 mt-1">Empowering the next generation.</p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-2"
          >
            <span className="text-gray-300 text-sm">Made By</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Krishna (Student)
            </span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          </motion.div>
          
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} MicroComputer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
