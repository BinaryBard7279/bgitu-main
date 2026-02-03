import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#directions', label: 'Направления' },
  { href: '#disciplines', label: 'Дисциплины' },
  { href: '#features', label: 'Преимущества' },
  { href: '#faculty', label: 'Преподаватели' },
  { href: '#roadmap', label: 'Учебный план' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-xl font-semibold text-foreground">
            БГИТУ <span className="text-muted-foreground font-normal">IT-Институт</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm transition-colors hover:text-foreground ${
                    activeSection === link.href.slice(1)
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="https://priem.bgitu.ru" target="_blank" rel="noopener noreferrer">
              Подать заявление
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
