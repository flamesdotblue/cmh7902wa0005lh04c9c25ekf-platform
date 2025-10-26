import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1545153996-5a2222f223b8?q=80&w=2070&auto=format&fit=crop"
          alt="Munnar tea plantations"
          className="h-[70vh] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/60 to-neutral-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star className="h-3.5 w-3.5 text-yellow-300" />
            Award-winning hill retreat in Munnar
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Wake up to emerald valleys and whispering clouds
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
            Kuriniji Resorts blends luxury and nature—nestled amidst Munnar's rolling tea gardens with panoramic views, curated experiences, and warm Kerala hospitality.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-neutral-900 hover:shadow-[0_0_0_6px_rgba(20,184,166,0.25)] transition-shadow"
            >
              Check Availability
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              Explore Highlights
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-white/80">
            <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Bison Valley Rd, Munnar</div>
            <div className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-yellow-300" /><span>4.9/5</span> <span className="text-white/50">· 1,200+ reviews</span></div>
          </div>
        </motion.div>
      </div>

      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'Panoramic Valley Views',
              img: 'https://images.unsplash.com/photo-1520962918287-7448c2878f65?q=80&w=2070&auto=format&fit=crop',
            },
            {
              title: 'Curated Local Experiences',
              img: 'https://images.unsplash.com/photo-1586861203929-0b3bfbf66459?q=80&w=2070&auto=format&fit=crop',
            },
            {
              title: 'Boutique Luxury',
              img: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1974&auto=format&fit=crop',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * idx }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur group"
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-semibold drop-shadow-md">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
