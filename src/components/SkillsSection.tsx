
import React from 'react';
import { Code, Terminal, Database, Server, Layout } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

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
  skills: { name: string; level?: number; description?: string }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code size={20} />,
    skills: [
      { name: "Python", level: 90, description: "Advanced expertise with 5+ years experience, focusing on AI/ML applications" },
      { name: "JavaScript", level: 80, description: "Strong proficiency for web applications and interactive data visualization" },
      { name: "TypeScript", level: 75, description: "Regularly used for type-safe frontend development" },
      { name: "SQL", level: 85, description: "Expert database querying and optimization" },
      { name: "C++", level: 65, description: "Used for performance-critical application components" },
      { name: "Julia", level: 50, description: "Exploring for scientific computing and numerical analysis" }
    ]
  },
  {
    name: "AI & ML",
    icon: <Brain size={20} />,
    skills: [
      { name: "PyTorch", level: 95, description: "Primary deep learning framework, extensive experience with custom architectures" },
      { name: "TensorFlow", level: 80, description: "Production deployment and optimization experience" },
      { name: "Hugging Face", level: 90, description: "Expert in fine-tuning and deploying transformer models" },
      { name: "Scikit-learn", level: 85, description: "Go-to for classical ML algorithms and preprocessing" },
      { name: "LangChain", level: 85, description: "Building complex LLM applications and knowledge graphs" },
      { name: "NLTK", level: 70, description: "Natural language processing toolkit for text analysis" },
      { name: "spaCy", level: 75, description: "Industrial-strength NLP for production systems" },
      { name: "OpenCV", level: 80, description: "Computer vision library for image and video analysis" },
      { name: "YOLO", level: 75, description: "Object detection framework for real-time applications" },
      { name: "Stable Diffusion", level: 70, description: "Generative image creation and customization" }
    ]
  },
  {
    name: "Data & Cloud",
    icon: <Database size={20} />,
    skills: [
      { name: "Pandas", level: 95, description: "Data manipulation and analysis powerhouse" },
      { name: "NumPy", level: 90, description: "Numerical computing foundation for data science" },
      { name: "AWS", level: 80, description: "Cloud infrastructure deployment and management" },
      { name: "GCP", level: 75, description: "Cloud AI and ML services" },
      { name: "Azure ML", level: 70, description: "Enterprise ML platform experience" },
      { name: "Docker", level: 85, description: "Containerization for reproducible environments" },
      { name: "Kubernetes", level: 70, description: "Container orchestration for scalable deployments" },
      { name: "DVC", level: 75, description: "Version control for machine learning projects" }
    ]
  },
  {
    name: "Web & API",
    icon: <Layout size={20} />,
    skills: [
      { name: "FastAPI", level: 90, description: "High-performance API framework for ML services" },
      { name: "Flask", level: 85, description: "Lightweight web framework for prototypes and small apps" },
      { name: "React", level: 80, description: "Frontend library for interactive UIs" },
      { name: "Node.js", level: 75, description: "JavaScript runtime for backend services" },
      { name: "GraphQL", level: 70, description: "Query language for flexible API design" },
      { name: "REST", level: 90, description: "Standard architecture for web services" },
      { name: "Streamlit", level: 95, description: "Rapid prototyping for data science applications" }
    ]
  },
  {
    name: "DevOps & Tools",
    icon: <Terminal size={20} />,
    skills: [
      { name: "Git", level: 95, description: "Version control and collaboration" },
      { name: "CI/CD", level: 85, description: "Automated testing and deployment pipelines" },
      { name: "MLflow", level: 90, description: "ML lifecycle management platform" },
      { name: "Weights & Biases", level: 85, description: "Experiment tracking and visualization" },
      { name: "Prometheus", level: 75, description: "Monitoring and alerting toolkit" },
      { name: "Airflow", level: 80, description: "Workflow automation and scheduling" },
      { name: "Ray", level: 75, description: "Distributed computing framework for ML" }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12 animate-fade-in">
          <Terminal size={24} className="text-primary" />
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-primary/10 p-2 rounded-md text-primary animate-pulse-glow">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <HoverCard key={i}>
                      <HoverCardTrigger asChild>
                        <span 
                          className="skill-badge group relative cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          {skill.name}
                          {skill.level && (
                            <span className="absolute -bottom-1 left-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ width: `${skill.level}%` }}></span>
                          )}
                        </span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 text-sm">
                        <div className="space-y-2">
                          <h4 className="font-semibold">{skill.name}</h4>
                          {skill.level && (
                            <div className="space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground">Proficiency</span>
                                <span className="text-xs font-medium">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-1.5" />
                            </div>
                          )}
                          {skill.description && (
                            <p className="text-muted-foreground">{skill.description}</p>
                          )}
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels Legend */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 bg-card rounded-lg border p-6 hover:shadow-md transition-all duration-300 animate-fade-in">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Skills Proficiency</h4>
            <p className="text-sm text-muted-foreground mb-4">From foundational knowledge to expert-level mastery</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform">
              <div className="w-12 h-2 bg-gradient-to-r from-primary/30 to-primary/30 rounded-full"></div>
              <span className="text-sm">Beginner</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform">
              <div className="w-12 h-2 bg-gradient-to-r from-primary/30 to-primary/60 rounded-full"></div>
              <span className="text-sm">Intermediate</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform">
              <div className="w-12 h-2 bg-gradient-to-r from-primary/30 to-primary/90 rounded-full"></div>
              <span className="text-sm">Advanced</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform">
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
