'use client';

import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { state, dispatch, subTotal, shipping, total, generateWhatsAppOrder } = useCart();
  const { items } = state;

  const handleWhatsAppCheckout = () => {
    const url = `https://wa.me/919876543210?text=${generateWhatsAppOrder()}`;
    window.open(url, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 section-padding bg-secondary-50">
        <div className="w-48 h-48 mb-6 relative grayscale opacity-30">
          <Image src="/placeholder-food.webp" alt="Empty Cart" fill className="object-cover rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center text-6xl shadow-inner bg-white/50 rounded-full backdrop-blur-sm">
            🛒
          </div>
        </div>
        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8 max-w-sm text-center">
          Looks like you haven't added any of our delicious authentic items yet. Let's fix that!
        </p>
        <Link href="/shop" className="btn-primary gap-2 h-14 !px-8 text-lg hover:-translate-y-1">
          <ArrowLeft size={20} /> Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50 py-12 section-padding">
      <div className="section-container max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-800 mb-8">
          Review Your Order
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Cart Items List */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8 space-y-6">
                {items.map(({ item, quantity }, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <Link href={`/product/${item.id}`} className="w-28 h-28 relative rounded-2xl overflow-hidden flex-shrink-0 bg-secondary-100">
                      <Image 
                        src={item.image || "https://images.unsplash.com/photo-1626779836561-c852fc6360c7?w=400&auto=format"} 
                        alt={item.name} 
                        fill 
                        className="object-cover hover:scale-110 transition-transform duration-500" 
                      />
                    </Link>

                    <div className="flex-1 flex flex-col justify-between w-full">
                      <div className="flex justify-between items-start mb-2 sm:mb-0">
                        <div>
                          <Link href={`/product/${item.id}`} className="font-heading font-bold text-lg text-gray-900 hover:text-primary-800 transition-colors line-clamp-1">
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-500 font-medium mb-1">{item.telugu}</p>
                          <p className="font-bold text-primary-800 text-lg">₹{item.price}</p>
                        </div>
                        <button 
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                          className="text-gray-400 hover:text-primary-600 transition-colors p-2"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl h-10 w-28 overflow-hidden">
                          <button 
                            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: quantity - 1 } })}
                            className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="flex-1 text-center font-bold text-gray-800 text-sm">{quantity}</span>
                          <button 
                            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: quantity + 1 } })}
                            className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="font-bold text-gray-900 text-base sm:text-lg">
                          ₹{(item.price * quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center px-2">
              <Link href="/shop" className="text-primary-800 font-semibold hover:text-primary-600 flex items-center gap-1 transition-colors">
                <ArrowLeft size={16} /> Continue Shopping
              </Link>
              <button onClick={() => dispatch({ type: 'CLEAR_CART' })} className="text-gray-400 hover:text-primary-800 font-medium text-sm transition-colors decoration-dashed underline">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary & Checkout */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-xl shadow-primary-900/5 border border-primary-50 p-6 md:p-8 sticky top-28">
              <h2 className="text-xl font-heading font-extrabold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6 text-gray-600 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-semibold">₹{subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-gray-900 font-semibold">{shipping === 0 ? <span className="text-green-600 font-bold">FREE</span> : `₹${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-xs text-secondary-600 mt-1 mb-2 bg-secondary-50 p-2 rounded-lg">
                    Add ₹{(500 - subTotal).toFixed(0)} more for FREE Delivery!
                  </div>
                )}
                <div className="w-full h-px bg-gray-100 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-extrabold font-heading text-primary-800">₹{total.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-gray-400 text-right mt-1">Inclusive of GST</p>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-8">
                <div className="flex-1 bg-green-50 text-green-700 text-[11px] font-bold px-2 py-2 rounded-lg text-center flex items-center justify-center">
                  <span className="mr-1">💵</span> COD Available
                </div>
                <div className="flex-1 bg-secondary-50 text-secondary-700 text-[11px] font-bold px-2 py-2 rounded-lg text-center flex items-center justify-center">
                  <span className="mr-1">⚡</span> Fast Dispatch
                </div>
              </div>

              {/* Checkout Action */}
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full h-14 bg-primary-800 hover:bg-primary-900 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all shadow-lg shadow-primary-900/30"
              >
                Checkout <ArrowRight size={20} />
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                You will be redirected to WhatsApp to confirm your order details and delivery location securely.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
