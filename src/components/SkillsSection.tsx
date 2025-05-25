
import React from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Reduced set of most important skills
const allSkills = [
  // Languages
  { name: "Python", level: 90 },
  { name: "MLOps", level: 80 },
  { name: "Mlflow", level: 75 },
  
  // AI & ML
  { name: "PyTorch", level: 95 },
  { name: "TensorFlow", level: 80 },
  { name: "Hugging Face", level: 90 },
  { name: "LangChain", level: 85 },
  { name: "OpenAI", level: 90 },
  { name: "LLMs", level: 90 },
  
  // Data & Cloud
  { name: "Pandas", level: 95 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 85 },
  { name: "Kubernetes", level: 75 },
  { name: "GCP", level: 70 },
  { name: "CI/CD", level: 80 },
  { name: "SQL", level: 80 },
  { name: "Dialogflow", level: 75 },
  { name: "RASA", level: 90 },
  
  // Web & API
  { name: "FastAPI", level: 90 },
  { name: "Django", level: 80 },
  { name: "Streamlit", level: 95 },
  { name: "Gradio", level: 85 },
  
  // Other Tools
  { name: "OpenCV", level: 80 },
  { name: "NumPy", level: 95 },
  { name: "Matplotlib", level: 85 },
  { name: "Git", level: 90 },
  { name: "Linux", level: 80 },
  { name: "CUDA", level: 75 }


];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 z-0">
        {/* Neural network nodes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Neural network connections */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={`connection-${i}`}
            className="absolute bg-primary/5"
            style={{
              height: '1px',
              width: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}

        {/* Larger nodes at intersections */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`large-node-${i}`}
            className="absolute rounded-full bg-primary/15"
            style={{
              width: `${Math.random() * 20 + 8}px`,
              height: `${Math.random() * 20 + 8}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-heading mb-12 animate-fade-in">
          <Terminal size={24} className="text-primary" />
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {allSkills.map((skill, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="m-1 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {skill.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
