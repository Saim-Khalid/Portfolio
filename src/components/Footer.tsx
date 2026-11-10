import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t bg-background/60 py-10 backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-pixel text-sm">
            saim<span className="text-primary">.ai</span>
          </p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            <span className="text-primary">❯</span> building the future with machine intelligence
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Saim Khalid</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid h-9 w-9 place-items-center rounded-lg border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
