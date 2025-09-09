"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const rituals = [
  {
    title: "Crystal Energy",
    img: "/gallery1.jpeg",
    desc: "Harness the healing vibrations of crystals during readings.",
    link: "/",
  },
  {
    title: "Candle Magic",
    img: "/gallery2.jpeg",
    desc: "Illuminate your path with sacred light and intention.",
    link: "/",
  },
  {
    title: "Tarot Spreads",
    img: "/gallery3.jpeg",
    desc: "Deep insights revealed through guided tarot rituals.",
    link: "/",
  },
  {
    title: "Sacred Space",
    img: "/gallery4.jpeg",
    desc: "A spiritual setup that nurtures energy and clarity.",
    link: "/",
  },
  {
    title: "Moon Guidance",
    img: "/gallery5.jpeg",
    desc: "Harness the lunar cycles to align your spiritual journey.",
    link: "/",
  },
  {
    title: "Mystical Flow",
    img: "/gallery6.jpeg",
    desc: "Let cosmic energy flow freely into your everyday rituals.",
    link: "/",
  },
];

export default function RitualsGallery() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          🌙 Explore the Magic Within 🌙
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          A journey through rituals and practices that enrich your readings —
          from crystals to moonlight, each carries mystical power.
        </motion.p>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rituals.map((ritual, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden mystical-shadow hover:mystical-glow transition-all duration-300 border border-border/40 hover:border-primary/30 flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full h-52">
                  <Image
                    src={ritual.img}
                    alt={ritual.title}
                    fill
                    className="object-cover w-full h-full rounded-t-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg md:text-xl text-card-foreground font-semibold mb-2">
                    {ritual.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {ritual.desc}
                  </p>

                  {/* CTA Button */}
                  <Link href={ritual.link} passHref className="mt-auto">
                    <motion.button
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-medium hover:mystical-glow hover:scale-105 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
