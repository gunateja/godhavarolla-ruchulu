'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Categories', href: '/#categories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md py-4'
            : 'bg-secondary-50 py-5 md:py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="section-container px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group z-50">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-800 flex items-center justify-center text-secondary-500 font-heading font-extrabold text-xl md:text-2xl shadow-sm transition-transform group-hover:scale-105`}>
              గ
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold font-heading text-primary-800 tracking-tight leading-none group-hover:text-primary-700 transition-colors">
                Godhavarolla
              </span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-secondary-600 leading-none mt-1">
                Authentic Ruchulu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-primary-800 hover:bg-primary-50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group cursor-pointer p-2 text-gray-500 hover:text-primary-800 transition-colors">
              <Search size={22} />
            </div>

            <Link href="/cart" className="relative p-2.5 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-primary-200 hover:bg-primary-50 hover:text-primary-800 transition-all group flex items-center gap-2">
              <ShoppingBag size={20} className="text-gray-700 group-hover:text-primary-800 transition-colors" />
              <span className="font-semibold text-sm text-gray-700 group-hover:text-primary-800">
                Cart
              </span>
              {itemCount > 0 && (
                <motion.div
                  className="absolute -top-2 -right-2 bg-secondary-500 text-primary-900 font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {itemCount}
                </motion.div>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-800 focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 border-b border-gray-100 text-xl font-heading font-semibold text-gray-800 hover:text-primary-800"
                  >
                    {link.label}
                    <ChevronRight size={20} className="text-gray-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-auto mb-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100">
                <h3 className="font-heading font-bold text-primary-800 mb-2">Need help?</h3>
                <p className="text-sm text-gray-600 mb-4">Contact us directly on WhatsApp for bulk orders or queries.</p>
                <a href="https://wa.me/919876543210" className="btn-secondary w-full">
                  Chat with us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
