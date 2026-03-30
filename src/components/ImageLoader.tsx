'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLoaderProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  containerClassName?: string;
  fallbackEmoji?: string;
}

export default function ImageLoader({ 
  src, 
  alt, 
  containerClassName = '', 
  className = '', 
  fallbackEmoji = '🍽️',
  ...props 
}: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`relative overflow-hidden ${containerClassName}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 via-secondary-50 to-primary-50 flex items-center justify-center">
          <span className="text-5xl opacity-40">{fallbackEmoji}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 skeleton z-10"
          />
        )}
      </AnimatePresence>
      <Image
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${className}`}
        {...props}
      />
    </div>
  );
}
