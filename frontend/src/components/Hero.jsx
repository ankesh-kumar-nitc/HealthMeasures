import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=85&auto=format&fit=crop')",
        }}
      />
      {/* Very subtle overlays only for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#f7f4ed]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-40 pb-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[11px] tracking-[0.2em] uppercase mb-10 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a3c98d]" />
          NHS Primary Care Network Partner
        </div>

        <h1
          className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-[92px] leading-[1.02] tracking-tight max-w-5xl"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.25)' }}
        >
          Heal in the{' '}
          <em className="font-serif italic text-[#e6dbc0] font-light">embrace</em>
          <br />
          of nature
        </h1>

        <p
          className="mt-8 max-w-2xl text-white text-lg md:text-xl leading-relaxed"
          style={{ textShadow: '0 2px 18px rgba(0,0,0,0.35)' }}
        >
          A restorative bridge between hospital discharge and your joyful return to
          everyday life &mdash; delivered in partnership with NHS Primary Care Networks
          through green landscapes, therapeutic activities, and wholesome nourishment.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollTo('#vision')}
            className="px-8 h-14 rounded-full bg-[#2d5a3d] text-white font-medium hover:bg-[#244a32] transition-colors shadow-md"
          >
            Discover the Programme
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 h-14 rounded-full bg-transparent border border-white/70 text-white font-medium hover:bg-white/15 backdrop-blur-sm transition-colors"
          >
            Book a Consultation
          </button>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-1 animate-bounce">
          <ChevronDown className="w-5 h-5" />
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
