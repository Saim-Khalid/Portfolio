import React from 'react';
import { Github, ExternalLink, ArrowUpRight, FileDown } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';

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
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading index="04" title="Featured Projects" kicker="projects" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="reveal tech-card group flex flex-col overflow-hidden"
              style={{ '--d': `${(index % 2) * 100}ms` } as React.CSSProperties}
            >
              <div className="relative h-48 overflow-hidden border-b bg-muted">
                <img
                  src={`/${project.image}`}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 saturate-[0.6] transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
                />
                <div className="scanlines" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-md border bg-background/70 px-2 py-1 font-pixel text-[10px] text-primary backdrop-blur">
                  PRJ_{String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{project.name}</h3>
                  <div className="flex gap-1">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="grid h-8 w-8 place-items-center rounded-md border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Github size={15} />
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="grid h-8 w-8 place-items-center rounded-md border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground text-justify">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="https://github.com/Saim-Khalid" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
            <Github size={16} /> More on GitHub <ArrowUpRight size={14} />
          </a>
          <a href="/portfolio.pdf" download="portfolio.pdf" className="btn-ghost w-full sm:w-auto">
            <FileDown size={16} /> Download Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
