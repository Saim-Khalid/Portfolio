import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Artificial Intelligence on Microsoft Azure",
      issuer: "Microsoft, Coursera",
      date: "2026",
      description: "Explored Azure AI services for building intelligent applications, covering machine learning, computer vision, natural language processing, and conversational AI on Microsoft Azure.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/records/TEMT47VOK4PA"
    },
    {
      title: "Fundamentals of MCP",
      issuer: "Hugging Face",
      date: "2025",
      description: "Learned the Model Context Protocol (MCP): building MCP servers and clients that connect LLMs and AI agents to external tools, data sources, and applications.",
      verifyUrl: "https://huggingface.co/datasets/mcp-course/certificates/resolve/main/certificates/AIdevSaim/2025-07-23.png"
    },
    {
      title: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      date: "2025",
      description: "Covered the foundations of AI agents: LLM reasoning, tool use, the thought-action-observation loop, and building agents with frameworks such as smolagents, LangGraph, and LlamaIndex.",
      verifyUrl: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/AIdevSaim/2025-05-04.png"
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "AWS, Coursera, DeepLearning.AI",
      date: "2024",
      description: "Gained hands-on experience in generative AI through AWS-led training focused on research and real-world applications.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/P52CZRTBTAV3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Introduction to on-device AI",
      issuer: "DeepLearning.AI",
      date: "2024",
      description: "Deployed AI models on Edge devices and smartphones. Learned model coversion, quantization, and how to modify for deployment on diverse devices.",
      verifyUrl: "https://learn.deeplearning.ai/accomplishments/bcaa8cae-ab1e-445b-92e8-ac7c5666e212?usp=sharing"
    },
    {
      title: "Machine Learning Operations (MLOps): Getting Started",
      issuer: "Google Cloud, Coursera",
      date: "2023",
      description: "Acquired skills in implementing effective MLOps using core technologies, CI/CD practices, and Google Cloud for reliable training and inference workflows.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/JG337LUP7SAB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM, Coursera",
      date: "2021",
      description: "Mastered Python for data science, using core concepts, APIs, and libraries like Pandas, NumPy, and Beautiful Soup.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/SZLXVR8YHB4R?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    }
  ];

  return (
    <section id="certifications" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading index="05" title="Certifications" kicker="credentials" />

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <article
              key={cert.title}
              className="reveal tech-card flex flex-col p-6"
              style={{ '--d': `${(index % 2) * 100}ms` } as React.CSSProperties}
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Award size={18} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
                  <p className="mt-1 font-mono text-xs text-primary">{cert.issuer}</p>
                </div>
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground text-justify">{cert.description}</p>

              <div className="flex items-center justify-between border-t pt-4 font-mono text-xs">
                <span className="text-muted-foreground">issued {cert.date}</span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary transition-opacity hover:opacity-80"
                >
                  Verify <ExternalLink size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
