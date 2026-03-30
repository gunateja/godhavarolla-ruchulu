'use client';

import { MapPin, Phone, Mail, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      {/* CTA Banner */}
      <div className="section-container">
        <div className="relative -mt-1 mb-16 p-8 md:p-12 rounded-2xl overflow-hidden bg-gradient-to-r from-saffron-700 to-spice-700">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
            }}
          />
          <div className="relative text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              Craving Godavari Flavours? 🍛
            </h3>
            <p className="text-white/70 mb-6">
              Visit your nearest metro station stall or order online for quick pickup!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#menu"
                className="px-8 py-3.5 rounded-xl bg-white text-earth-800 font-bold hover:bg-white/90 transition-colors shadow-lg"
              >
                Order Now
              </a>
              <a
                href="#locations"
                className="px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Find a Stall
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-container pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-spice-600 flex items-center justify-center text-lg font-bold">
                గ
              </div>
              <div>
                <h4 className="font-heading font-bold gradient-text">Godhavarolla Ruchulu</h4>
                <span className="text-[10px] text-white/30 uppercase tracking-wider">
                  Authentic Telugu Cuisine
                </span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Bringing the authentic flavours of the Godavari region to Hyderabad&apos;s metro stations since 2020.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-saffron-400 hover:bg-white/10 transition-all text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {['Home', 'Menu', 'Locations', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-sm text-white/40 hover:text-saffron-400 transition-colors flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
              Policies
            </h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Allergen Info', 'FSSAI License'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-saffron-400 transition-colors"
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
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-saffron-400 transition-colors"
              >
                <Phone size={14} /> +91 98765 43210
              </a>
              <a
                href="mailto:hello@godhavarolla.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-saffron-400 transition-colors"
              >
                <Mail size={14} /> hello@godhavarolla.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/40">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  Multiple Locations,<br />
                  Hyderabad Metro Rail,<br />
                  Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {currentYear} Godhavarolla Ruchulu. All rights reserved.
          </p>
          <p className="text-xs text-white/25 flex items-center gap-1">
            Made with <Heart size={12} className="text-spice-400" /> in Hyderabad
          </p>
          <p className="text-xs text-white/25">
            FSSAI Lic. No: 12345678901234
          </p>
        </div>
      </div>
    </footer>
  );
}
