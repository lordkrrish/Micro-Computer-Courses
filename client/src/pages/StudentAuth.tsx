import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

export default function StudentAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login system is currently in demo mode. Please contact the administrator for account access.");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16 flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Accents (Synced with Courses) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 -right-24 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-pulse" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] bg-black/40 backdrop-blur-xl">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 border border-primary/20">
                <LogIn className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-display font-bold text-gradient">Welcome Back</h1>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest font-medium">Student Login</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Gmail Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary text-black font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all transform active:scale-[0.98]"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <Link href="/owner">
              <a className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all uppercase tracking-widest">
                <ShieldAlert className="w-3.5 h-3.5" />
                Admin Dashboard Access
              </a>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}