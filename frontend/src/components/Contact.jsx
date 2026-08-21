import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    referral: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: 'Please add your name and email', variant: 'destructive' });
      return;
    }
    // Frontend-only: store to localStorage as a stand-in
    const existing = JSON.parse(localStorage.getItem('hm_enquiries') || '[]');
    existing.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem('hm_enquiries', JSON.stringify(existing));
    setSubmitted(true);
    toast({ title: 'Enquiry received', description: "We'll respond within 24 hours." });
  };

  return (
    <section id="contact" className="bg-[#f7f4ed] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] tracking-[0.28em] uppercase text-[#7a8a75] font-medium">
            Begin Your Journey
          </span>
          <h2 className="mt-6 font-serif text-[#1f2a1e] text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Let&apos;s discuss{' '}
            <em className="italic text-[#7f8f6f] font-light">your recovery</em>
          </h2>
          <p className="mt-6 text-[17px] text-[#5b6b5a] leading-relaxed">
            Whether you&apos;re a patient preparing for discharge, a Primary Care
            Network clinician seeking a trusted referral pathway, or a family member
            exploring options &mdash; we&apos;re here to guide you with care and
            clarity.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: 'Call Us', main: '+44 (0)1234 567 890', sub: 'Mon \u2013 Fri, 8am \u2013 6pm' },
              { icon: Mail, title: 'Email', main: 'hello@healthmeasures.co.uk', sub: 'We respond within 24 hours' },
              { icon: MapPin, title: 'Flagship Site', main: 'Furze Hills, Lincolnshire', sub: '68-acre estate' },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="bg-white rounded-2xl p-6 border border-black/5 flex items-start gap-5"
                >
                  <div className="shrink-0 w-11 h-11 rounded-full bg-[#eef1e8] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#3d5a3b]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.22em] uppercase text-[#7a8a75] font-medium">
                      {c.title}
                    </div>
                    <div className="mt-1 text-[#1f2a1e] font-serif text-xl">
                      {c.main}
                    </div>
                    <div className="text-sm text-[#5b6b5a] mt-1">{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-8 lg:p-10 border border-black/5">
            <h3 className="font-serif text-2xl text-[#1f2a1e]">Enquiry Form</h3>
            {submitted ? (
              <div className="mt-8 py-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#eef1e8] flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#3d5a3b]" />
                </div>
                <p className="mt-5 font-serif text-2xl text-[#1f2a1e]">Thank you</p>
                <p className="mt-2 text-[#5b6b5a]">Your enquiry has been received. Our team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <Label htmlFor="name" className="text-[#3d463a]">Full Name *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 h-11 rounded-lg border-[#d9d3c4] focus-visible:ring-[#3d5a3b]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#3d463a]">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 h-11 rounded-lg border-[#d9d3c4] focus-visible:ring-[#3d5a3b]"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#3d463a]">Phone</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 h-11 rounded-lg border-[#d9d3c4] focus-visible:ring-[#3d5a3b]"
                  />
                </div>
                <div>
                  <Label className="text-[#3d463a]">Preferred Location</Label>
                  <Select value={form.location} onValueChange={(v) => setForm({ ...form, location: v })}>
                    <SelectTrigger className="mt-2 h-11 rounded-lg border-[#d9d3c4] focus:ring-[#3d5a3b]">
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any location</SelectItem>
                      <SelectItem value="furze">Furze Hills (Lincolnshire)</SelectItem>
                      <SelectItem value="suffolk">Health Measures House (Suffolk)</SelectItem>
                      <SelectItem value="essex">3 Courtauld Rd (Essex)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-[#3d463a]">Referral Source</Label>
                  <Select value={form.referral} onValueChange={(v) => setForm({ ...form, referral: v })}>
                    <SelectTrigger className="mt-2 h-11 rounded-lg border-[#d9d3c4] focus:ring-[#3d5a3b]">
                      <SelectValue placeholder="How did you hear about us?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pcn">Primary Care Network Referral</SelectItem>
                      <SelectItem value="nhs">NHS / Clinical Referral</SelectItem>
                      <SelectItem value="gp">GP Recommendation</SelectItem>
                      <SelectItem value="family">Family / Friend</SelectItem>
                      <SelectItem value="online">Online Search</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="message" className="text-[#3d463a]">Tell Us About Your Needs</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 rounded-lg border-[#d9d3c4] focus-visible:ring-[#3d5a3b]"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-full bg-[#2d5a3d] hover:bg-[#244a32] text-white text-base"
                  >
                    Send Enquiry
                  </Button>
                  <p className="mt-4 text-xs text-[#7a8a75] text-center">
                    Your information is kept confidential and used only to respond to your enquiry.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
