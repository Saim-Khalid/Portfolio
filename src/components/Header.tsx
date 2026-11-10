import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Publications', id: 'publications' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Theme class is applied before first paint by the script in index.html
    setDarkMode(document.documentElement.classList.contains('dark'));

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const probe = window.scrollY + 120;
      let current = '';
      document.querySelectorAll<HTMLElement>('section[id]').forEach((section) => {
        if (probe >= section.offsetTop && probe < section.offsetTop + section.offsetHeight) {
          current = section.id;
        }
      });
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) current = 'contact';
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage unavailable: theme just won't persist */
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const y = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const ThemeButton = (
    <button
      onClick={toggleDarkMode}
      className="grid h-9 w-9 place-items-center rounded-lg border bg-background/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
      aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {darkMode ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );

  return (
    <header
      className={`fixed left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-2xl border transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? 'top-3 border-border/70 bg-background/70 shadow-[0_10px_40px_-20px_hsl(var(--primary)/0.35)] backdrop-blur-xl'
          : 'top-5 border-transparent bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2.5 md:px-5">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2"
        >
          <span className="grid h-8 w-8 grid-cols-3 gap-[2px] rounded-md border border-primary/40 p-1.5" aria-hidden="true">
            {[1, 0, 1, 0, 1, 0, 1, 0, 1].map((on, i) => (
              <span
                key={i}
                className={`transition-colors duration-300 ${on ? 'bg-primary' : 'bg-primary/20 group-hover:bg-lilac'}`}
              />
            ))}
          </span>
          <span className="font-pixel text-sm">
            saim<span className="text-primary">.ai</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`relative px-3 py-2 font-mono text-[13px] transition-colors ${
                  active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 bg-primary shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300 ${
                    active ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                />
              </a>
            );
          })}
          <span className="mx-2 h-5 w-px bg-border" />
          {ThemeButton}
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {ThemeButton}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid h-9 w-9 place-items-center rounded-lg border bg-background/50"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="animate-in fade-in slide-in-from-top-2 border-t px-3 pb-3 pt-2 lg:hidden">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-sm transition-colors ${
                activeSection === link.id ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
              }`}
            >
              <span className="font-pixel text-[10px] text-muted-foreground">0{i + 1}</span>
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
