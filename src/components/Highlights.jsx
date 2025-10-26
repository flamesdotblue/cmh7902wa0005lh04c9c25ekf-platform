import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Car, Leaf, Sun, Snowflake, Star } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-white/10">
        <Icon className="h-5 w-5 text-teal-300" />
      </span>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  </div>
);

const RoomCard = ({ title, price, img, perks = [] }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
    <div className="relative">
      <img src={img} alt={title} className="h-56 w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
      <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-neutral-900/70 px-3 py-1 text-xs text-white/90 border border-white/10">
        <Star className="h-3.5 w-3.5 text-yellow-300" /> Guest Favorite
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-sm text-white/80"><span className="text-teal-300 font-semibold">₹{price}</span> <span className="text-white/60">/ night</span></p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {perks.map((p) => (
          <span key={p} className="text-xs text-white/70 rounded-full border border-white/10 bg-white/5 px-2 py-1">{p}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <a href="#contact" className="rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-neutral-900">Book this room</a>
        <button className="text-sm text-white/80 hover:text-white">View details</button>
      </div>
    </div>
  </div>
);

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Highlights of your stay</h2>
          <p className="mt-3 text-white/80">Thoughtfully designed comforts with a deep respect for Munnar's pristine ecology. Slow down, breathe, and savour the mountain air.</p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature icon={Wifi} title="High-speed Wi‑Fi" desc="Seamless connectivity across the property." />
          <Feature icon={Coffee} title="Tea & Coffee Bar" desc="Single-origin pours and plantation tastings." />
          <Feature icon={Car} title="Valet Parking" desc="Complimentary secure parking on site." />
          <Feature icon={Leaf} title="Eco Experiences" desc="Guided trails, birding, and tea garden walks." />
          <Feature icon={Sun} title="Sunrise Deck" desc="Golden hour vistas over misty valleys." />
          <Feature icon={Snowflake} title="Climate Control" desc="All rooms with modern cooling & heating." />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Featured rooms</h3>
              <p className="text-white/80">Handpicked spaces with sweeping views and warm wooden interiors.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">See all rooms</a>
          </div>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RoomCard
              title="Valley View Deluxe"
              price="7,900"
              img="https://images.unsplash.com/photo-1551776235-840c5b0b1a6b?q=80&w=1974&auto=format&fit=crop"
              perks={["Private balcony", "Breakfast included", "Tea tasting"]}
            />
            <RoomCard
              title="Garden Suite"
              price="9,500"
              img="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
              perks={["Cozy lounge", "Butler on call", "Forest trail access"]}
            />
            <RoomCard
              title="Horizon Pool Villa"
              price="18,500"
              img="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1974&auto=format&fit=crop"
              perks={["Private plunge pool", "Valley panorama", "In-villa dining"]}
            />
          </div>
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-teal-500/10 to-cyan-500/10 p-6 sm:p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Plan your escape</h3>
              <p className="mt-2 text-white/80">Share your dates and preferences—our team will curate the perfect Munnar itinerary for you.</p>
              <ul className="mt-4 text-sm text-white/80 list-disc list-inside">
                <li>Early check-in/late check-out on request</li>
                <li>Custom experiences: treks, tea tastings, safaris</li>
                <li>Best rate guaranteed when booking direct</li>
              </ul>
            </div>
            <form className="grid grid-cols-1 gap-3">
              <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Full name" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Email" type="email" />
                <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Phone" type="tel" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Check-in" type="date" />
                <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50" placeholder="Check-out" type="date" />
              </div>
              <textarea className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-500/50" rows="3" placeholder="Your message (guests, room type, special requests)"></textarea>
              <button type="button" className="mt-2 inline-flex justify-center rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-500 px-5 py-2 font-semibold text-neutral-900">Request a callback</button>
              <p className="text-xs text-white/60">By continuing you agree to be contacted by Kuriniji Resorts regarding your enquiry.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
