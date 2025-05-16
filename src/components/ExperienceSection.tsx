
import React from 'react';
import { Briefcase, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior AI Engineer",
    company: "TechNova AI",
    period: "2022 - Present",
    description: [
      "Lead a team of 5 engineers building and deploying LLM-powered applications for enterprise clients",
      "Designed and implemented a custom RAG system that improved answer relevance by 35% compared to vanilla approaches",
      "Created an internal LLM evaluation framework that reduced time-to-production by 40%"
    ],
    technologies: ["PyTorch", "Hugging Face", "LangChain", "FastAPI", "AWS", "Docker"]
  },
  {
    title: "ML Engineer",
    company: "DataVision Inc.",
    period: "2019 - 2022",
    description: [
      "Developed computer vision models for retail analytics, achieving 94% accuracy in customer behavior analysis",
      "Built an end-to-end MLOps pipeline that reduced model deployment time from weeks to hours",
      "Collaborated with product teams to integrate AI features that increased user engagement by 28%"
    ],
    technologies: ["TensorFlow", "OpenCV", "Python", "Kubernetes", "GCP", "CI/CD"]
  },
  {
    title: "AI Research Intern",
    company: "NLP Research Lab",
    period: "2018 - 2019",
    description: [
      "Contributed to research papers on transformer architectures for language understanding",
      "Implemented novel attention mechanisms that improved GLUE benchmark scores by 2.3%",
      "Built demo applications showcasing practical applications of NLP research"
    ],
    technologies: ["PyTorch", "BERT", "Transformers", "Jupyter", "NLP", "Python"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-heading">
            <Briefcase size={24} className="text-primary" />
            Work Experience
          </h2>

          <Button variant="outline" size="sm" className="font-mono flex gap-2">
            <Download size={16} /> 
            Download CV
          </Button>
        </div>

        <div className="relative">
          {experiences.length > 1 && <div className="vertical-timeline-bar md:ml-5" />}

          <div className="space-y-12">
            {experiences.map((job, index) => (
              <div key={index} className="relative">
                <div className="hidden md:block timeline-bullet" />
                
                <div className="md:ml-16 bg-card rounded-lg border shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono">
                          {job.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="mb-6 space-y-2">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <span key={i} className="skill-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
