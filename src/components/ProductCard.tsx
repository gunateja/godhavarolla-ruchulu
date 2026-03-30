'use client';

import { motion } from 'framer-motion';
import { Star, Plus, Check, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import ImageLoader from './ImageLoader';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { MenuItem } from '@/data/menu';

interface ProductCardProps {
  product: MenuItem;
  lazyLoad?: boolean;
}

const categoryEmoji: Record<string, string> = {
  pickles: '🫙',
  sweets: '🍮',
  snacks: '🥟',
};

export default function ProductCard({ product, lazyLoad = true }: ProductCardProps) {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const rating = 4.5 + (product.name.length % 5) * 0.1;
  const reviewsCount = 120 + product.price;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="premium-card bg-white flex flex-col h-full group"
    >
      <Link href={`/product/${product.id}`} className="block relative overflow-hidden aspect-square flex-shrink-0">
        
        {/* Image */}
        <div className="w-full h-full bg-secondary-50 transition-transform duration-700 ease-out group-hover:scale-110 relative">
          <ImageLoader
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            loading={lazyLoad ? 'lazy' : 'eager'}
            sizes="(max-width: 768px) 50vw, 25vw"
            containerClassName="w-full h-full"
            fallbackEmoji={categoryEmoji[product.category] || '🍽️'}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Quick View overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="bg-white/90 backdrop-blur-sm text-primary-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            View Details →
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-20">
          {product.isPopular && (
            <span className="bg-gradient-to-r from-primary-700 to-primary-600 text-white text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider">
              ★ Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider">
              ✦ New
            </span>
          )}
        </div>

        {/* Spice indicator */}
        {product.spiceLevel && (
          <div className="absolute top-2.5 right-2.5 z-20 bg-white/85 backdrop-blur-sm px-1.5 py-1 rounded-lg shadow-sm">
            <span className="text-xs">{'🌶️'.repeat(product.spiceLevel)}</span>
          </div>
        )}
      </Link>

      <div className="p-3.5 sm:p-4 flex flex-col flex-1">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1.5">
          <Star className="w-3.5 h-3.5 fill-secondary-500 text-secondary-500" />
          <span className="text-[11px] font-bold text-gray-700">{rating.toFixed(1)}</span>
          <span className="text-[11px] text-gray-400">({reviewsCount})</span>
        </div>

        {/* Title */}
        <Link href={`/product/${product.id}`} className="block mb-auto">
          <h3 className="font-heading font-bold text-[13px] sm:text-sm text-gray-900 line-clamp-2 leading-snug group-hover:text-primary-800 transition-colors">
            {product.name}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-primary-400 mt-0.5 line-clamp-1 font-medium">{product.telugu}</p>
        </Link>

        {/* Price + Add */}
        <div className="mt-3 flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg text-gray-900 font-heading leading-none">
              ₹{product.price}
            </span>
            <span className="text-[9px] text-gray-400 font-medium mt-0.5">Incl. taxes</span>
          </div>

          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.88 }}
            className={`w-9 h-9 sm:w-auto sm:h-auto sm:px-3.5 sm:py-2 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 ${
              isAdded 
                ? 'bg-emerald-100 text-emerald-700 shadow-sm' 
                : 'bg-primary-800 text-white hover:bg-primary-900 shadow-md hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center sm:gap-1.5"><Check size={16} /> <span className="hidden sm:inline">Added!</span></span>
            ) : (
              <span className="flex items-center sm:gap-1.5"><ShoppingBag size={14} /> <span className="hidden sm:inline">Add</span></span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
