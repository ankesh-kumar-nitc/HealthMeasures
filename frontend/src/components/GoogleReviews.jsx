import React from 'react';
import { Star } from 'lucide-react';
import { googleReviews, googleSummary } from '../mock';

const GoogleIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);

const GoogleReviews = () => {
  return (
    <section id="reviews" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-[#7a8a75] font-medium">
              <GoogleIcon className="w-4 h-4" /> Google Reviews
            </div>
            <h2 className="mt-5 font-serif text-[#1f2a1e] text-4xl md:text-5xl leading-[1.05] tracking-tight">
              What our guests{' '}
              <em className="italic text-[#7f8f6f] font-light">say on Google</em>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl text-[#1f2a1e]">
                  {googleSummary.rating.toFixed(1)}
                </span>
                <span className="text-sm text-[#7a8a75]">/ 5</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(googleSummary.rating)
                        ? 'fill-[#f5a623] text-[#f5a623]'
                        : 'text-[#d9d3c4]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#7a8a75] mt-1">
                Based on {googleSummary.totalReviews} reviews
              </span>
            </div>
            <div className="hidden md:block w-px h-16 bg-[#e5e0d0]" />
            <div className="hidden md:flex flex-col items-start">
              <GoogleIcon className="w-8 h-8" />
              <span className="mt-2 text-xs text-[#7a8a75]">Verified on Google</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleReviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#faf8f2] rounded-2xl p-6 border border-[#eae4d3] hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3d5a3b] text-white font-semibold flex items-center justify-center">
                  {r.initial}
                </div>
                <div className="flex-1">
                  <div className="text-[#1f2a1e] font-medium text-sm">{r.name}</div>
                  <div className="text-xs text-[#7a8a75]">{r.date}</div>
                </div>
                <GoogleIcon className="w-4 h-4" />
              </div>
              <div className="mt-4 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className={`w-3.5 h-3.5 ${
                      k < r.rating
                        ? 'fill-[#f5a623] text-[#f5a623]'
                        : 'text-[#d9d3c4]'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 text-[14.5px] text-[#3d463a] leading-relaxed flex-1">
                {r.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=health+measures+natural+recuperation+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2d5a3d] hover:text-[#1a3a25] text-sm font-medium"
          >
            <GoogleIcon className="w-4 h-4" />
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
