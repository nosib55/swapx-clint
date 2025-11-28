import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import HomeProducts from './components/HomeProducts';
import TwoImageFadeIn from './img-fade/page';

 export default function page() {
  return (
    <div>
      <Hero></Hero>
      <HomeProducts></HomeProducts>
      <HowItWorks></HowItWorks>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
      <TwoImageFadeIn></TwoImageFadeIn>
    </div>
  );
};

