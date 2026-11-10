import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';
import SectionHeading from './fx/SectionHeading';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:aidevsaim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  };

  const channels = [
    { icon: Mail, label: 'Email', value: 'aidevsaim@gmail.com', href: 'mailto:aidevsaim@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/Saim-Khalid', href: 'https://github.com/Saim-Khalid' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/saimkhalid', href: 'https://www.linkedin.com/in/saim-khalid-aa762a136' },
  ];

  const fieldClass =
    'bg-background/60 font-mono text-sm transition-shadow focus-visible:ring-1 focus-visible:ring-primary focus-visible:shadow-[0_0_0_4px_hsl(var(--primary)/0.1)]';

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div aria-hidden="true" className="aurora -left-20 bottom-0 h-80 w-80 bg-primary" />
      <div className="container relative mx-auto px-4">
        <SectionHeading index="07" title="Get In Touch" kicker="contact" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="reveal">
            <h3 className="mb-4 text-2xl font-bold">Let's build something intelligent.</h3>
            <p className="mb-8 leading-relaxed text-muted-foreground text-justify">
              I'm always open to discussing new projects, opportunities in AI development, or potential collaborations.
              Feel free to reach out using your preferred method below.
            </p>

            <div className="space-y-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="tech-card group flex items-center gap-4 p-4"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon size={18} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-pixel text-[10px] uppercase text-muted-foreground">{label}</span>
                    <span className="font-mono text-sm">{value}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div className="reveal tech-card p-6 md:p-8" style={{ '--d': '120ms' } as React.CSSProperties}>
            <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 bg-primary" style={{ animation: 'pulse-ring 1.6s ease-out infinite' }} />
              new_message.txt
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-xs text-muted-foreground">
                    name
                  </label>
                  <Input id="name" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-xs text-muted-foreground">
                    email
                  </label>
                  <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} className={fieldClass} />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block font-mono text-xs text-muted-foreground">
                  subject
                </label>
                <Input id="subject" placeholder="How can I help you?" value={subject} onChange={e => setSubject(e.target.value)} className={fieldClass} />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-xs text-muted-foreground">
                  message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <button type="submit" className="btn-glow w-full">
                <Send size={15} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
