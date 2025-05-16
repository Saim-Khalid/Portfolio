
import React from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Flatten all skills from the original categories into a single array
const allSkills = [
  // Languages
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "SQL", level: 85 },
  { name: "C++", level: 65 },
  { name: "Julia", level: 50 },
  
  // AI & ML
  { name: "PyTorch", level: 95 },
  { name: "TensorFlow", level: 80 },
  { name: "Hugging Face", level: 90 },
  { name: "Scikit-learn", level: 85 },
  { name: "LangChain", level: 85 },
  { name: "NLTK", level: 70 },
  { name: "spaCy", level: 75 },
  { name: "OpenCV", level: 80 },
  { name: "YOLO", level: 75 },
  { name: "Stable Diffusion", level: 70 },
  
  // Data & Cloud
  { name: "Pandas", level: 95 },
  { name: "NumPy", level: 90 },
  { name: "AWS", level: 80 },
  { name: "GCP", level: 75 },
  { name: "Azure ML", level: 70 },
  { name: "Docker", level: 85 },
  { name: "Kubernetes", level: 70 },
  { name: "DVC", level: 75 },
  
  // Web & API
  { name: "FastAPI", level: 90 },
  { name: "Flask", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "GraphQL", level: 70 },
  { name: "REST", level: 90 },
  { name: "Streamlit", level: 95 },
  
  // DevOps & Tools
  { name: "Git", level: 95 },
  { name: "CI/CD", level: 85 },
  { name: "MLflow", level: 90 },
  { name: "Weights & Biases", level: 85 },
  { name: "Prometheus", level: 75 },
  { name: "Airflow", level: 80 },
  { name: "Ray", level: 75 }
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
