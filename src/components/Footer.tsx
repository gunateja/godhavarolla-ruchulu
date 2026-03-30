'use client';

import { MapPin, Phone, Mail, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-900 border-t border-primary-800 text-white pt-16">
      {/* CTA Banner */}
      <div className="section-container relative z-10 -mt-24 mb-16 px-4">
        <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden bg-gradient-to-r from-secondary-400 to-secondary-500 shadow-xl">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.8) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.6) 0%, transparent 60%)`,
            }}
          />
          <div className="relative text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-3">
              Craving Authentic Godavari Flavours? 🍛
            </h3>
            <p className="text-primary-800/80 mb-6 font-medium">
              Made with traditional recipes. Delivered fresh to your doorstep!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/shop"
                className="px-8 py-3.5 rounded-xl bg-primary-800 text-white font-bold hover:bg-primary-900 transition-colors shadow-lg"
              >
                Order Now
              </a>
              <a
                href="https://wa.me/919876543210"
                className="px-8 py-3.5 rounded-xl border-2 border-primary-800/20 text-primary-900 font-bold hover:bg-primary-800/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary-500 flex items-center justify-center text-primary-900 text-lg font-bold">
                గ
              </div>
              <div>
                <h4 className="font-heading font-bold text-secondary-400 text-lg">Godhavarolla Ruchulu</h4>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Bringing the authentic flavours, homemade pickles, and traditional sweets of the Godavari region right to your doorstep.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-secondary-400 hover:bg-white/10 transition-all font-bold text-sm"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Shop All', href: '/shop' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-secondary-400 transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-heading">
              Policies
            </h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Shipping Policy'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-secondary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-heading">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-secondary-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary-500">
                  <Phone size={14} />
                </div>
                +91 98765 43210
              </a>
              <a
                href="mailto:hello@godhavarolla.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-secondary-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary-500">
                  <Mail size={14} />
                </div>
                hello@godhavarolla.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary-500 shrink-0">
                  <MapPin size={14} />
                </div>
                <span className="mt-1">
                  Godavari Districts,<br />
                  Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} Godhavarolla Ruchulu. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1.5 font-medium">
            Made with <Heart size={14} className="text-primary-400 fill-primary-400" /> in AP
          </p>
          <p className="text-xs text-white/40">
            FSSAI Lic. No: 12345678901234
          </p>
        </div>
      </div>
    </footer>
  );
}
