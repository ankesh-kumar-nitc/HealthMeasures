import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Purpose from '../components/Purpose';
import Activities from '../components/Activities';
import Estates from '../components/Estates';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import GoogleReviews from '../components/GoogleReviews';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const Home = () => {
  return (
    <div className="bg-[#f7f4ed] text-[#1f2a1e] font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Purpose />
        <Activities />
        <Estates />
        <Testimonials />
        <Contact />
        <GoogleReviews />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;
