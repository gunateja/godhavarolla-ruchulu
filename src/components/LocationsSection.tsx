'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, Train } from 'lucide-react';
import { locations } from '@/data/menu';

export default function LocationsSection() {
  return (
    <section id="locations" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-spice-700/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-saffron-400 font-medium text-sm uppercase tracking-[0.2em] mb-3 block">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our <span className="gradient-text">Locations</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Conveniently located inside Hyderabad Metro stations. 
            Grab authentic Telugu food on your daily commute!
          </p>
        </motion.div>

        {/* Metro line illustration */}
        <motion.div
          className="hidden lg:flex items-center justify-center mb-14 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center w-full max-w-4xl">
            {locations.map((loc, i) => (
              <div key={loc.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center relative group">
                  <motion.div
                    className="w-5 h-5 rounded-full bg-gradient-to-br from-saffron-400 to-spice-500 border-4 border-[#0a0a0a] shadow-lg shadow-saffron-500/30 z-10 cursor-pointer group-hover:scale-125 transition-transform"
                    whileHover={{ scale: 1.3 }}
                  />
                  <span className="text-xs text-white/50 mt-2 font-medium whitespace-nowrap group-hover:text-saffron-400 transition-colors">
                    {loc.metro}
                  </span>
                </div>
                {i < locations.length - 1 && (
                  <div className="flex-1 h-1 bg-gradient-to-r from-saffron-600/40 to-spice-600/40 mx-2 rounded-full" />
                )}
              </div>
            ))}
          </div>
          <Train
            size={20}
            className="absolute left-0 text-saffron-400/30 animate-pulse"
          />
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              className="glass-card rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Map placeholder */}
              <div className="h-44 bg-gradient-to-br from-earth-800 to-earth-900 relative overflow-hidden">
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,193,7,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,193,7,0.2) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron-500/20 to-spice-500/20 flex items-center justify-center backdrop-blur-sm border border-saffron-500/20">
                      <Train size={28} className="text-saffron-400" />
                    </div>
                    <span className="text-lg font-bold text-white/80">{loc.metro} Metro</span>
                  </div>
                </div>
                {/* Active indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-leaf-500/20 border border-leaf-500/30 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-leaf-400 animate-pulse" />
                  <span className="text-xs font-medium text-leaf-300">Open Now</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {loc.name}
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 text-sm text-white/50">
                    <MapPin size={16} className="text-saffron-400 mt-0.5 shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/50">
                    <Clock size={16} className="text-saffron-400 shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/50">
                    <Navigation size={16} className="text-saffron-400 shrink-0" />
                    <span>Stall No: {loc.stallNo}</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-5">
                  <a
                    href={`https://maps.google.com/?q=${loc.lat},${loc.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary !py-2.5 !rounded-xl text-center !text-sm"
                    id={`directions-${loc.id}`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Navigation size={14} />
                      Get Directions
                    </span>
                  </a>
                  <a
                    href="#menu"
                    className="flex-1 btn-secondary !py-2.5 !rounded-xl text-center !text-sm"
                  >
                    Order Here
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
