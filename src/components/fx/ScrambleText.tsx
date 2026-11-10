import { useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}=+*^?#01▓▒░';

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** Total decode duration in ms */
  duration?: number;
  delay?: number;
}

/**
 * Text that "decodes" from random glyphs into the final string the first
 * time it scrolls into view. Screen readers always get the final text.
 */
const ScrambleText = ({ text, className = '', duration = 900, delay = 0 }: ScrambleTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let timeout = 0;

    const run = () => {
      const startAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startAt) / duration, 1);
        const revealed = Math.floor(progress * text.length);
        let out = '';
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (i < revealed || ch === ' ') out += ch;
          else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        setDisplay(out);
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timeout = window.setTimeout(run, delay);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [text, duration, delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
};

export default ScrambleText;
