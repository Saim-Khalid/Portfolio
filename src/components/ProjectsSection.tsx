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
    name: "Beam Classification Model",
    description: "Dockerized FastAPI app for classifying beam types using an ONNX model. Supports image upload and returns type, bounding boxes, and confidence scores.",
    image: "beam.png",
    techStack: ["ONNX", "FastAPI", "Docker", "Python"],
    githubLink: "https://github.com/ioptime-official/ai_counting_infiniedge",
  },
  {
    name: "AI Id Scanner",
    description: "Extracts and analyzes text from African IDs, passports, and licenses using PaddleOCR, NER, and signature detection.",
    image: "ner.png",
    techStack: ["PaddleOCR", "YOLOv5", "Python", "NER", "Text Classification"],
    githubLink: "https://github.com/Saim-Khalid/ai-id-scanner"
  },
  {
    name: "AI Playing Cards",
    description: "Detects and classifies playing cards in images using a custom YOLOv5 model. Includes scripts for augmentation, BBOX visualization, and dataset preparation.",
    image: "playimg-cards.png",
    techStack: ["YOLOv5", "Python", "Albumentations"],
    githubLink: "https://github.com/ioptime-official/ai-playing-cards"
  },
  {
    name: "AI Ecommerce Query Text Audio",
    description: "Conversational e-commerce bot integrating LLMs, Lex, Polly, Lambda, and SageMaker for text/voice Q&A with real-time data retrieval.",
    image: "ecommerce-bot.png",
    techStack: ["AWS Lex", "Polly", "Lambda", "SageMaker", "Python", "LLM", "Pinecone"],
    githubLink: "https://github.com/ioptime-official/ai-ecommerce-query-text-audio",
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
                <img
                  src={`/${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
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

        {/* Button Row: GitHub left, Download PDF right */}
        <div className="mt-12 flex justify-between items-center w-full">
          <div className="">
            <a href="https://github.com/Saim-Khalid" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="font-mono flex gap-2 items-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Github size={18} />
                View More Projects on GitHub
              </Button>
            </a>
          </div>
          <div className="">
            <a href="/portfolio.pdf" download="portfolio.pdf">
              <Button
                variant="outline"
                className="font-mono flex gap-2 items-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                Download Portfolio
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
