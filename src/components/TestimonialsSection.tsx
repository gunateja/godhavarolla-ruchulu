'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Regular Customer',
    text: 'The Gongura Pickle is absolutely mind-blowing! Reminds me of my grandmother\'s cooking back in Rajahmundry. Best authentic pickles online!',
    rating: 5,
    avatar: '🧑',
  },
  {
    name: 'Priya Reddy',
    role: 'IT Professional, Hyderabad',
    text: 'I order their Pootharekulu for every festival. The authentic taste is unmatched. Must try for anyone who loves Godavari sweets delivered fresh!',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'Venkat Rao',
    role: 'Food Blogger',
    text: 'Godhavarolla Ruchulu has single-handedly brought authentic Telugu cuisine straight to our doorsteps. Their Karapusa and Avakai are world-class.',
    rating: 5,
    avatar: '👨',
  },
  {
    name: 'Sravani Devi',
    role: 'Student',
    text: 'Affordable, delicious, and quick delivery! The snacks are my go-to for evening cravings. Love the homely taste at such pocket-friendly prices.',
    rating: 4,
    avatar: '👩‍🎓',
  },
  {
    name: 'Mohammed Khalid',
    role: 'Business Owner',
    text: 'We order their sweets in bulk for corporate gifting. They are always fresh, beautifully packed, and full of traditional flavor every single time.',
    rating: 5,
    avatar: '👨‍💼',
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
    <section className="py-20 bg-secondary-50 relative overflow-hidden section-padding border-b border-gray-200">
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary-600 font-bold text-sm uppercase tracking-widest mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto font-medium">
            Don&apos;t just take our word for it — hear from the people who love our authentic food!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="premium-card bg-white p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Quote size={40} className="text-secondary-200 absolute top-4 right-4" />

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-secondary-100 flex items-center justify-center text-3xl shadow-sm border border-secondary-200">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg font-heading">{t.name}</h4>
                  <span className="text-xs font-semibold text-primary-800 uppercase tracking-wide">{t.role}</span>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={j < t.rating ? 'text-secondary-500 fill-secondary-500' : 'text-gray-200'}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed font-medium">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
