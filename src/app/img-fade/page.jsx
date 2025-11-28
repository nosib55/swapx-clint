"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TwoImageFadeIn() {
  const router = useRouter();

  return (
    <div className="container mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-16">

      {/* ---------- TEXT SECTION ---------- */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 space-y-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Best Selling Smart Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-600 text-base sm:text-lg md:text-xl"
        >
          Discover a premium range of smart gadgets with cutting-edge
          technology and elegant design crafted perfectly for your lifestyle.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-3 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:opacity-90 transition"
          onClick={() => router.push("/products")}
        >
          Shop Now
        </motion.button>
      </motion.div>

      {/* ---------- IMAGE SECTION ---------- */}
      <div className="relative w-full md:w-[450px] h-[350px] sm:h-[420px] md:h-[480px] flex items-center justify-center">

        {/* Back Image */}
        <motion.div
          initial={{ opacity: 0, x: -10, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
          className="absolute top-0 left-0 w-[60%] sm:w-[65%] md:w-[70%]"
        >
          <Image
            src="/watch.jpg"
            alt="Smart Watch"
            width={600}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Front Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-2 right-2 w-[45%] sm:w-[50%] md:w-[55%]"
        >
          <Image
            src="/headphone.jpg"
            alt="Headphone"
            width={300}
            height={300}
            className="rounded-xl shadow-2xl border-4 border-white w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
