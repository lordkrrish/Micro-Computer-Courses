import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [location] = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "All Courses", href: "/courses" },
    { name: "Portal", href: "/auth" },
    { name: "About Us", href: "/about" },
    { name: "Login", href: "/auth" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-display font-bold text-white">MicroComputer</span>
        <div className="hidden md:flex items-center gap-8">
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
          <Link href="/courses">
            <a className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full text-sm font-medium transition-all flex items-center gap-1">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
