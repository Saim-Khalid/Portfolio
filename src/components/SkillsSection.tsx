
import React from 'react';
import { Code, Terminal, Database, Server, Layout } from 'lucide-react';

// Custom Brain icon since it's not in the allowed Lucide icons list
const Brain = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"></path>
  </svg>
);

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code size={20} />,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "Julia"]
  },
  {
    name: "AI & ML",
    icon: <Brain size={20} />,
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "LangChain", "NLTK", "spaCy", "OpenCV", "YOLO", "Stable Diffusion"]
  },
  {
    name: "Data & Cloud",
    icon: <Database size={20} />,
    skills: ["Pandas", "NumPy", "AWS", "GCP", "Azure ML", "Docker", "Kubernetes", "DVC"]
  },
  {
    name: "Web & API",
    icon: <Layout size={20} />,
    skills: ["FastAPI", "Flask", "React", "Node.js", "GraphQL", "REST", "Streamlit"]
  },
  {
    name: "DevOps & Tools",
    icon: <Terminal size={20} />,
    skills: ["Git", "CI/CD", "MLflow", "Weights & Biases", "Prometheus", "Airflow", "Ray"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <Terminal size={24} className="text-primary" />
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-card rounded-lg border shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-primary/10 p-2 rounded-md text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels Legend */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 bg-card rounded-lg border p-6">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Skills Proficiency</h4>
            <p className="text-sm text-muted-foreground mb-4">From foundational knowledge to expert-level mastery</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-gradient-to-r from-primary/30 to-primary/30 rounded-full"></div>
              <span className="text-sm">Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-gradient-to-r from-primary/30 to-primary/60 rounded-full"></div>
              <span className="text-sm">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-gradient-to-r from-primary/30 to-primary/90 rounded-full"></div>
              <span className="text-sm">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-gradient-to-r from-primary/30 to-primary rounded-full"></div>
              <span className="text-sm">Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
