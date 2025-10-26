import React, { useState } from 'react';
import { Mountain, Phone, Mail, Menu, X } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 text-neutral-900">
              <Mountain className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="font-semibold tracking-wide">Kuriniji Resorts</p>
              <p className="text-[11px] uppercase text-white/60 tracking-widest">Munnar</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#highlights">Highlights</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-neutral-900 hover:shadow-[0_0_0_3px_rgba(20,184,166,0.35)] transition-shadow"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-2 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col">
              <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
              <NavLink href="#highlights" onClick={() => setOpen(false)}>Highlights</NavLink>
              <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-neutral-900"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:block border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-end gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:stay@kurinijiresorts.com" className="hover:text-white">stay@kurinijiresorts.com</a></div>
        </div>
      </div>
    </header>
  );
}
