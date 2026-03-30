'use client';

import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { state, dispatch, subTotal, shipping, total, generateWhatsAppOrder } = useCart();
  const { items } = state;

  const handleWhatsAppCheckout = () => {
    const url = `https://wa.me/919876543210?text=${generateWhatsAppOrder()}`;
    window.open(url, '_blank');
  };

  const freeShippingThreshold = 500;
  const progressPercentage = Math.min((subTotal / freeShippingThreshold) * 100, 100);

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 section-padding bg-secondary-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

        <motion.div 
          className="text-[120px] mb-8 relative drop-shadow-2xl"
          initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          🛒
          <motion.div 
            className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-4xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            ✧
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight z-10 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Your Cart is <span className="text-primary-800">Empty</span>
        </motion.h1>

        <motion.p 
          className="text-gray-500 mb-10 max-w-sm text-center font-medium leading-relaxed z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Looks like you haven't added any of our delicious authentic items yet. Let's fix that!
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/shop" className="btn-primary gap-3 h-14 !px-10 text-lg shadow-xl shadow-primary-900/20 z-10 flex items-center group overflow-hidden relative">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 scale-105 transform origin-left transition-transform duration-500 group-hover:scale-110"></span>
            <span className="relative z-10 flex items-center gap-2"><ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Browse Menu</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8E1] py-12 md:py-20 section-padding relative overflow-hidden">
      <div className="section-container max-w-6xl relative z-10">
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-10 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Review Your <span className="text-gradient">Order</span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Cart Items List */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-white overflow-hidden">
              <div className="p-6 md:p-10">
                <AnimatePresence>
                  {items.map(({ item, quantity }, i) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -30, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 pb-8 mb-8 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0"
                    >
                      <Link href={`/product/${item.id}`} className="w-28 h-28 relative rounded-3xl overflow-hidden flex-shrink-0 bg-secondary-50 border border-secondary-100 group shadow-sm">
                        <Image 
                          src={item.image || "/images/avakai.png"} 
                          alt={item.name} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      </Link>

                      <div className="flex-1 min-w-0 flex flex-col justify-between w-full">
                        <div className="flex justify-between items-start mb-4 sm:mb-0 gap-4">
                          <div>
                            <Link href={`/product/${item.id}`} className="font-heading font-extrabold text-lg md:text-xl text-gray-900 hover:text-primary-800 transition-colors line-clamp-2 leading-tight">
                              {item.name}
                            </Link>
                            <p className="text-sm text-gray-500 font-semibold mt-1 mb-2">{item.telugu}</p>
                            <p className="font-extrabold text-primary-800 text-xl tracking-tight">₹{item.price}</p>
                          </div>
                          <button 
                            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                            className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors shadow-sm shrink-0"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-auto bg-gray-50 p-2 sm:p-3 rounded-2xl border border-gray-100">
                          <div className="flex items-center bg-white border border-gray-200 shadow-sm rounded-xl h-10 w-28 overflow-hidden">
                            <button 
                              onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: quantity - 1 } })}
                              className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="flex-1 text-center font-extrabold text-gray-800 text-sm">{quantity}</span>
                            <button 
                              onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: quantity + 1 } })}
                              className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-0.5">Subtotal</span>
                            <span className="font-extrabold text-gray-900 text-lg sm:text-xl tracking-tight">
                              ₹{(item.price * quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center sm:px-4 gap-4">
              <Link href="/shop" className="w-full sm:w-auto text-primary-800 font-bold hover:text-primary-600 bg-white/50 border border-primary-200 backdrop-blur-sm px-6 py-3 rounded-xl flex justify-center items-center gap-2 transition-all hover:-translate-x-1 shadow-sm">
                <ArrowLeft size={18} /> Continue Shopping
              </Link>
              <button 
                onClick={() => dispatch({ type: 'CLEAR_CART' })} 
                className="text-gray-500 hover:text-red-500 font-bold text-sm transition-colors py-2"
              >
                Clear Entire Cart
              </button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <motion.div 
              className="bg-white rounded-[2rem] shadow-2xl shadow-primary-900/10 border border-white p-6 md:p-8 lg:p-10 sticky top-[100px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-heading font-extrabold text-gray-900 mb-8 border-b border-gray-100 pb-5">
                Order Summary
              </h2>

              {/* Free Shipping Progress */}
              <div className="bg-secondary-50 border border-secondary-200 rounded-2xl p-5 mb-8">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-bold text-gray-800">
                    {shipping === 0 ? "🎉 You unlocked Free Delivery!" : "🚀 Free Delivery"}
                  </span>
                  {shipping > 0 && <span className="text-xs font-bold text-secondary-700">Add ₹{(freeShippingThreshold - subTotal).toFixed(0)}</span>}
                </div>
                <div className="h-2 w-full bg-secondary-200/50 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              {/* Cost Breakdown */}
              <div className="space-y-5 mb-8 text-gray-600 font-medium">
                <div className="flex justify-between text-base">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-extrabold">₹{subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base items-center">
                  <span>Delivery Charges</span>
                  <span className="text-gray-900 font-extrabold">
                    {shipping === 0 ? (
                      <span className="text-green-600 bg-green-50 px-2.5 py-1 rounded-lg text-sm border border-green-100">FREE</span>
                    ) : (
                      `₹${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-extrabold text-gray-900">Total Amount</span>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold font-heading text-primary-900 tracking-tight">₹{total.toFixed(2)}</span>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-1">Incl. of GST</p>
                  </div>
                </div>
              </div>

              {/* Secure Badges */}
              <div className="flex gap-3 mb-8">
                <div className="flex-1 bg-green-50/50 border border-green-100 text-green-700 text-[10px] font-extrabold px-3 py-2.5 rounded-xl text-center flex flex-col items-center justify-center gap-1 shadow-sm">
                  <span className="text-lg">💵</span> COD Available
                </div>
                <div className="flex-1 bg-secondary-50/50 border border-secondary-100 text-secondary-700 text-[10px] font-extrabold px-3 py-2.5 rounded-xl text-center flex flex-col items-center justify-center gap-1 shadow-sm">
                  <span className="text-lg">⚡</span> Fast Dispatch
                </div>
              </div>

              {/* Checkout Action */}
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full h-16 bg-gradient-to-r from-primary-800 to-primary-900 text-white rounded-[1.25rem] font-bold text-lg flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/30 transition-all active:scale-[0.98] outline-none relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shine_1.5s_ease]"></span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 invert" />
                Checkout Securely
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-center text-gray-500 font-medium mt-6 leading-relaxed max-w-[250px] mx-auto">
                You will be securely redirected to WhatsApp to confirm your order details.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
