import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Mail, Phone, User, Calendar, Trash2, UserPlus, List } from "lucide-react";

export default function OwnerPage() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState<"inquiries" | "register">("inquiries");
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    if (isAuthorized) {
      const inquiryData = JSON.parse(localStorage.getItem("inquiries") || "[]");
      const studentData = JSON.parse(localStorage.getItem("students") || "[]");
      setInquiries(inquiryData);
      setStudents(studentData);
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

  const handleRegisterStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newStudent = {
      id: Date.now(),
      name: formData.get("studentName"),
      email: formData.get("studentEmail"),
      course: formData.get("studentCourse"),
      regDate: new Date().toLocaleDateString()
    };
    const updated = [...students, newStudent];
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
    alert("Student registered successfully!");
    e.currentTarget.reset();
  };

  const deleteInquiry = (id: number) => {
    const updated = inquiries.filter(item => item.id !== id);
    setInquiries(updated);
    localStorage.setItem("inquiries", JSON.stringify(updated));
  };

  const deleteStudent = (id: number) => {
    const updated = students.filter(item => item.id !== id);
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
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
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-display font-bold text-gradient">Admin Dashboard</h1>
            <p className="text-gray-400 mt-1">Manage inquiries and register students.</p>
          </div>
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
            <button 
              onClick={() => setActiveTab("inquiries")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === "inquiries" ? "bg-primary text-black" : "text-gray-400 hover:text-white"}`}
            >
              <List className="w-4 h-4" />
              <span>Inquiries</span>
            </button>
            <button 
              onClick={() => setActiveTab("register")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === "register" ? "bg-primary text-black" : "text-gray-400 hover:text-white"}`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === "inquiries" ? (
            <motion.div
              key="inquiries"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-1">
                <div className="glass-panel p-6 rounded-3xl border border-white/10">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-primary" />
                    Add Student
                  </h3>
                  <form onSubmit={handleRegisterStudent} className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Full Name</label>
                      <input name="studentName" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Gmail Address</label>
                      <input name="studentEmail" type="email" required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Course</label>
                      <select name="studentCourse" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary">
                        <option value="ADCA" className="bg-[#0f172a]">ADCA</option>
                        <option value="DCA" className="bg-[#0f172a]">DCA</option>
                        <option value="Python" className="bg-[#0f172a]">Python</option>
                        <option value="Java" className="bg-[#0f172a]">Java</option>
                      </select>
                    </div>
                    <button className="w-full py-3 rounded-lg bg-primary text-black font-bold">Register Student</button>
                  </form>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="glass-panel p-6 rounded-3xl border border-white/10 min-h-[400px]">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <List className="w-5 h-5 text-primary" />
                    Registered Students
                  </h3>
                  <div className="space-y-3">
                    {students.length === 0 ? (
                      <p className="text-gray-500 text-center py-12">No students registered yet.</p>
                    ) : (
                      students.map(student => (
                        <div key={student.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                          <div>
                            <p className="font-bold">{student.name}</p>
                            <p className="text-sm text-gray-400">{student.email} • <span className="text-primary/80">{student.course}</span></p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-gray-600">{student.regDate}</span>
                            <button onClick={() => deleteStudent(student.id)} className="text-gray-500 hover:text-red-400 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
