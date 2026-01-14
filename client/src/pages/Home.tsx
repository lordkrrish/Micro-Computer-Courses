import { motion } from "framer-motion";
import { 
  Monitor, 
  Code, 
  Cpu, 
  Database, 
  Phone, 
  User, 
  Terminal,
  Server
} from "lucide-react";
import { useCourses } from "@/hooks/use-courses";
import { TechCard } from "@/components/TechCard";

export default function Home() {
  const { data: courses } = useCourses();

  // Map courses to icons (simple heuristic)
  const getIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('html') || lower.includes('web')) return Code;
    if (lower.includes('hardware')) return Cpu;
    if (lower.includes('dca')) return Monitor;
    if (lower.includes('tally')) return Database;
    return Terminal;
  };

  return (
    <div className="min-h-screen bg-black text-foreground selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* Background Matrix/Tech Effect */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        {/* Using the requested GIF as a backdrop */}
        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif')] bg-cover bg-center mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary animate-pulse" />
            <span className="font-tech text-xl font-bold tracking-widest text-white">
              MICRO<span className="text-primary">COMPUTER</span>
            </span>
          </div>
          <a 
            href="#contact" 
            className="px-4 py-2 text-sm font-medium border border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors rounded"
          >
            CONTACT_US
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-mono text-primary border border-primary/30 rounded bg-primary/5 backdrop-blur-sm">
              SYSTEM.INIT(EDUCATION_MODE)
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-tech text-white mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(0,255,128,0.3)]">
              FUTURE_<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">READY</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Unlock your potential with cutting-edge computer education. 
              Master the digital world with MicroComputer Institute.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#courses"
                className="px-8 py-4 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,128,0.4)]"
              >
                BROWSE COURSES
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-transparent border border-white/20 text-white rounded hover:bg-white/5 transition-all hover:border-white/40"
              >
                ENROLL NOW
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Glitch Bar */}
      <div className="border-y border-white/5 bg-white/5 backdrop-blur-sm py-4 relative z-10 overflow-hidden">
        <div className="flex justify-center gap-8 md:gap-16 text-muted-foreground font-mono text-sm md:text-base animate-pulse">
          <span>&lt;CODING /&gt;</span>
          <span>&lt;DESIGN /&gt;</span>
          <span>&lt;HARDWARE /&gt;</span>
          <span>&lt;NETWORKING /&gt;</span>
        </div>
      </div>

      {/* Courses Grid */}
      <section id="courses" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-primary/30 flex-1"></div>
            <h2 className="text-3xl md:text-4xl font-bold font-tech text-white text-center">
              AVAILABLE_MODULES
            </h2>
            <div className="h-px bg-primary/30 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses?.map((course, index) => (
              <TechCard 
                key={course.id || index}
                title={course.name}
                description={course.description}
                icon={getIcon(course.name)}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info/Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-secondary/20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-3xl font-tech font-bold text-white mb-4">ESTABLISH CONNECTION</h2>
              <p className="text-muted-foreground">Start your journey today. Reach out to the administration.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center justify-center p-8 bg-black/40 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <User className="w-8 h-8" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Owner / Director</p>
                <h3 className="text-xl font-bold text-white">Rakesh Sharma</h3>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center justify-center p-8 bg-black/40 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  <Phone className="w-8 h-8" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Direct Line</p>
                <h3 className="text-xl font-bold text-white">+91 9955864923</h3>
              </motion.div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Admissions Open: Batch 2024-25</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4" />
                <span>Offline Campus Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative z-10 bg-black text-center">
        <p className="text-white/40 font-mono text-sm">
          &copy; {new Date().getFullYear()} MicroComputer Institute. All Systems Operational.
        </p>
        <div className="mt-4 inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10">
          <p className="text-xs text-primary/80 font-mono">
            Developed_by: <span className="font-bold text-primary">Krishna (Student)</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
