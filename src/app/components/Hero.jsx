"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    {
      image: "/hero1.png",
      title: "Premium Electronics for Every Lifestyle",
      subtitle: "Top-quality gadgets sourced from trusted sellers.",
    },
    {
      image: "/hero2.png",
      title: "Smart Deals. Smart Choices.",
      subtitle: "Get exclusive offers on high-demand products.",
    },
    {
      image: "/hero3.png",
      title: "Upgrade Your Everyday Essentials",
      subtitle: "Discover hand-picked items at the best prices.",
    },
  ];

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 3500 }}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              
              {/* Background Image */}
              <img
                src={slide.image}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Left Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

              {/* Text Content (Left Side) */}
              <div className="relative z-10 h-full flex items-center px-8 md:px-20 text-left">
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-2xl text-gray-200 mt-4">
                    {slide.subtitle}
                  </p>

                  <a
                    href="/products"
                    className="inline-block mt-6 px-10 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
                  >
                    Buy Now →
                  </a>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
