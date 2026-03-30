'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, MapPin, Phone, ArrowRight, RotateCcw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { locations } from '@/data/menu';

export default function OrderConfirmation() {
  const { state, dispatch, total } = useCart();
  const location = locations.find((l) => l.id === state.selectedLocation);
  const orderNumber = `GR${Date.now().toString().slice(-6)}`;

  if (!state.orderPlaced) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        className="relative w-full max-w-lg glass rounded-3xl overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Success header */}
        <div className="relative bg-gradient-to-br from-leaf-600 to-leaf-800 p-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
            }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <CheckCircle size={64} className="mx-auto text-white mb-4" />
          </motion.div>
          <motion.h2
            className="text-2xl font-heading font-bold text-white mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Order Placed Successfully! 🎉
          </motion.h2>
          <motion.p
            className="text-white/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your delicious food is being prepared
          </motion.p>
        </div>

        {/* Order details */}
        <div className="p-6 space-y-5">
          {/* Order number */}
          <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <span className="text-xs text-white/40 uppercase tracking-wider">Order Number</span>
            <p className="text-2xl font-bold gradient-text-warm mt-1">{orderNumber}</p>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-lg bg-saffron-500/10 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-saffron-400" />
              </div>
              <div>
                <span className="text-white/40 text-xs">Customer</span>
                <p className="text-white font-medium">{state.customerName} • {state.customerPhone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-lg bg-saffron-500/10 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-saffron-400" />
              </div>
              <div>
                <span className="text-white/40 text-xs">Pickup Location</span>
                <p className="text-white font-medium">
                  {location?.metro} Metro — Stall {location?.stallNo}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-9 h-9 rounded-lg bg-saffron-500/10 flex items-center justify-center shrink-0">
                <Clock size={16} className="text-saffron-400" />
              </div>
              <div>
                <span className="text-white/40 text-xs">Estimated Ready</span>
                <p className="text-white font-medium">15–20 minutes</p>
              </div>
            </div>
          </div>

          {/* Items summary */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
              Order Summary
            </h4>
            <div className="space-y-2">
              {state.items.map((ci) => (
                <div key={ci.item.id} className="flex justify-between text-sm">
                  <span className="text-white/70">
                    {ci.item.name} × {ci.quantity}
                  </span>
                  <span className="text-white/50">₹{ci.item.price * ci.quantity}</span>
                </div>
              ))}
              <div className="pt-2 mt-2 border-t border-white/5 flex justify-between font-bold">
                <span className="text-white">Total</span>
                <span className="gradient-text-warm">₹{total + (total > 500 ? 0 : 20)}</span>
              </div>
            </div>
          </div>

          {/* Order status steps */}
          <div className="flex items-center gap-2 px-2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-leaf-500 flex items-center justify-center text-white text-xs font-bold">✓</div>
              <span className="text-[10px] text-white/40">Placed</span>
            </div>
            <div className="stepper-line active" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-saffron-500 flex items-center justify-center text-white text-xs animate-pulse">
                <Clock size={14} />
              </div>
              <span className="text-[10px] text-saffron-400">Preparing</span>
            </div>
            <div className="stepper-line" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/30 text-xs">3</div>
              <span className="text-[10px] text-white/30">Ready</span>
            </div>
            <div className="stepper-line" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/30 text-xs">4</div>
              <span className="text-[10px] text-white/30">Picked Up</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => dispatch({ type: 'RESET_ORDER' })}
              className="flex-1 btn-secondary !py-3 !rounded-xl flex items-center justify-center gap-2 !text-sm"
              id="new-order-btn"
            >
              <RotateCcw size={16} />
              New Order
            </button>
            {location && (
              <a
                href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-primary !py-3 !rounded-xl flex items-center justify-center gap-2 !text-sm"
              >
                <span className="flex items-center gap-2">
                  Navigate <ArrowRight size={16} />
                </span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
