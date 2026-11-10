import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';

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
    company: "Rinova AI",
    period: "Feb 2026 - Present",
    description: [
      "Build production revenue-cycle management (RCM) agents on a team-built, LangGraph-based framework that automates claim submission, eligibility verification and payment posting across multiple EHRs (eCW, ModMed, AdvancedMD, Practice Fusion), with per-practice JSON-configured workflows driven through SeleniumBase and Playwright.",
      "Developed the eCW claim submission agent: rule-driven payer detection, CPT/ICD pointer and DME validation, insurance verification, automated follow-up escalation and claim error resolution, with live status posting to the operations dashboard.",
      "Engineered ERA insurance payment posting for eCW and ModMed, and Stripe self-pay reconciliation, using RabbitMQ publish/consume pipelines with per-item fault isolation, no duplicate posting, and manual-review routing for unconfirmed payments.",
      "Developing ModMed EOB/ERA auto-posting: LLM- and vision-based extraction from EOB/ERA PDFs (OpenAI, Gemini) with money validation, claim-line matching and payment allocation, posting only after payer and patient identity are confirmed.",
      "Added a retry queue for transient payment-posting failures and kept workflows HIPAA compliant through PHI redaction and CI security gates (Pytest, Bandit, pip-audit, Trivy), shipping Docker images to AWS ECR/ECS via Bitbucket Pipelines."
    ],
    technologies: ["LangGraph", "Agentic AI", "SeleniumBase", "Playwright", "RabbitMQ", "OpenAI", "Gemini", "Computer Vision", "Stripe", "Docker", "AWS ECS", "HIPAA"]
  },
  {
    title: "AI Engineer",
    company: "CarBee",
    period: "Jan 2025 - Jan 2026",
    description: [
      "Built a LangGraph-based Text-to-MongoDB agent using OpenAI, vector search, and dynamic few-shot prompting, enabling accurate natural language database querying with domain-specific guardrails.",
      "Deployed the agent as a FastAPI microservice on AWS Elastic Beanstalk, implementing autonomous execution workflows and intelligent query-relaxation fallbacks to improve retrieval reliability.",
      "Architected a production-scale short-video recommendation system using a two-tower retrieval model, achieving 70% recommendation accuracy and enabling low-latency, location-aware retrieval through H3 indexing and MongoDB Atlas Vector Search.",
      "Deployed and maintained real-time recommendation pipelines on AWS (SageMaker, EC2, Fargate, SQS, and S3), supporting live user traffic, automated retraining, and scalable personalization.",
      "Developed a serverless subtitle localization pipeline capable of processing 100 concurrent videos using AWS Batch, Lambda, and EventBridge, translating content into five languages with AssemblyAI and GPT-4o.",
      "Built a resilient web scraping and ETL framework using Selenium and BeautifulSoup to extract, transform, and store large-scale vehicle data in MongoDB.",
      "Reduced dataset preparation time by over 90% by using a YOLOv5 model to automatically generate labels for 2,000+ images from an initial 100-image training set.",
      "Implemented a zero-touch, CRON-triggered data anonymization pipeline using YOLO architectures trained on 5,000+ images to detect and blur license plates, deployed as a highly scalable microservice on AWS Lambda."
    ],
    technologies: ["LangGraph", "OpenAI", "MongoDB", "Vector Search", "FastAPI", "AWS", "SageMaker", "Lambda", "YOLO", "Recommender Systems"]
  },
  {
    title: "Freelance AI Engineer",
    company: "Remote",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Engineered an advanced handwriting OCR pipeline utilizing the Qwen2 Vision-Language Model (VLM), integrating OpenAI for sophisticated prompt engineering and Named Entity Recognition (NER) to extract structured data, deployed via FastAPI with MLflow for robust model tracking.",
      "Developed a Vision Transformer (ViT) deep learning model for automated Heart X-ray image classification, leveraging transfer learning techniques in PyTorch to achieve 95% diagnostic accuracy."
    ],
    technologies: ["Qwen2 VLM", "OpenAI", "NER", "PyTorch", "ViT", "FastAPI", "MLflow"]
  },
  {
    title: "AI Engineer",
    company: "iOPTIME Pvt. Limited",
    period: "Nov 2022 - Aug 2024",
    description: [
      "Engineered enterprise NLP applications using LangChain, fine-tuning GPT-3.5 Turbo for e-commerce support and implementing Meta Llama 2 and Llama 3 with Azure-backed RAG frameworks to automate complex audit report analysis.",
      "Developed a fine-tuned GPT-3.5 medical chatbot incorporating strategic AI solutions mapped to regional healthcare challenges identified during a business tour to Zimbabwe, deployed via FastAPI using Docker containers to handle 500+ daily queries.",
      "Built a secure OCR pipeline for South African and Zimbabwean IDs and passports, utilizing OpenAI for precise Named Entity Recognition (NER) to extract structured data with 98% accuracy, deployed via FastAPI.",
      "Architected cross-platform computer vision tools, optimizing a Texas Hold'em card detection model via YOLOv5 using TFLite and CoreML for low-latency mobile edge inference, alongside a YOLOv8 object counting application.",
      "Implemented real-time video analytics, deploying a Vehicle Trajectory Analysis pipeline using DeepSORT and YOLO via FastAPI on cloud compute instances, alongside a Python and OpenCV face liveness detection module.",
      "Trained an EfficientNet-B4 deep learning model for Tuberculosis Chest X-Ray classification achieving 94% accuracy, and applied Causal Inference methodologies for predictive road accident analysis using Azure Machine Learning workflows."
    ],
    technologies: ["LangChain", "GPT-3.5", "Llama", "RAG", "Azure", "YOLO", "TFLite", "CoreML", "OpenCV", "FastAPI", "Docker"]
  }
];

const ExperienceSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // Fill the timeline line as the section scrolls past the middle of the screen
  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      const fill = fillRef.current;
      if (!track || !fill) return;
      const rect = track.getBoundingClientRect();
      const progress = (window.innerHeight * 0.55 - rect.top) / rect.height;
      fill.style.transform = `scaleY(${Math.min(Math.max(progress, 0), 1)})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="02" title="Experience" kicker="work history" />
          <a href="/cv.pdf" download="Saim_Khalid_CV.pdf" className="btn-ghost reveal mb-12 self-start md:self-auto">
            <Download size={16} /> Download CV
          </a>
        </div>

        <div ref={trackRef} className="relative">
          {/* Timeline track + scroll-driven fill */}
          <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-border md:left-[11px]" />
          <div
            ref={fillRef}
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-primary via-lilac to-primary shadow-[0_0_10px_hsl(var(--primary))] md:left-[11px]"
            style={{ transform: 'scaleY(0)' }}
          />

          <ol className="space-y-10">
            {experiences.map((job, index) => (
              <li key={index} className="reveal relative pl-8 md:pl-12">
                {/* Pixel node on the line */}
                <span
                  aria-hidden="true"
                  className="absolute left-[3px] top-7 h-[9px] w-[9px] rotate-45 border border-primary bg-background md:left-[7px]"
                >
                  {index === 0 && <span className="absolute inset-[2px] bg-primary" style={{ animation: 'blink 1.4s step-end infinite' }} />}
                </span>

                <article className="tech-card p-6 md:p-7">
                  <header className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold md:text-2xl">{job.title}</h3>
                      <p className="mt-1 font-mono text-sm text-primary">@ {job.company}</p>
                    </div>
                    <span className="self-start whitespace-nowrap rounded-md border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                      {index === 0 && <span className="mr-2 inline-block h-1.5 w-1.5 bg-primary align-middle" />}
                      {job.period}
                    </span>
                  </header>

                  <ul className="mb-6 space-y-2.5">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                        <span className="pixel-bullet" />
                        <span className="text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
