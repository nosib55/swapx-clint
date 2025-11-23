import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';

 export default function page() {
  return (
    <div>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
    </div>
  );
};

