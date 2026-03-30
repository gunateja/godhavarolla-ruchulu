'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, MapPin, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dispatch, itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Locations', href: '#locations' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-gradient-to-r from-saffron-900/80 to-spice-900/80 text-white/80 text-sm py-2">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-saffron-400" />
              Multiple locations across Hyderabad Metro
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-saffron-400" />
              +91 98765 43210
            </span>
          </div>
          <div className="text-saffron-300 font-medium">
            🎉 Free delivery on orders above ₹500!
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        className={`fixed top-0 md:top-[36px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-2xl shadow-black/20 md:top-0'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-saffron-500 to-spice-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-saffron-500/20 group-hover:shadow-saffron-500/40 transition-shadow">
              గ
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-heading tracking-wide gradient-text">
                Godhavarolla Ruchulu
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 -mt-0.5">
                Authentic Telugu Cuisine
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Order Now CTA */}
            <a
              href="#menu"
              className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-sm !rounded-xl"
            >
              <span>Order Now</span>
            </a>

            {/* Cart button */}
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative p-2.5 rounded-xl glass hover:bg-white/10 transition-all duration-300"
              aria-label="Shopping cart"
              id="cart-button"
            >
              <ShoppingBag size={20} className="text-white/80" />
              {itemCount > 0 && (
                <motion.div
                  className="cart-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {itemCount}
                </motion.div>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl glass hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-[72px] left-4 right-4 glass rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a
                  href="#menu"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 btn-primary text-center !rounded-xl"
                >
                  <span>Order Now</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
