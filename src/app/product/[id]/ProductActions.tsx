'use client';

import { useState } from 'react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/data/menu';

export default function ProductActions({ product }: { product: MenuItem }) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch, generateWhatsAppOrder } = useCart();
  const [added, setAdded] = useState(false);

  const handleDecrease = () => setQuantity(q => Math.max(1, q - 1));
  const handleIncrease = () => setQuantity(q => Math.min(10, q + 1));

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppBuy = () => {
    // For a direct buy, just link straight to WhatsApp
    const message = encodeURIComponent(`Hi, I'd like to place an order for:\n\n1x ${product.name} (₹${product.price})\n\nPlease let me know the payment details.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-bold text-gray-700 w-20">Quantity:</span>
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl h-12 w-36">
          <button 
            onClick={handleDecrease}
            className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary-800 hover:bg-gray-100 rounded-l-xl transition-colors"
          >
            <Minus size={18} />
          </button>
          <span className="flex-1 text-center font-bold text-gray-800">{quantity}</span>
          <button 
            onClick={handleIncrease}
            className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary-800 hover:bg-gray-100 rounded-r-xl transition-colors"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button 
          onClick={handleAddToCart}
          className={`flex-1 h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg ${
            added 
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-primary-800 text-white hover:bg-primary-900 transform hover:-translate-y-1'
          }`}
        >
          {added ? (
            <>Added to Cart!</>
          ) : (
            <>
              <ShoppingBag size={20} /> Add to Cart
            </>
          )}
        </button>

        <button 
          onClick={handleWhatsAppBuy}
          className="flex-1 h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
        >
          Buy via WhatsApp
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
        <span className="bg-primary-50 text-primary-800 text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
          In Stock
        </span>
        <span className="bg-secondary-100 text-primary-900 text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-600"></span>
          Ships in 24 hrs
        </span>
      </div>
    </div>
  );
}
