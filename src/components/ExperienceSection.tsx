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
    title: "AI Engineer",
    company: "Techtronix Corp",
    period: "Jun 2025 - Present",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    technologies: ["MongoDB", "Mistral", "Vector Search", "AI Agent", "Langraph", "Python", "FastAPI", "Docker", "Vector DB"]
  },
  {
    title: "AI Engineer",
    company: "Self-Employed (UK Contractor)",
    period: "Sep 2024 - Present",
    description: [
      "Leading the development of AI solutions for healthcare and IoT sectors.",
      "Developed a handwriting OCR pipeline using Qwen2 VLM, deployed via FastAPI & MLflow, with OpenAI-powered prompt engineering and NER for structured text extraction.",
      "Vision Transformer for Heart Xray Image Classification using transfer learning.",

    ],
    technologies: ["PyTorch", "Hugging Face", "LangChain", "FastAPI", "AWS", "Docker"]
  },
  
  {
    title: "AI Engineer",
    company: "iOPTIME Pvt. Limited.",
    period: "Aug 2023 - Aug 2024",
    description: [
      "Lead a team of 5 engineers building and deploying Computer Vision and LLM-powered applications for enterprise clients",
      "Fine-tuned GPT-3.5 Turbo with RAG and Langchain for product inquiries in e-commerce.",
      "Implemented LLAMA 2/3 with RAG via Langchain for audit report analysis.",
      "Built an OCR system for South African and Zimbabwean IDs and passports."

    ],
    technologies: ["PyTorch", "Hugging Face", "LangChain", "FastAPI", "AWS", "Docker"]
  },
  {
    title: "Junior AI Engineer",
    company: "iOPTIME Pvt. Limited",
    period: "Feb 2023 - Jul 2023",
    description: [
      "Vehicle Trajectory Analysis using DeepSORT and YOLO, deployed using FastAPI on AWS EC2.",
      "Nails Segmentation for nail polish design deployed in Android and iOS.",
      "Fine tuned and Deployed GPT for e-commerce product recommendation.",
      "Causal Inference and Learning for Road Accident Analysis."

    ],
    technologies: ["TensorFlow", "OpenCV", "Python", "Kubernetes", "GCP", "CI/CD"]
  },
  {
    title: "AI Intern",
    company: "iOPTIME Pvt. Limited",
    period: "Nov 2022 - Jan 2023",
    description: [
      "Yolov5 and YOLOv8 for object detection in various domains.",
      "Implemented YOLOv5 for object counting and tracking.",
      "Tuberculosis Chest X Ray Classification using EfficientNET-B0"
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

          <a href="cv.pdf" download="Saim_Khalid_CV.pdf">
            <Button variant="outline" size="sm" className="font-mono flex gap-2">
              <Download size={16} />
              Download CV
            </Button>
          </a>
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
