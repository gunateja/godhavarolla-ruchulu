'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-nav shadow-lg py-3'
            : 'bg-white/80 backdrop-blur-sm py-4 md:py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-container px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group z-50">
            <motion.div 
              className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center text-secondary-400 font-heading font-extrabold text-xl shadow-lg shadow-primary-900/20"
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              గ
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold font-heading text-gray-900 tracking-tight leading-none group-hover:text-primary-800 transition-colors">
                Godhavarolla
              </span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-primary-600 leading-none mt-0.5">
                Authentic Ruchulu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'text-primary-800 bg-primary-50' 
                      : 'text-gray-600 hover:text-primary-800 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary-700 rounded-full"
                      layoutId="nav-indicator"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/cart" 
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:bg-primary-50 hover:shadow-md transition-all duration-300 group"
            >
              <ShoppingBag size={18} className="text-gray-600 group-hover:text-primary-800 transition-colors" />
              <span className="font-semibold text-sm text-gray-700 group-hover:text-primary-800">
                Cart
              </span>
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    className="bg-primary-700 text-white font-bold text-[10px] min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center shadow-md"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-800 focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm z-40 bg-white md:hidden pt-24 px-6 flex flex-col shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
            >
              <div className="flex flex-col gap-1 mt-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between py-4 px-4 rounded-xl text-lg font-heading font-semibold transition-all ${
                          isActive 
                            ? 'text-primary-800 bg-primary-50' 
                            : 'text-gray-700 hover:text-primary-800 hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                        <ChevronRight size={18} className="text-gray-300" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="mt-auto mb-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl border border-secondary-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-secondary-600" />
                    <h3 className="font-heading font-bold text-primary-800">Need help?</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Contact us directly on WhatsApp for orders or queries.</p>
                  <a href="https://wa.me/919876543210" className="btn-secondary w-full !text-sm">
                    💬 Chat with us
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
