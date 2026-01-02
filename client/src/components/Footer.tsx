import { Link } from 'wouter';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component
 * Features: Multi-column layout, social links, contact info
 * Design: Dark charcoal background with orange accents
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-foreground to-black text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FF</span>
              </div>
              <span className="font-bold text-xl font-bold">FitForce</span>
            </div>
            <p className="text-gray-300 text-sm">
              Transform your body and mind with FitForce. Premium facilities, expert trainers, and personalized fitness programs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Membership', href: '/membership' },
                { label: 'Classes', href: '/classes' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-gray-300 hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: 'Personal Training', href: '#' },
                { label: 'Group Classes', href: '#' },
                { label: 'Nutrition Plans', href: '#' },
                { label: 'Progress Tracking', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">123 Fitness Street, Gym City, GC 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@fitforce.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@fitforce.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} FitForce. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto"
        id="scroll-to-top"
      >
        ↑
      </button>
    </footer>
  );
}
