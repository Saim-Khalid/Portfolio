import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Small Pests Detection in Field Crops Using Deep Learning Object Detection",
      journal: "Sustainability (MDPI)",
      type: "Research Paper",
      date: "2023",
      authors: ["Saim Khalid", "Hadi Mohsen Oqaibi", "Muhammad Aqib", "Yaser Hafeez"],
      abstract: "Deep learning algorithms, such as convolutional neural networks (CNNs), have been widely studied and applied in various fields including agriculture. Agriculture is the most important source of food and income in human life. In most countries, the backbone of the economy is based on agriculture. Pests are one of the major challenges in crop production worldwide. To reduce the overall production and economic loss from pests, advancement in computer vision and artificial intelligence may lead to early and small pest detection with greater accuracy and speed.",
      url: "https://www.mdpi.com/2071-1050/15/8/6815#metrics",
      citations: 54
    }
  ];

  return (
    <section id="publications" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading index="06" title="Publications" kicker="research" />

        <div className="space-y-6">
          {publications.map((pub) => (
            <article key={pub.title} className="reveal tech-card grid gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">{pub.type}</span>
                  <span className="text-muted-foreground">{pub.journal}</span>
                  <span className="text-muted-foreground">· {pub.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold leading-snug md:text-2xl">{pub.title}</h3>
                <p className="mb-4 font-mono text-xs text-muted-foreground">{pub.authors.join(', ')}</p>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground text-justify">{pub.abstract}</p>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <BookOpen size={16} /> Read Publication <ExternalLink size={13} />
                </a>
              </div>

              <div className="flex flex-row items-center gap-4 md:flex-col md:justify-center md:border-l md:pl-8">
                <span className="font-display text-5xl font-bold text-gradient md:text-6xl">{pub.citations}</span>
                <span className="font-pixel text-[10px] uppercase text-muted-foreground">citations</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
