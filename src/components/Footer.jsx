import React from 'react';
import { Mountain, MapPin, Phone, Mail, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 text-neutral-900">
                <Mountain className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-semibold tracking-wide">Kuriniji Resorts</p>
                <p className="text-[11px] uppercase text-white/60 tracking-widest">Munnar</p>
              </div>
            </div>
            <p className="mt-4 text-white/80 max-w-xl">A serene hillside hideaway where tea-scented breezes meet warm hospitality. Discover the soul of Munnar with us.</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Star className="h-3.5 w-3.5 text-yellow-300" /> Rated 4.9/5 by happy travellers
            </div>
          </div>

          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /><span>Bison Valley Rd, Munnar, Kerala 685612</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:stay@kurinijiresorts.com" className="hover:text-white">stay@kurinijiresorts.com</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Resort</p>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#highlights" className="hover:text-white">Highlights</a></li>
              <li><a href="#contact" className="hover:text-white">Book Now</a></li>
              <li><a href="#" className="hover:text-white">Privacy & Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Kuriniji Resorts, Munnar. All rights reserved.</p>
          <p>Crafted with love for the hills.</p>
        </div>
      </div>
    </footer>
  );
}
