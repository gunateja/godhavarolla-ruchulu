'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Star, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px] md:pt-[108px]"
    >
      {/* Background gradient spheres */}
      <div className="hero-sphere w-[600px] h-[600px] bg-saffron-600 top-[-200px] right-[-150px]" />
      <div className="hero-sphere w-[500px] h-[500px] bg-spice-700 bottom-[-200px] left-[-150px]" />
      <div className="hero-sphere w-[300px] h-[300px] bg-saffron-800 top-[40%] left-[30%]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-warm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-leaf-400 animate-pulse" />
          <span className="text-sm font-medium text-saffron-300">
            Now serving at 4 Metro Stations in Hyderabad
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-white">Taste the</span>
          <br />
          <span className="gradient-text">Godavari</span>
          <br />
          <span className="text-white/90 italic font-light text-[0.7em]">
            at every stop
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Authentic Telugu cuisine from the banks of River Godavari, 
          brought to your nearest metro station. Traditional recipes, 
          handcrafted with love — just like{' '}
          <span className="text-saffron-400 font-medium">ammamma</span> used to make.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href="#menu" className="btn-primary text-lg !px-10 !py-4 !rounded-2xl" id="hero-order-btn">
            <span className="flex items-center gap-2">
              🍛 Explore Menu
            </span>
          </a>
          <a href="#locations" className="btn-secondary text-lg !px-10 !py-4 !rounded-2xl" id="hero-locations-btn">
            📍 Find a Stall
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            { icon: <Star className="text-saffron-400" size={20} />, value: '4.8', label: 'Google Rating' },
            { icon: <Clock className="text-saffron-400" size={20} />, value: '15 min', label: 'Avg. Prep Time' },
            { icon: <MapPin className="text-saffron-400" size={20} />, value: '4+', label: 'Metro Locations' },
            { icon: <span className="text-xl">🍽️</span>, value: '50K+', label: 'Happy Customers' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                {stat.icon}
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <span className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#menu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.a>

      {/* Decorative Telugu text */}
      <div className="absolute bottom-20 right-8 text-[120px] md:text-[200px] font-heading text-white/[0.02] select-none pointer-events-none leading-none">
        రుచులు
      </div>
    </section>
  );
}
