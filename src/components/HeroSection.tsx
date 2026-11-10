import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import PixelField from './fx/PixelField';
import ScrambleText from './fx/ScrambleText';
import Typewriter from './fx/Typewriter';

const phrases = [
  'building LangGraph agents that automate healthcare revenue cycles',
  'shipping LLM, RAG and vision systems to production',
  'deploying low-latency computer vision to the edge',
];

const stats = [
  { value: '4+', label: 'years in AI' },
  { value: '4', label: 'EHR platforms automated' },
  { value: '54', label: 'paper citations' },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <PixelField />
      {/* Fade the pixel field into the page and add soft colour glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 45%, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.4) 55%, transparent 100%), linear-gradient(to bottom, transparent 70%, hsl(var(--background)) 100%)',
        }}
      />
      <div aria-hidden="true" className="aurora -left-24 top-1/4 h-72 w-72 bg-primary" />
      <div aria-hidden="true" className="aurora -right-24 bottom-1/4 h-80 w-80 bg-lilac" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal mb-8 inline-flex items-center gap-2.5 rounded-full border bg-background/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 bg-primary" style={{ animation: 'pulse-ring 1.6s ease-out infinite' }} />
            Currently building RCM agents @ <span className="text-foreground">Rinova AI</span>
          </div>

          <p className="reveal mb-4 font-pixel text-xs uppercase tracking-widest text-primary" style={{ '--d': '100ms' } as React.CSSProperties}>
            AI Engineer · Agentic AI · LLMs · Computer Vision
          </p>

          <h1
            className="reveal mb-6 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ '--d': '200ms' } as React.CSSProperties}
          >
            <span className="text-muted-foreground/70">Hi, I'm </span>
            <br className="sm:hidden" />
            <ScrambleText text="Saim Khalid" className="text-gradient" duration={1200} delay={300} />
          </h1>

          <div
            className="reveal mx-auto mb-10 max-w-2xl rounded-xl border bg-card/60 px-5 py-4 text-left font-mono text-sm backdrop-blur sm:text-base"
            style={{ '--d': '300ms' } as React.CSSProperties}
          >
            <div className="mb-2 flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-lilac/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 text-xs text-muted-foreground">~/saim — zsh</span>
            </div>
            <span className="text-primary">❯</span> <span className="text-muted-foreground">currently</span>{' '}
            <Typewriter phrases={phrases} />
          </div>

          <div className="reveal flex flex-col justify-center gap-3 sm:flex-row" style={{ '--d': '400ms' } as React.CSSProperties}>
            <a href="#projects" className="btn-glow">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/cv.pdf" download="Saim_Khalid_CV.pdf" className="btn-ghost">
              <Download size={16} /> Download CV
            </a>
          </div>

          <dl
            className="reveal mx-auto mt-14 grid max-w-xl grid-cols-3 divide-x divide-border rounded-xl border bg-background/40 backdrop-blur"
            style={{ '--d': '500ms' } as React.CSSProperties}
          >
            {stats.map((s) => (
              <div key={s.label} className="px-3 py-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-foreground sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 font-mono text-[11px] text-muted-foreground sm:text-xs">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 translate-y-8 md:block"
        >
          <span className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/40 pt-2">
            <span className="h-1.5 w-1.5 bg-primary" style={{ animation: 'scroll-dot 1.8s ease-in-out infinite' }} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
