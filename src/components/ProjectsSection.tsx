
import React from 'react';
import { Monitor, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  name: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    name: "IntelliChat",
    description: "An advanced conversational AI system with multi-modal capabilities, using a custom-trained LLM with RAG architecture for enhanced knowledge retrieval.",
    image: "intellichat-project",
    techStack: ["PyTorch", "Hugging Face", "LangChain", "FastAPI", "React", "Docker"],
    githubLink: "https://github.com/username/intellichat",
    demoLink: "https://intellichat-demo.example.com"
  },
  {
    name: "VisualDetect",
    description: "Real-time object detection and tracking system optimized for edge devices, with customizable detection models for specific industry applications.",
    image: "visualdetect-project",
    techStack: ["TensorFlow", "YOLO", "OpenCV", "Streamlit", "Edge ML", "Raspberry Pi"],
    githubLink: "https://github.com/username/visualdetect"
  },
  {
    name: "MLOps Pipeline",
    description: "End-to-end MLOps pipeline for automating the training, evaluation, deployment, and monitoring of machine learning models in production.",
    image: "mlops-pipeline-project",
    techStack: ["Kubernetes", "Docker", "MLflow", "GitHub Actions", "Prometheus", "Python"],
    githubLink: "https://github.com/username/mlops-pipeline",
    demoLink: "https://mlops-docs.example.com"
  },
  {
    name: "SentimentX",
    description: "Fine-tuned NLP model for multi-language sentiment analysis with domain-specific adaptations for social media and customer feedback.",
    image: "sentimentx-project",
    techStack: ["Hugging Face", "BERT", "Scikit-learn", "Flask", "React", "AWS"],
    githubLink: "https://github.com/username/sentimentx",
    demoLink: "https://sentimentx.example.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <Monitor size={24} className="text-primary" />
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg"
            >
              <div className="project-card-header">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="flex gap-2">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="h-40 bg-muted/50 group-hover:bg-muted/70 transition-colors flex items-center justify-center overflow-hidden">
                <span className="font-mono text-muted-foreground text-sm group-hover:scale-105 transition-transform">
                  {project.image}.png
                </span>
              </div>

              <div className="project-card-body">
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="project-card-footer">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="skill-badge transition-colors group-hover:bg-accent/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="font-mono flex gap-2 items-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <Github size={18} />
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
