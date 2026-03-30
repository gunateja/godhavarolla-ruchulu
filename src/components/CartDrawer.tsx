'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, MapPin, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { locations } from '@/data/menu';

export default function CartDrawer() {
  const { state, dispatch, total, itemCount } = useCart();

  const handleCheckout = () => {
    if (!state.selectedLocation) {
      alert('Please select a pickup location');
      return;
    }
    if (!state.customerName.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!state.customerPhone.trim() || state.customerPhone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }
    dispatch({ type: 'PLACE_ORDER' });
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'CLOSE_CART' })}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#111111] z-50 flex flex-col shadow-2xl border-l border-white/5"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-spice-600 flex items-center justify-center">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Your Order</h2>
                  <span className="text-xs text-white/40">{itemCount} items</span>
                </div>
              </div>
              <button
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                className="p-2 rounded-xl hover:bg-white/5 transition-colors"
                id="close-cart"
              >
                <X size={20} className="text-white/60" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-6xl mb-4 opacity-30">🛒</div>
                  <h3 className="text-lg font-semibold text-white/60 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-white/30 mb-6">
                    Add some delicious items from our menu!
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
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        {/* Emoji icon */}
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-earth-800 to-earth-900 flex items-center justify-center text-2xl shrink-0">
                          {ci.item.category === 'rice-bowls' && '🍚'}
                          {ci.item.category === 'snacks' && '🥟'}
                          {ci.item.category === 'pickles' && '🫙'}
                          {ci.item.category === 'sweets' && '🍮'}
                          {ci.item.category === 'meals' && '🥘'}
                          {ci.item.category === 'beverages' && '🥤'}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-white truncate">
                            {ci.item.name}
                          </h4>
                          <span className="text-xs text-saffron-500/70">{ci.item.telugu}</span>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: 'UPDATE_QUANTITY',
                                    payload: { id: ci.item.id, quantity: ci.quantity - 1 },
                                  })
                                }
                                className="qty-btn"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="text-sm font-bold text-white w-6 text-center">
                                {ci.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: 'UPDATE_QUANTITY',
                                    payload: { id: ci.item.id, quantity: ci.quantity + 1 },
                                  })
                                }
                                className="qty-btn"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="text-sm font-bold gradient-text-warm">
                              ₹{ci.item.price * ci.quantity}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            dispatch({ type: 'REMOVE_ITEM', payload: ci.item.id })
                          }
                          className="self-start p-1.5 rounded-lg hover:bg-spice-600/20 text-white/20 hover:text-spice-400 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Pickup Location selector */}
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <label className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
                      <MapPin size={16} className="text-saffron-400" />
                      Pickup Location
                    </label>
                    <div className="space-y-2 mt-3">
                      {locations.map((loc) => (
                        <button
                          key={loc.id}
                          onClick={() =>
                            dispatch({ type: 'SET_LOCATION', payload: loc.id })
                          }
                          className={`w-full text-left p-3 rounded-xl border transition-all text-sm ${
                            state.selectedLocation === loc.id
                              ? 'border-saffron-500/50 bg-saffron-500/10 text-white'
                              : 'border-white/5 bg-white/[0.02] text-white/50 hover:border-white/10'
                          }`}
                          id={`pickup-${loc.id}`}
                        >
                          <span className="font-medium">{loc.metro} Metro</span>
                          <span className="text-xs block mt-0.5 opacity-60">
                            Stall {loc.stallNo} • {loc.hours}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customer details */}
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                    <div>
                      <label className="text-xs font-medium text-white/40 block mb-1.5">Your Name</label>
                      <input
                        type="text"
                        value={state.customerName}
                        onChange={(e) => dispatch({ type: 'SET_CUSTOMER_NAME', payload: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-saffron-500/50 focus:outline-none transition-colors"
                        id="customer-name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-white/40 block mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={state.customerPhone}
                        onChange={(e) => dispatch({ type: 'SET_CUSTOMER_PHONE', payload: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-saffron-500/50 focus:outline-none transition-colors"
                        id="customer-phone"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {state.items.length > 0 && (
              <div className="p-6 border-t border-white/5 space-y-4">
                {/* Price breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-white/50">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/50">
                    <span>Packing charges</span>
                    <span>₹{total > 500 ? 0 : 20}</span>
                  </div>
                  {total > 500 && (
                    <div className="flex justify-between text-sm text-leaf-400">
                      <span>🎉 Free packing!</span>
                      <span>-₹20</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-white/5">
                    <span>Total</span>
                    <span className="gradient-text-warm">
                      ₹{total + (total > 500 ? 0 : 20)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full btn-primary !py-4 !rounded-xl flex items-center justify-center gap-2 !text-base"
                  id="checkout-btn"
                >
                  <span className="flex items-center gap-2">
                    Place Order
                    <ArrowRight size={18} />
                  </span>
                </button>
                <p className="text-[11px] text-white/20 text-center">
                  Pay at the counter when you pick up your order
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
