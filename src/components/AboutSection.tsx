import React from 'react';
import { Bot, Brain, Eye, MessageSquareText, Workflow, Cpu } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';

const focusAreas = [
  { icon: Bot, label: 'Agentic AI' },
  { icon: Brain, label: 'Large Language Models' },
  { icon: Eye, label: 'Computer Vision' },
  { icon: MessageSquareText, label: 'Natural Language Processing' },
  { icon: Workflow, label: 'AI Automation' },
  { icon: Cpu, label: 'AI Systems Design' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading index="01" title="About Me" kicker="about" />

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-5 md:gap-14">
          <div className="reveal md:col-span-2">
            <div className="group relative mx-auto aspect-square max-w-xs">
              {/* Offset pixel frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/40 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                style={{
                  backgroundImage: 'radial-gradient(hsl(var(--primary) / 0.35) 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border bg-muted">
                <img
                  src="/profile.png"
                  alt="Saim Khalid"
                  className="h-full w-full object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="scanlines" />
              </div>
            </div>
          </div>

          <div className="space-y-5 md:col-span-3">
            <p className="reveal text-lg leading-relaxed text-justify">
              I'm an <span className="font-semibold text-primary">AI Engineer</span> with 4+ years of experience architecting and deploying scalable Generative AI and Computer Vision solutions, from enterprise-grade agentic workflows and fine-tuned LLMs to low-latency vision models at the edge.
            </p>

            <p className="reveal leading-relaxed text-muted-foreground text-justify" style={{ '--d': '100ms' } as React.CSSProperties}>
              My expertise spans <span className="font-semibold text-foreground">Agentic AI</span>, <span className="font-semibold text-foreground">Large Language Models</span>, <span className="font-semibold text-foreground">Computer Vision</span>, and <span className="font-semibold text-foreground">Natural Language Processing</span>. Today I build LangGraph-based agents that automate healthcare revenue-cycle work across multiple EHR platforms, and I've previously shipped AI systems for automotive, e-commerce, and enterprise clients.
            </p>

            <p className="reveal leading-relaxed text-muted-foreground text-justify" style={{ '--d': '200ms' } as React.CSSProperties}>
              I believe in creating AI solutions that are responsible, ethical, and human-centered, augmenting human capabilities rather than replacing them.
            </p>

            <div className="pt-4">
              <h3 className="reveal mb-4 font-pixel text-xs uppercase text-primary">Core focus areas</h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {focusAreas.map(({ icon: Icon, label }, i) => (
                  <li
                    key={label}
                    className="reveal tech-card flex items-center gap-3 px-3 py-3 text-sm"
                    style={{ '--d': `${i * 60}ms` } as React.CSSProperties}
                  >
                    <Icon size={18} className="flex-shrink-0 text-primary" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
