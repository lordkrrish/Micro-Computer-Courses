import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Lock, Mail, Phone, User, Calendar, Trash2 } from "lucide-react";

export default function OwnerPage() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    if (isAuthorized) {
      const data = JSON.parse(localStorage.getItem("inquiries") || "[]");
      setInquiries(data);
    }
  }, [isAuthorized]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "9955864823") {
      setIsAuthorized(true);
    } else {
      alert("Invalid Password");
    }
  };

  const deleteInquiry = (id: number) => {
    const updated = inquiries.filter(item => item.id !== id);
    setInquiries(updated);
    localStorage.setItem("inquiries", JSON.stringify(updated));
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8 rounded-3xl w-full max-w-md text-center"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 border border-primary/20">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-display font-bold mb-6 text-gradient">Owner Access Only</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all text-center tracking-widest"
              placeholder="Enter Access Key"
            />
            <button className="w-full py-3 rounded-lg bg-primary text-black font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
              Login to Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-16">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-display font-bold text-gradient">Admin Dashboard</h1>
            <p className="text-gray-400 mt-1">Manage and view all student inquiries.</p>
          </div>
          <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-sm font-semibold">
            {inquiries.length} Inquiries
          </div>
        </header>

        {inquiries.length === 0 ? (
          <div className="text-center py-24 glass-panel rounded-3xl border-dashed border-white/5">
            <p className="text-gray-500 text-lg">No inquiries found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inquiries.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 rounded-2xl relative group"
              >
                <button 
                  onClick={() => deleteInquiry(item.id)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <span className="font-bold">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>{item.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>{item.phone || "Not provided"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 pt-4 border-t border-white/5">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
