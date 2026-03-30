'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Daily Metro Commuter',
    text: 'The Gongura Mutton Rice is absolutely mind-blowing! Reminds me of my grandmother\'s cooking back in Rajahmundry. Best food in any metro station!',
    rating: 5,
    avatar: '🧑',
  },
  {
    name: 'Priya Reddy',
    role: 'IT Professional, HITEC City',
    text: 'I stop at Raidurg Metro every evening for their Pootharekulu. The authentic taste is unmatched. Must try for anyone who loves Godavari sweets!',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'Venkat Rao',
    role: 'Food Blogger',
    text: 'Godhavarolla Ruchulu has single-handedly brought authentic Telugu cuisine to the urban commuter. Their Karapusa and Avakai are world-class.',
    rating: 5,
    avatar: '👨',
  },
  {
    name: 'Sravani Devi',
    role: 'Student, JNTU',
    text: 'Affordable, delicious, and quick! The Avakai Rice Bowl at JNTU Metro is my go-to lunch. Love the homely taste at such pocket-friendly prices.',
    rating: 4,
    avatar: '👩‍🎓',
  },
  {
    name: 'Mohammed Khalid',
    role: 'Metro Rail Staff',
    text: 'Even we metro staff are fans! The Non-Veg Godavari Thali is a complete feast. Fresh, spicy, and full of flavour every single time.',
    rating: 5,
    avatar: '👨‍✈️',
  },
  {
    name: 'Anitha Lakshmi',
    role: 'Homemaker',
    text: 'Their pickles are exactly how we make at home! I buy the Avakai and Gongura pickle regularly. Tastes 100% authentic and chemical-free.',
    rating: 5,
    avatar: '👩‍🍳',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-saffron-600/5 rounded-full blur-[200px] pointer-events-none -translate-y-1/2" />

      <div className="section-container relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-saffron-400 font-medium text-sm uppercase tracking-[0.2em] mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            What Our Customers <span className="gradient-text">Say</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from the people who love our food!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Quote size={32} className="text-saffron-500/10 absolute top-4 right-4" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-500/20 to-spice-500/20 flex items-center justify-center text-2xl border border-white/5">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{t.name}</h4>
                  <span className="text-xs text-white/30">{t.role}</span>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < t.rating ? 'text-saffron-400 fill-saffron-400' : 'text-white/10'}
                  />
                ))}
              </div>

              <p className="text-sm text-white/50 leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
