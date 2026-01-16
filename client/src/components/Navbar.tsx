import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Monitor } from "lucide-react";

export const Navbar = () => {
  const [location] = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "All Courses", href: "/courses" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform">
            <Monitor className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-primary transition-colors">
            Micro<span className="text-gradient">Computer</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
            >
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location === link.href ? "text-white" : "text-gray-300"
              )}>
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/auth">
            <a className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-1">
              Login
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
