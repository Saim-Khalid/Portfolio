
import React from 'react';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">
          <User size={24} className="text-primary" />
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden relative aspect-square max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg p-1">
                <div className="bg-background rounded-lg h-full w-full overflow-hidden">
                  {/* Profile image placeholder */}
                  <div className="h-full w-full bg-muted/50 flex items-center justify-center">
                    <span className="font-mono text-muted-foreground">profile.jpg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg">
              I'm a passionate <span className="font-semibold text-primary">AI Engineer</span> with over 5 years of experience building and deploying machine learning systems that solve real-world problems. My journey in AI began during my graduate studies in Computer Science, where I became fascinated by the potential of neural networks to understand language and vision.
            </p>
            
            <p>
              My expertise lies at the intersection of <span className="font-semibold">Natural Language Processing</span>, <span className="font-semibold">Computer Vision</span>, and <span className="font-semibold">Large Language Models</span>. I've worked across various industries, from healthcare to finance, helping organizations harness the power of AI to enhance their products and services.
            </p>
            
            <p>
              What drives me is not just building technically impressive systems, but creating AI solutions that are responsible, ethical, and human-centered. I believe the most valuable AI technologies are those that augment human capabilities rather than replace them.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Core Focus Areas</h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Natural Language Processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Large Language Models
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Computer Vision
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  AI Systems Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  MLOps & Deployment
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Responsible AI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
