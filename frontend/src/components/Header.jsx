import React, { useEffect, useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { navItems } from '../mock';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[#f7f4ed]/90 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button onClick={() => scrollTo('#top')} className="flex items-center gap-3 group">
          <span
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? 'bg-[#2d4a2b]/10' : 'bg-white/15 backdrop-blur-sm'
            }`}
          >
            <Leaf className={`w-5 h-5 ${scrolled ? 'text-[#2d4a2b]' : 'text-white'}`} />
          </span>
          <span className="text-left leading-tight">
            <span
              className={`block font-serif text-[17px] font-semibold tracking-tight ${
                scrolled ? 'text-[#1a1a1a]' : 'text-white'
              }`}
            >
              Health Measures
            </span>
            <span
              className={`block text-[10px] tracking-[0.18em] uppercase ${
                scrolled ? 'text-[#5b6b5a]' : 'text-white/80'
              }`}
            >
              Natural Recuperation
            </span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <button
              key={n.href}
              onClick={() => scrollTo(n.href)}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-[#2d3830] hover:text-[#2d4a2b]' : 'text-white/90 hover:text-white'
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollTo('#contact')}
            className="rounded-full bg-[#2d5a3d] hover:bg-[#244a32] text-white px-6 h-10 shadow-sm"
          >
            Book a Retreat
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={scrolled ? 'text-[#1a1a1a]' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-[#1a1a1a]' : 'text-white'} />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f7f4ed] border-t border-black/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((n) => (
              <button
                key={n.href}
                onClick={() => scrollTo(n.href)}
                className="text-left text-[#2d3830] font-medium"
              >
                {n.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo('#contact')}
              className="rounded-full bg-[#2d5a3d] hover:bg-[#244a32] text-white w-full h-11"
            >
              Book a Retreat
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
