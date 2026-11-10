import { useEffect, useState } from 'react';

interface TypewriterProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  hold?: number;
}

/** Types each phrase, holds it, deletes it, then moves to the next. */
const Typewriter = ({ phrases, typeSpeed = 45, deleteSpeed = 25, hold = 1800 }: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0]);
      return;
    }
    const current = phrases[index % phrases.length];
    let timer: number;

    if (!deleting && text === current) {
      timer = window.setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    } else {
      timer = window.setTimeout(
        () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, hold]);

  return (
    <span>
      <span className="sr-only">{phrases.join('. ')}</span>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="blink-cursor" />
    </span>
  );
};

export default Typewriter;
