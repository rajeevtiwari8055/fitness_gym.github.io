import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

/**
 * Navigation Component
 * Features: Responsive mobile menu, scroll-aware styling, smooth transitions
 * Design: Poppins font, orange accent, dark charcoal background
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Membership', href: '/membership' },
    { label: 'Classes', href: '/classes' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg font-bold">FF</span>
            </div>
            <span
              className={`font-bold text-xl font-bold transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              FitForce
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 6).map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/membership">
            <a className="btn-primary">Join Now</a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-all ${
            isScrolled
              ? 'bg-muted text-foreground'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-slide-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="text-foreground font-medium hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/membership">
              <a
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center"
              >
                Join Now
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
