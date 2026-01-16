import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProgressTracker } from "@/components/ProgressTracker";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, User } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Student Dashboard</h1>
              <p className="text-gray-400 mt-1">Welcome back! Track your learning progress here.</p>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Stats */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Course Enrolled</p>
              <p className="text-xl font-bold">ADCA (Advanced)</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Completion</p>
              <p className="text-xl font-bold">45% Complete</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Next Milestone</p>
              <p className="text-xl font-bold">Module 4 Quiz</p>
            </div>
          </motion.div>
        </div>

        <section className="glass-panel p-8 md:p-12 rounded-3xl mb-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-2">Learning Journey</h2>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          </div>
          <ProgressTracker />
        </section>
      </main>

      <Footer />
    </div>
  );
}
