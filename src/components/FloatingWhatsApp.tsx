'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import React from 'react';

export default function FloatingWhatsApp() {
  // Pre-filled WhatsApp message URL format
  const phone = "919876543210"; 
  const message = encodeURIComponent("Hi, I want to order from Godhavarolla Ruchulu");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      {/* Optional Ping Dot */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white border border-[#25D366]"></span>
      </span>
    </motion.a>
  );
}
