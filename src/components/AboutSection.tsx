'use client';

import { motion } from 'framer-motion';
import { Heart, Award, Utensils, Users } from 'lucide-react';

const values = [
  {
    icon: <Heart className="text-spice-400" size={28} />,
    title: 'Made with Love',
    desc: 'Every dish is prepared with the same passion and care as a home-cooked meal from the Godavari region.',
  },
  {
    icon: <Award className="text-saffron-400" size={28} />,
    title: 'Authentic Recipes',
    desc: 'Our recipes have been passed down through generations, preserving the true essence of Telugu cuisine.',
  },
  {
    icon: <Utensils className="text-leaf-400" size={28} />,
    title: 'Fresh Ingredients',
    desc: 'We source the finest spices, cold-pressed oils and seasonal produce to ensure quality in every bite.',
  },
  {
    icon: <Users className="text-saffron-300" size={28} />,
    title: 'Community First',
    desc: 'From metro commuters to food lovers, we serve everyone with warmth and a smile — just like family.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-saffron-600/5 rounded-full blur-[200px] pointer-events-none -translate-y-1/2" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-saffron-400 font-medium text-sm uppercase tracking-[0.2em] mb-3 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              From the Heart of{' '}
              <span className="gradient-text">Godavari</span>
              <br />
              to Your Plate
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                <span className="text-white font-medium">Godhavarolla Ruchulu</span> was born 
                from a simple dream — to bring the authentic flavours of the Godavari region 
                to the bustling streets of Hyderabad. What started as a small stall has now 
                become a beloved stop for thousands of daily metro commuters.
              </p>
              <p>
                Our name literally translates to{' '}
                <span className="text-saffron-400 italic">&quot;Tastes of Godavari&quot;</span> — 
                and we take that promise seriously. Every karapusa is hand-twisted, 
                every pickle is sun-ripened, and every rice bowl carries the warmth of 
                our grandmothers&apos; kitchens.
              </p>
              <p>
                We believe good food doesn&apos;t need a fine-dining setting. Whether you&apos;re 
                rushing to work or heading home after a long day, our stalls at the metro 
                stations are your little oasis of <span className="text-saffron-400 font-medium">comfort and taste</span>.
              </p>
            </div>

            {/* Telugu quote */}
            <div className="mt-8 p-6 glass-warm rounded-2xl">
              <p className="text-2xl font-heading text-saffron-300 italic mb-2">
                &quot;అమ్మమ్మ చేతి రుచి, మీ మెట్రో స్టేషన్ లో&quot;
              </p>
              <p className="text-sm text-white/40">
                — Grandma&apos;s taste, at your metro station
              </p>
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/5">
                  {val.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
