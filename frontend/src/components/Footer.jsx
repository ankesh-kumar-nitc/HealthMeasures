import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f2a1e] text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#d8cdb4]" />
              </span>
              <div>
                <div className="font-serif text-lg text-white">Health Measures</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/60">Natural Recuperation</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              A restorative bridge between hospital discharge and joyful everyday life &mdash; in partnership with NHS Primary Care Networks.
            </p>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-[#d8cdb4]">Programme</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#vision" className="hover:text-white">Our Vision</a></li>
              <li><a href="#activities" className="hover:text-white">Activities</a></li>
              <li><a href="#locations" className="hover:text-white">Locations</a></li>
              <li><a href="#stories" className="hover:text-white">Guest Stories</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-[#d8cdb4]">Partnership</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>NHS Primary Care Networks</li>
              <li>Clinical Referrals</li>
              <li>Family Enquiries</li>
              <li>Professional Partners</li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.24em] uppercase text-[#d8cdb4]">Contact</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>+44 (0)1234 567 890</li>
              <li>hello@healthmeasures.co.uk</li>
              <li>Furze Hills, Lincolnshire</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>&copy; {new Date().getFullYear()} Health Measures Natural Recuperation. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-white">Privacy Policy</a>
            <a href="#top" className="hover:text-white">Terms of Service</a>
            <a href="#top" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
