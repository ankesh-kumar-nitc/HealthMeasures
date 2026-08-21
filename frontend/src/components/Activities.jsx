import React, { useState } from 'react';
import { ArrowRight, X, Clock, Calendar, Sparkles } from 'lucide-react';
import { activities } from '../mock';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';

const Activities = () => {
  const [selected, setSelected] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const openDialog = (activity) => {
    setSelected(activity);
    setActiveImg(0);
  };

  const scrollTo = (href) => {
    setSelected(null);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <section id="activities" className="bg-[#f7f4ed] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] tracking-[0.28em] uppercase text-[#7a8a75] font-medium">
            Green Countryside Pursuits
          </span>
          <h2 className="mt-6 font-serif text-[#1f2a1e] text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Activities that <em className="italic text-[#7f8f6f] font-light">heal</em>
          </h2>
          <p className="mt-6 text-[17px] text-[#5b6b5a] leading-relaxed">
            Each activity is carefully chosen for its evidence-based therapeutic
            value &mdash; nurturing physical recovery, mental clarity, and the
            joyful reconnection with life. Tap any pursuit to explore it in detail.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a) => (
            <article
              key={a.id}
              onClick={() => openDialog(a)}
              className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e0d0]">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-out"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#3d5a3b] text-white text-[11px] tracking-wide font-medium">
                  {a.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-[#1f2a1e] font-semibold">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] text-[#5b6b5a] leading-relaxed line-clamp-3">
                  {a.text}
                </p>
                <div className="mt-5 pt-5 border-t border-[#eae4d3] flex items-center justify-between">
                  <span className="text-[12px] text-[#7a8a75] tracking-wide">
                    {a.tags.join(' \u00b7 ')}
                  </span>
                  <span className="text-[13px] text-[#2d5a3d] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 gap-0 bg-[#f7f4ed] border-0 rounded-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
          {selected && (
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 bg-[#1f2a1e] relative">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] bg-[#1f2a1e]">
                  <img
                    src={selected.gallery[activeImg]}
                    alt={selected.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#3d5a3b] text-white text-[11px] tracking-wide font-medium">
                    {selected.category}
                  </span>
                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                    {activeImg + 1} / {selected.gallery.length}
                  </span>
                </div>
                <div className="p-4 bg-[#1f2a1e] flex gap-2 overflow-x-auto">
                  {selected.gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                        activeImg === i ? 'border-[#d8cdb4]' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={g} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col">
                <h3 className="font-serif text-3xl md:text-4xl text-[#1f2a1e] tracking-tight leading-tight">
                  {selected.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-[#eef1e8] text-[#3d5a3b] text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-[15px] text-[#3d463a] leading-relaxed">
                  {selected.text}
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#3d463a]">
                    <Clock className="w-4 h-4 text-[#3d5a3b] mt-0.5" />
                    <div>
                      <div className="text-[11px] tracking-[0.18em] uppercase text-[#7a8a75]">Duration</div>
                      <div className="mt-0.5">{selected.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#3d463a]">
                    <Calendar className="w-4 h-4 text-[#3d5a3b] mt-0.5" />
                    <div>
                      <div className="text-[11px] tracking-[0.18em] uppercase text-[#7a8a75]">Schedule</div>
                      <div className="mt-0.5">{selected.schedule}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#eae4d3]">
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#7a8a75] font-medium">
                    <Sparkles className="w-3.5 h-3.5" /> Key Benefits
                  </div>
                  <ul className="mt-4 space-y-2">
                    {selected.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#3d463a]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7f8f6f] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => scrollTo('#contact')}
                  className="mt-8 h-12 rounded-full bg-[#2d5a3d] hover:bg-[#244a32] text-white"
                >
                  Enquire About This Activity
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Activities;
