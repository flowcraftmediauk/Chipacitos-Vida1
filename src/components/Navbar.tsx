import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Productos', href: '#productos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F2]/95 backdrop-blur-md shadow-sm border-b border-[#E9C4BC]/40 py-3.5'
          : 'bg-[#FFF9F2] border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#inicio"
          className="group flex items-center gap-2 text-2xl sm:text-[26px] font-serif font-bold tracking-tight text-[#49352F] hover:text-[#B9824D] transition-colors whitespace-nowrap shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#B9824D] group-hover:scale-125 transition-transform"></span>
          <span>Chipacitos Vida</span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#49352F]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#B9824D] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B9824D] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOrderClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#49352F] hover:bg-[#34241F] rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Hacé tu pedido</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D9B58D]" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#49352F] hover:bg-[#F2D9D3]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9824D]"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F2] border-b border-[#E9C4BC]/60 px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#49352F] hover:bg-[#F2D9D3]/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E9C4BC]/40">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#49352F] rounded-full shadow cursor-pointer active:scale-98 transition-all"
              >
                <span>Hacé tu pedido</span>
                <ArrowUpRight className="w-4 h-4 text-[#D9B58D]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
