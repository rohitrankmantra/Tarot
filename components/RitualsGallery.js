"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const rituals = [
  {
    title: "Crystal Energy",
    img: "/gallery1.jpeg",
    desc: "Harness the healing vibrations of crystals during readings.",
  },
  {
    title: "Candle Magic",
    img: "/gallery2.jpeg",
    desc: "Illuminate your path with sacred light and intention.",
  },
  {
    title: "Tarot Spreads",
    img: "/gallery3.jpeg",
    desc: "Deep insights revealed through guided tarot rituals.",
  },
  {
    title: "Sacred Space",
    img: "/gallery4.jpeg",
    desc: "A spiritual setup that nurtures energy and clarity.",
  },
  {
    title: "Sacred Space",
    img: "/gallery5.jpeg",
    desc: "A spiritual setup that nurtures energy and clarity.",
  },
  {
    title: "Sacred Space",
    img: "/gallery6.jpeg",
    desc: "A spiritual setup that nurtures energy and clarity.",
  },
];

export default function RitualsGallery() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          ✨ A Glimpse Into the Magic ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the warmth and mystical energy behind every reading —
          crystals, candles, and sacred rituals that guide your journey.
        </motion.p>

        {/* Rituals Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rituals.map((ritual, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              {/* Image with overlay */}
              <div className="relative h-60 w-full">
                <Image
                  src={ritual.img}
                  alt={ritual.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition duration-500" />
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                  {ritual.title}
                </h3>
                <p className="text-gray-200 text-sm drop-shadow-md">
                  {ritual.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating sparkles background */}
      <div className="absolute inset-0 bg-[url('/celestial-tarot-cards-with-golden-mystical.png')] bg-cover bg-center opacity-5" />
    </section>
  );
}
