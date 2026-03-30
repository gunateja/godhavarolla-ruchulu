'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phone = "919876543210"; 
  const message = encodeURIComponent("Hi, I want to order from Godhavarolla Ruchulu");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-gray-800 font-bold text-sm px-4 py-2.5 rounded-xl shadow-xl flex items-center pr-3"
          >
            Chat with us
            {/* Tooltip triangle */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 shadow-[2px_-2px_2px_rgba(0,0,0,0.05)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all hover:bg-[#20bd5a] group relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle size={28} className="translate-y-[-1px] group-hover:rotate-12 transition-transform duration-300" />
        {/* Ping Dot */}
        <span className="absolute top-[3px] right-[3px] flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-[2.5px] border-[#25D366]"></span>
        </span>
      </motion.a>
    </div>
  );
}
