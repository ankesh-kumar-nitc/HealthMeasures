import React, { useState } from 'react';
import { Star, MapPin, CalendarDays, Home, Check } from 'lucide-react';
import { estates } from '../mock';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Calendar } from './ui/calendar';
import { useToast } from '../hooks/use-toast';

const Estates = () => {
  const [openEstate, setOpenEstate] = useState(null);
  const [date, setDate] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const { toast } = useToast();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendar = (estate) => {
    setOpenEstate(estate);
    setDate(null);
    setConfirmed(false);
  };

  const closeCalendar = () => {
    setOpenEstate(null);
    setTimeout(() => {
      setDate(null);
      setConfirmed(false);
    }, 200);
  };

  const confirmDate = () => {
    if (!date) {
      toast({ title: 'Please select a date', variant: 'destructive' });
      return;
    }
    // Frontend-only: store to localStorage as stand-in
    const existing = JSON.parse(localStorage.getItem('hm_availability_checks') || '[]');
    existing.push({
      estate: openEstate.name,
      date: date.toISOString(),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('hm_availability_checks', JSON.stringify(existing));
    setConfirmed(true);
    toast({
      title: 'Availability request sent',
      description: `${openEstate.name} \u00b7 ${date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`,
    });
  };

  const goToEnquire = () => {
    closeCalendar();
    setTimeout(() => scrollTo('#contact'), 220);
  };

  // Disable past dates and dates > 1 year out
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <section id="locations" className="bg-[#f7f4ed] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] tracking-[0.28em] uppercase text-[#7a8a75] font-medium">
            Our Estates
          </span>
          <h2 className="mt-6 font-serif text-[#1f2a1e] text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Three sanctuaries{' '}
            <em className="italic text-[#7f8f6f] font-light">across England</em>
          </h2>
          <p className="mt-6 text-[17px] text-[#5b6b5a] leading-relaxed">
            Each location offers the full Recuperation programme in a unique natural
            setting &mdash; carefully chosen for their restorative landscapes.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {estates.map((e, idx) => (
            <div
              key={e.id}
              className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-black/5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${
                idx % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-[5/4] lg:aspect-auto lg:min-h-[480px] bg-[#e5e0d0]">
                <img
                  src={e.image}
                  alt={e.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {e.flagship && (
                  <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f7f4ed] text-[#3d5a3b] text-[11px] font-semibold tracking-wide">
                    <Star className="w-3.5 h-3.5 fill-[#3d5a3b] text-[#3d5a3b]" /> Flagship
                  </span>
                )}
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#7a8a75] font-medium">
                  <Home className="w-3.5 h-3.5" /> {e.label}
                </div>
                <h3 className="mt-4 font-serif text-4xl md:text-5xl text-[#1f2a1e] tracking-tight">
                  {e.name}
                </h3>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[#5b6b5a]">
                  <MapPin className="w-4 h-4" /> {e.location}
                </div>
                <p className="mt-6 text-[16px] text-[#3d463a] leading-relaxed">
                  {e.text}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
                  {e.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px] text-[#3d463a]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7f8f6f] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    onClick={() => openCalendar(e)}
                    className="rounded-full border-[#2d5a3d]/40 text-[#2d5a3d] hover:bg-[#2d5a3d]/5 h-11 px-5"
                  >
                    <CalendarDays className="w-4 h-4 mr-2" /> Check Availability
                  </Button>
                  <Button
                    onClick={() => scrollTo('#contact')}
                    className="rounded-full bg-[#2d5a3d] hover:bg-[#244a32] text-white h-11 px-5"
                  >
                    Enquire About This Location
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!openEstate} onOpenChange={(o) => !o && closeCalendar()}>
        <DialogContent className="max-w-lg w-[95vw] bg-[#f7f4ed] border-0 rounded-2xl p-0 overflow-hidden">
          {openEstate && (
            <div>
              <div className="relative h-40 bg-[#1f2a1e]">
                <img
                  src={openEstate.image}
                  alt={openEstate.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1e] via-[#1f2a1e]/40 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-[10px] tracking-[0.24em] uppercase text-white/80">
                    Check Availability
                  </div>
                  <div className="font-serif text-2xl mt-1">{openEstate.name}</div>
                  <div className="text-xs text-white/80 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {openEstate.location}
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                {!confirmed ? (
                  <>
                    <DialogHeader className="text-left">
                      <DialogTitle className="font-serif text-xl text-[#1f2a1e]">
                        Select a date to begin your stay
                      </DialogTitle>
                      <DialogDescription className="text-sm text-[#5b6b5a]">
                        Our team will confirm exact availability within 24 hours of your
                        request.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-5 flex justify-center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < today || d > maxDate}
                        initialFocus
                        className="rounded-xl border border-[#e5e0d0] bg-white p-3"
                      />
                    </div>

                    {date && (
                      <div className="mt-5 p-4 rounded-xl bg-[#eef1e8] flex items-center gap-3">
                        <CalendarDays className="w-5 h-5 text-[#3d5a3b]" />
                        <div>
                          <div className="text-[11px] tracking-[0.2em] uppercase text-[#7a8a75]">
                            Selected
                          </div>
                          <div className="text-[#1f2a1e] font-medium">
                            {date.toLocaleDateString('en-GB', {
                              weekday: 'long',
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex gap-3">
                      <Button
                        variant="outline"
                        onClick={closeCalendar}
                        className="flex-1 rounded-full border-[#d9d3c4] text-[#3d463a] h-11"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={confirmDate}
                        className="flex-1 rounded-full bg-[#2d5a3d] hover:bg-[#244a32] text-white h-11"
                      >
                        Request Availability
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="py-6 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#eef1e8] flex items-center justify-center">
                      <Check className="w-6 h-6 text-[#3d5a3b]" />
                    </div>
                    <p className="mt-5 font-serif text-2xl text-[#1f2a1e]">Request sent</p>
                    <p className="mt-2 text-sm text-[#5b6b5a]">
                      We&apos;ll confirm availability for{' '}
                      <span className="font-medium text-[#1f2a1e]">{openEstate.name}</span>{' '}
                      on{' '}
                      <span className="font-medium text-[#1f2a1e]">
                        {date?.toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>{' '}
                      within 24 hours.
                    </p>
                    <div className="mt-6 flex gap-3 w-full">
                      <Button
                        variant="outline"
                        onClick={closeCalendar}
                        className="flex-1 rounded-full border-[#d9d3c4] text-[#3d463a] h-11"
                      >
                        Close
                      </Button>
                      <Button
                        onClick={goToEnquire}
                        className="flex-1 rounded-full bg-[#2d5a3d] hover:bg-[#244a32] text-white h-11"
                      >
                        Complete Enquiry
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Estates;
