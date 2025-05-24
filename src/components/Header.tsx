import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Initialize theme based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
    
    // Track scroll for header styling
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // offset for header height
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Publications", href: "#publications" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; // header height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed z-50 transition-all duration-300 ${
        scrolled 
          ? 'left-1/2 -translate-x-1/2 top-4 max-w-3xl w-[95%] bg-background/60 backdrop-blur-xl py-2 rounded-full shadow-lg border border-border/30' 
          : 'top-0 left-0 w-full px-4 lg:px-8 py-4 bg-background/40 backdrop-blur-md'
      }`}
    >
      <div className={`${scrolled ? 'px-6' : 'max-w-7xl mx-auto'} flex items-center justify-between`}>
        {!scrolled && (
          <a href="#" className="font-mono text-lg font-bold">
            <span className="text-primary">ai</span>Engineer<span className="text-primary">.</span>
          </a>
        )}

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center ${scrolled ? 'justify-center w-full space-x-8' : 'space-x-6'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.substring(1));
              }}
              className={`font-mono text-sm transition-colors rounded-full ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary font-semibold bg-primary/10 backdrop-blur-sm px-4 py-2' 
                  : 'hover:bg-background/50 hover:backdrop-blur-sm hover:text-primary/80 px-3 py-1.5'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="ml-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className={`flex items-center md:hidden ${scrolled ? 'w-full justify-between' : ''}`}>
          {scrolled && (
            <a href="#" className="font-mono text-lg font-bold">
              <span className="text-primary">ai</span>E<span className="text-primary">.</span>
            </a>
          )}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="mr-1"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/70 backdrop-blur-xl absolute top-full left-0 w-full border-t border-border/30 animate-fade-in rounded-b-lg shadow-md mt-2">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
                className={`block font-mono text-base py-2 px-4 rounded-full transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'hover:bg-muted'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
