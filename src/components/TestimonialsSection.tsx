'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const items = container.querySelectorAll('.testimonial-card');
    if (items[index]) {
      items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveIndex(index);
    }
  }, []);

  const scrollNext = useCallback(() => {
    const next = (activeIndex + 1) % testimonials.length;
    scrollToIndex(next);
  }, [activeIndex, scrollToIndex]);

  const scrollPrev = useCallback(() => {
    const prev = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    scrollToIndex(prev);
  }, [activeIndex, scrollToIndex]);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(scrollNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, scrollNext]);

  // Track scroll position for dot indicators
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.scrollWidth / testimonials.length;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, testimonials.length - 1));
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary-50 relative overflow-hidden section-padding">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-200 rounded-full blur-[120px] opacity-30 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100 rounded-full blur-[100px] opacity-20 translate-y-1/2" />
      
      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            ★ Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">
            Loved by <span className="text-gradient-warm">Thousands</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto font-medium text-sm md:text-base">
            Don&apos;t just take our word for it — hear from the people who love our authentic food!
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows (desktop) */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-gray-600 hover:text-primary-800 hover:border-primary-200 hover:shadow-xl transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-gray-600 hover:text-primary-800 hover:border-primary-200 hover:shadow-xl transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="carousel-scroll px-1 md:px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card carousel-item w-[85vw] sm:w-[400px] md:w-[420px]"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 h-full border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-400 relative group">
                  {/* Quote icon */}
                  <Quote size={48} className="text-secondary-100 absolute top-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center text-3xl shadow-sm border border-secondary-200/50">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg font-heading leading-tight">{t.name}</h4>
                      <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">{t.role}</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className={j < t.rating ? 'text-secondary-500 fill-secondary-500' : 'text-gray-200'}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-gray-600 leading-relaxed font-medium italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex 
                    ? 'bg-primary-700 w-8' 
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
