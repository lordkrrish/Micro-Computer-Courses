import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useCourses() {
  return useQuery({
    queryKey: [api.courses.list.path],
    queryFn: async () => {
      const res = await fetch(api.courses.list.path);
      if (!res.ok) throw new Error("Failed to fetch courses");
      return api.courses.list.responses[200].parse(await res.json());
    },
    // Fallback data if DB is empty or connection fails, 
    // ensuring the requested static content is always visible
    initialData: [
      { id: 1, name: "ADCA", description: "Advanced Diploma in Computer Applications. Complete mastery of office automation and programming basics." },
      { id: 2, name: "DCA", description: "Diploma in Computer Applications. Fundamental computer skills for the modern workplace." },
      { id: 3, name: "HTML & Web Design", description: "Build the web. Learn HTML5, CSS3, and the basics of responsive design." },
      { id: 4, name: "Hardware Networking", description: "Understand the physical components. PC assembly, troubleshooting, and network setup." },
      { id: 5, name: "Tally Prime", description: "Professional accounting software training for business management." },
      { id: 6, name: "C / C++ Programming", description: "Foundation of coding. Learn logic building and system programming." },
    ]
  });
}
