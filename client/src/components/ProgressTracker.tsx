import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

const steps: Step[] = [
  { id: 1, title: "Registration", description: "Enrollment and documentation completed", status: 'completed' },
  { id: 2, title: "Fundamentals", description: "Basic computing and OS mastery", status: 'completed' },
  { id: 3, title: "Core Modules", description: "In-depth learning of chosen program", status: 'current' },
  { id: 4, title: "Projects", description: "Real-world application development", status: 'upcoming' },
  { id: 5, title: "Certification", description: "Final assessment and diploma", status: 'upcoming' },
];

export function ProgressTracker() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-white/10 hidden md:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className={ `
                w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300
                ${step.status === 'completed' ? 'bg-primary text-background' : 
                  step.status === 'current' ? 'bg-primary/20 ring-2 ring-primary text-primary' : 
                  'bg-white/5 text-gray-500'}
              ` }>
                {step.status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : 
                 step.status === 'current' ? <Clock className="w-6 h-6 animate-pulse" /> : 
                 <Circle className="w-6 h-6" />}
              </div>
              
              <div className="mt-4">
                <h4 className={ `font-bold text-lg ${step.status === 'upcoming' ? 'text-gray-500' : 'text-white'}` }>
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 mt-1 leading-snug">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
