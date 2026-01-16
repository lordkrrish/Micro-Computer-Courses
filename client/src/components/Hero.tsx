import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Abstract Tech Loop GIF */}
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpndmZ6Zmd6Zmd6Zmd6Zmd6Zmd6Zmd6Zmd6Zmd6Zmd6Zmd6Zmd6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKSjPXYqCgT2zAA/giphy.gif" 
          alt="Tech Background"
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Excellence in Technology
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-display mb-6 tracking-tight text-white glow-text">
            Micro<span className="text-gradient">Computer</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Master the future of technology with our premium courses in hardware, software, and development.
          </p>

          <Link href="/courses">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all text-lg cursor-pointer gap-2"
            >
              Get Started <ChevronDown className="w-5 h-5 -rotate-90" />
            </motion.a>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.div>
    </section>
  );
}
