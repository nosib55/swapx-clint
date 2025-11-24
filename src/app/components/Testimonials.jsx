"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      name: "Monowar Hossain",
      text: "SWAP-X made selling my old gadgets super fast and easy.",
      avatar: "https://i.ibb.co.com/Kxk9npws/476966714-1205433047859633-5515135034542071864-n.jpg",
    },
    {
      name: "Sozib Ahmed",
      text: "Perfect place to find used electronics at great prices.",
      avatar: "https://i.ibb.co.com/yGwQwSQ/487864940-576365812126246-7892461841355120818-n.jpg",
    },
    {
      name: "Joy Das",
      text: "Smooth experience browsing listings. Very clean UI.",
      avatar: "https://i.ibb.co.com/9kgjdFxS/486775652-674392678308605-2891941053523452899-n.jpg",
    },
    {
      name: "John Adams",
      text: "Sold 3 items in 2 days. Zero commission is amazing!",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "Maria Lopez",
      text: "I swapped my old phone for a laptop! Great community.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Kevin Brown",
      text: "Safe and verified buyers. I trust SWAP-X completely.",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-blue-600">
        What People Say
      </h2>

      <div className="max-w-4xl mx-auto mt-14">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFlip, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={item.avatar}
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                  alt={item.name}
                />
              </div>

              <p className="text-gray-700 mt-6 italic">
                "{item.text}"
              </p>

              <h3 className="mt-4 font-bold text-gray-900">
                {item.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
