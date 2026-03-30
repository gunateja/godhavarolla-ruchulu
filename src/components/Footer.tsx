'use client';

import { MapPin, Phone, Mail, ArrowUpRight, Heart, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#3b0909] border-t border-primary-900 text-white mt-24">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-400 via-secondary-500 to-primary-600" />
      
      {/* CTA Banner */}
      <div className="section-container relative z-20 px-4 -mt-16 sm:-mt-20 flex justify-center mb-12">
        <div className="w-full max-w-4xl p-8 sm:p-10 rounded-3xl overflow-hidden bg-gradient-to-r from-secondary-400 to-secondary-500 shadow-2xl relative group">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.8) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.6) 0%, transparent 60%)`,
            }}
          />
          <div className="relative text-center mx-auto flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-primary-900 mb-3 drop-shadow-sm">
              Craving Authentic Godavari Flavours? 🍛
            </h3>
            <p className="text-primary-900/80 mb-6 font-semibold sm:text-lg">
              Made with traditional recipes. Delivered fresh to your doorstep!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-900 text-white font-bold hover:bg-primary-950 transition-all shadow-xl hover:-translate-y-1 hover:shadow-primary-900/30 active:translate-y-0"
              >
                Order Now
              </Link>
              <a
                href="https://wa.me/919876543210"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-primary-900/20 bg-white/10 backdrop-blur-sm text-primary-900 font-bold hover:bg-white/20 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container px-4 sm:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center text-primary-900 text-2xl font-extrabold font-heading shadow-md shadow-secondary-500/20">
                గ
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold font-heading text-secondary-400 tracking-tight leading-none group-hover:text-primary-800 transition-colors">
                  Godhavarolla
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 leading-none mt-1">
                  Authentic Ruchulu
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6 font-medium">
              Bringing the authentic flavours, homemade pickles, and traditional sweets of the Godavari region right to your doorstep.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-secondary-400 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 transition-all font-bold text-sm shadow-sm"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest font-heading opacity-90">
              Menu Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Shop Pickles', href: '/shop?category=pickles' },
                { name: 'Traditional Sweets', href: '/shop?category=sweets' },
                { name: 'Crispy Snacks', href: '/shop?category=snacks' },
                { name: 'All Products', href: '/shop' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-secondary-400 transition-colors flex items-center gap-2 group font-medium"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-secondary-400"
                    />
                    <span className="-translate-x-3 group-hover:translate-x-0 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest font-heading opacity-90">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Privacy Policy', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-secondary-400 transition-colors flex items-center gap-2 group font-medium"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-secondary-400"
                    />
                    <span className="-translate-x-3 group-hover:translate-x-0 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest font-heading opacity-90">
              Get in Touch
            </h4>
            <div className="space-y-5">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-4 text-sm text-white/70 hover:text-secondary-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-secondary-400 shrink-0 group-hover:bg-white/10 transition-colors">
                  <Phone size={16} />
                </div>
                <div className="mt-1 flex flex-col gap-0.5">
                  <span className="font-semibold">+91 98765 43210</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Mon-Sun, 9am - 9pm</span>
                </div>
              </a>
              <a
                href="mailto:hello@godhavarolla.com"
                className="flex items-center gap-4 text-sm text-white/70 hover:text-secondary-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-secondary-400 shrink-0 group-hover:bg-white/10 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="font-semibold mt-1">hello@godhavarolla.com</span>
              </a>
              <div className="flex items-start gap-4 text-sm text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-secondary-400 shrink-0 group-hover:bg-white/10 transition-colors">
                  <MapPin size={16} />
                </div>
                <div className="mt-1 flex flex-col gap-1">
                  <span className="font-semibold leading-relaxed">
                    Plot No 14, Godavari Foods Hub,<br />
                    Kukatpally, Hyderabad,<br />
                    Telangana 500072
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-medium order-3 md:order-1">
            © {currentYear} Godhavarolla Ruchulu. All rights reserved.
          </p>
          <p className="text-xs text-white/60 flex items-center gap-1.5 font-semibold order-1 md:order-2 bg-white/5 px-4 py-1.5 rounded-full">
            Made with <Heart size={14} className="text-primary-400 fill-primary-400" /> in AP
          </p>
          <p className="text-[11px] text-white/30 font-medium order-2 md:order-3">
            FSSAI Lic. No: 12345678901234
          </p>
        </div>
      </div>
    </footer>
  );
}
