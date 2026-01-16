import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Lock, User, LogIn } from "lucide-react";
import { useLocation } from "wouter";

export default function StudentAuth() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real Gmail login
    if (email.endsWith("@gmail.com") && password.length >= 8) {
      alert(`Welcome student! Logged in as ${email}`);
      setLocation("/dashboard");
    } else {
      alert("Please enter a valid Gmail address and password (min 8 chars).");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16 flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 rounded-3xl w-full max-w-md"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 border border-primary/20">
            <LogIn className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-display font-bold text-center mb-2">Student Login</h1>
          <p className="text-gray-400 text-center mb-8">Access your learning portal</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Gmail Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-3 text-white focus:outline-none focus:border-primary transition-all"
                  placeholder="yourname@gmail.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-3 text-white focus:outline-none focus:border-primary transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-primary text-black font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
              Login to Portal
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm text-gray-500">
            Forgot password? Contact your instructor.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
