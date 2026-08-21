import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../mock';

const Testimonials = () => {
  return (
    <section id="stories" className="bg-[#eef0ea]/50 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] tracking-[0.28em] uppercase text-[#7a8a75] font-medium">
            Guest Stories
          </span>
          <h2 className="mt-6 font-serif text-[#1f2a1e] text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Lives <em className="italic text-[#7f8f6f] font-light">renewed</em>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <Quote className="w-7 h-7 text-[#3d5a3b]" strokeWidth={1.5} />
              <p className="mt-5 text-[#3d463a] text-[15.5px] leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="mt-6 pt-6 border-t border-[#eae4d3] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3d5a3b] text-white font-semibold flex items-center justify-center text-sm">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[#1f2a1e] font-medium text-sm">{t.name}</div>
                  <div className="text-[#7a8a75] text-xs mt-0.5">{t.context}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center px-8 py-8 rounded-2xl border border-[#d9d3c4] bg-[#f7f4ed]">
          <p className="text-[#3d463a] text-[15px] leading-relaxed">
            <span className="text-[#1f2a1e] font-semibold">Primary Care Network Partnership:</span>{' '}
            Working alongside NHS Primary Care Networks, our programme complements
            post-discharge pathways &mdash; reducing readmission risk and alleviating bed
            pressure while supporting patient dignity and wellbeing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
