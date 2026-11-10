import ScrambleText from './ScrambleText';

interface SectionHeadingProps {
  index: string;
  title: string;
  kicker?: string;
}

/** "[01] // ABOUT" label, decoding title and a row of animated pixels. */
const SectionHeading = ({ index, title, kicker }: SectionHeadingProps) => (
  <div className="reveal mb-12">
    <div className="mb-3 flex items-center gap-3 font-pixel text-[11px] uppercase text-primary">
      <span>[{index}]</span>
      <span className="text-muted-foreground">// {kicker ?? title}</span>
    </div>
    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
      <ScrambleText text={title} />
    </h2>
    <div className="mt-5 flex gap-1" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 bg-primary"
          style={{ animation: `pixel-fill 2.4s ease-in-out ${i * 0.12}s infinite` }}
        />
      ))}
    </div>
  </div>
);

export default SectionHeading;
