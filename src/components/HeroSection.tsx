import React from 'react';
import { Code, Brain, Network, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center mesh-background">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Animated Floating Icons - Hidden on mobile */}
        <div className="hidden md:block absolute left-10 top-1/4 opacity-20 dark:opacity-10">
          <Code size={48} className="animate-float float-delay-1" />
        </div>
        <div className="hidden md:block absolute right-20 top-1/3 opacity-20 dark:opacity-10">
          <Brain size={64} className="animate-float float-delay-2" />
        </div>
        <div className="hidden md:block absolute left-1/4 bottom-1/4 opacity-20 dark:opacity-10">
          <Network size={56} className="animate-float float-delay-3" />
        </div>
        <div className="hidden md:block absolute right-1/4 bottom-1/3 opacity-20 dark:opacity-10">
          <PenTool size={40} className="animate-float" />
        </div>

        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="mb-4 inline-block">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono">
              AI Engineer & ML Specialist
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Saim Khalid</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-8 leading-relaxed">
            Specializing in <span className="font-semibold">Natural Language Processing</span>, <span className="font-semibold">Generative AI</span>, and <span className="font-semibold">Computer Vision</span>
          </h2>

          <div className="mb-10 font-mono py-2 px-4 bg-code rounded-lg inline-flex items-baseline text-white text-sm sm:text-base break-words max-w-full">
            <span className="opacity-70 mr-1 flex-shrink-0">&gt;</span> 
            <span className="break-words">
              Building the future with machine <span className="whitespace-nowrap">intelligence</span>
              <span className="inline-block align-middle bg-primary animate-[blink_1s_step-end_infinite]" style={{ width: '0.6em', height: '1em', verticalAlign: 'middle', marginLeft: '0.1em' }}></span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Saim-Khalid" target="_blank" rel="noopener noreferrer">
              <Button className="font-mono" size="lg">
                View My Projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="font-mono" size="lg">
                Get in Touch
              </Button>
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block">
              <div className="border-2 border-muted-foreground/30 rounded-full p-2 hover:border-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
