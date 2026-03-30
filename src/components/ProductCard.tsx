'use client';

import { motion } from 'framer-motion';
import { Star, Plus, Check } from 'lucide-react';
import Link from 'next/link';
import ImageLoader from './ImageLoader';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { MenuItem } from '@/data/menu';

interface ProductCardProps {
  product: MenuItem;
  lazyLoad?: boolean;
}

export default function ProductCard({ product, lazyLoad = true }: ProductCardProps) {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  // removed imageLoaded state

  // Generate mock rating between 4.5 to 5.0 for premium feel
  const rating = 4.5 + (product.name.length % 5) * 0.1;
  const reviewsCount = 120 + product.price; // arbitrary stable count

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if wrapped in a link
    dispatch({ type: 'ADD_ITEM', payload: product });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="premium-card bg-white flex flex-col h-full group"
    >
      <Link href={`/product/${product.id}`} className="block relative overflow-hidden aspect-square flex-shrink-0">
        
        {/* Image Loader */}
        <div className="w-full h-full bg-secondary-50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 z-10 relative">
          <ImageLoader
            src={product.image || '/placeholder-food.webp'}
            alt={product.name}
            fill
            className="object-cover"
            loading={lazyLoad ? 'lazy' : 'eager'}
            sizes="(max-width: 768px) 50vw, 25vw"
            containerClassName="w-full h-full"
          />
          {/* Fallback pattern if image is missing */}
          {!product.image && (
          <div className="absolute inset-0 bg-secondary-100 flex items-center justify-center -z-10">
            <span className="text-6xl opacity-20">
              {product.category === 'rice-bowls' && '🍚'}
              {product.category === 'pickles' && '🫙'}
              {product.category === 'sweets' && '🍮'}
              {product.category === 'snacks' && '🥟'}
            </span>
          </div>
          )}
        </div>

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          {product.isPopular && (
            <span className="bg-primary-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              BEST SELLER
            </span>
          )}
          {product.category === 'pickles' && (
            <span className="bg-secondary-500 text-primary-900 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              HOMEMADE
            </span>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3.5 h-3.5 fill-secondary-500 text-secondary-500" />
          <span className="text-xs font-semibold text-gray-700">{rating.toFixed(1)}</span>
          <span className="text-xs text-gray-400">({reviewsCount})</span>
        </div>

        <Link href={`/product/${product.id}`} className="block mb-1 flex-1">
          <h3 className="font-heading font-bold text-sm sm:text-base text-gray-900 line-clamp-2 leading-tight group-hover:text-primary-800 transition-colors">
            {product.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-1">{product.telugu}</p>
        </Link>

        {/* Lower section */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-lg text-primary-800 font-heading">
              ₹{product.price}
            </span>
            <span className="text-[10px] text-gray-400 font-medium">Incl. taxes</span>
          </div>

          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-xl flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
              isAdded 
                ? 'bg-green-100 text-green-700' 
                : 'bg-primary-50 text-primary-800 hover:bg-primary-800 hover:text-white'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center sm:gap-1.5"><Check size={18} /> <span className="hidden sm:inline">Added</span></span>
            ) : (
              <span className="flex items-center sm:gap-1.5"><Plus size={18} /> <span className="hidden sm:inline">Add</span></span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
