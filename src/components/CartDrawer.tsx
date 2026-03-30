'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
  const { state, dispatch, subTotal, shipping, total, itemCount, generateWhatsAppOrder } = useCart();

  const handleCheckout = () => {
    if (state.items.length === 0) return;
    const url = `https://wa.me/919876543210?text=${generateWhatsAppOrder()}`;
    window.open(url, '_blank');
    dispatch({ type: 'CLOSE_CART' });
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl border-l border-gray-100"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-secondary-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-800 text-white flex items-center justify-center">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-extrabold text-gray-900">Your Cart</h2>
                  <span className="text-sm font-semibold text-gray-500">{itemCount} items</span>
                </div>
              </div>
              <button
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary-800 hover:border-primary-200 transition-colors shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-6 bg-white">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-6xl mb-4 opacity-50 grayscale">🛒</div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Add some delicious traditional items to get started!
                  </p>
                  <button
                    onClick={() => dispatch({ type: 'CLOSE_CART' })}
                    className="btn-primary !py-2.5 !px-6 !text-sm !rounded-xl"
                  >
                    <span>Browse Menu</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {state.items.map((ci) => (
                      <motion.div
                        key={ci.item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, height: 0 }}
                        className="flex gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm"
                      >
                        {/* Image */}
                        <div className="w-20 h-20 rounded-xl bg-secondary-100 overflow-hidden relative shrink-0">
                          <Image 
                            src={ci.item.image || "https://images.unsplash.com/photo-1626779836561-c852fc6360c7?w=200&auto=format"} 
                            alt={ci.item.name} 
                            fill 
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 line-clamp-1 font-heading">
                                {ci.item.name}
                              </h4>
                              <span className="text-xs font-semibold text-primary-800 block">₹{ci.item.price}</span>
                            </div>
                            <button
                              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: ci.item.id })}
                              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg h-8 overflow-hidden">
                              <button
                                onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: ci.item.id, quantity: ci.quantity - 1 } })}
                                className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="text-sm font-bold text-gray-800 w-8 text-center bg-white h-full flex items-center justify-center">
                                {ci.quantity}
                              </span>
                              <button
                                onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: ci.item.id, quantity: ci.quantity + 1 } })}
                                className="w-8 h-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="text-sm font-extrabold text-gray-900">
                              ₹{(ci.item.price * ci.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>

                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {state.items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                {/* Price breakdown */}
                <div className="space-y-3 font-medium">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span className="text-gray-900 font-bold">₹{subTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Delivery</span>
                    <span className="text-gray-900 font-bold">{shipping === 0 ? <span className="text-green-600">FREE</span> : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="w-full h-px bg-gray-200 my-2"></div>
                  
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-primary-800">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full btn-primary h-14 !rounded-xl text-lg flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary-900/20 hover:-translate-y-1"
                >
                  Checkout via WhatsApp <ArrowRight size={20} />
                </button>
                <p className="text-xs text-gray-500 text-center font-medium">
                  Secure checkout processed through WhatsApp.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
