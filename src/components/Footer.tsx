
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-mono text-lg font-bold">
              <span className="text-primary">ai</span>Engineer<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground mt-2">
              Building the future with machine intelligence
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 p-2 rounded-full border hover:bg-background/80 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
