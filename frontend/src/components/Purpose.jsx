import React from 'react';
import { Sun, Heart, Leaf } from 'lucide-react';
import { pillars, stats } from '../mock';

const iconMap = { Sun, Heart, Leaf };

const Purpose = () => {
  return (
    <section id="vision" className="bg-[#f7f4ed] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-[11px] tracking-[0.28em] uppercase text-[#7a8a75] font-medium">
              Our Purpose
            </span>
            <h2 className="mt-6 font-serif text-[#1f2a1e] text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Where recovery
              <br />
              <em className="italic text-[#7f8f6f] font-light">finds its rhythm</em>
            </h2>
            <div className="mt-10 space-y-6 text-[#3d463a] text-[17px] leading-relaxed">
              <p>
                Health Measures Natural Recuperation was founded to answer a critical
                gap in post-clinical care. When treatment ends, true recovery is only
                beginning. We provide the environment &mdash; both physical and
                emotional &mdash; where that recovery can flourish.
              </p>
              <p>
                Working in partnership with local NHS Primary Care Networks, our
                non-clinical, nature-immersive approach eases pressure on NHS
                facilities while giving each individual the time, space, and
                specialist support they deserve on their path to a joyful return to
                productive vocation.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <span className="w-12 h-px bg-[#7f8f6f]" />
              <span className="font-serif italic text-[#5b6b5a] text-lg">
                &ldquo;Joyful return to productive vocation&rdquo;
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {pillars.map((p) => {
              const Icon = iconMap[p.icon];
              return (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl p-7 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-11 h-11 rounded-full bg-[#eef1e8] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#3d5a3b]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#1f2a1e] font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-[#5b6b5a] leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#d9d3c4]">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-[#1f2a1e] text-5xl md:text-6xl tracking-tight">
                {s.value}
                {s.unit && (
                  <span className="text-lg md:text-xl ml-1 text-[#7f8f6f] font-serif italic">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-2 text-sm text-[#5b6b5a]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;
