import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 150;
        if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang Kami', href: '#tentang', id: 'tentang' },
    { name: 'Program Beasiswa', href: '#beasiswa', id: 'beasiswa' },
    { name: 'Kehidupan Asrama', href: '#asrama', id: 'asrama' },
    { name: 'Keahlian Digital', href: '#keahlian', id: 'keahlian' },
    { name: 'Testimoni', href: '#testimoni', id: 'testimoni' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-scrolled py-3' : 'glass-nav py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/img/logo.webp"
              alt="Logo Pondok Pesantren THOLABIE CIBS"
              referrerPolicy="no-referrer"
              className="w-10 h-10 object-contain rounded-full shadow-md group-hover:opacity-80 transition-opacity"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none text-primary">THOLABIE</span>
              <span className="text-[10px] tracking-widest text-secondary uppercase font-medium mt-1">CIBS</span>
            </div>
          </a>

          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'active' : 'text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6285183003060"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-primary-dark bg-accent hover:bg-accent-light transition-all shadow-sm hover:shadow-md"
            >
              Daftar Sekarang
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl ${
          isMobileMenuOpen ? 'open' : ''
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-secondary hover:bg-surface-alt hover:text-primary rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-3 text-base font-medium text-secondary hover:bg-surface-alt hover:text-primary rounded-md transition-colors"
          >
            FAQ
          </a>
        </div>
      </div>
    </header>
  );
}
