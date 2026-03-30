'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, ShoppingBag, Grid2X2, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileBottomBar() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  const links = [
    { name: 'Home', href: '/', icon: Home, isExternal: false },
    { name: 'Shop', href: '/shop', icon: Grid2X2, isExternal: false },
    { name: 'Cart', href: '/cart', icon: ShoppingBag, badge: itemCount, isExternal: false },
    { name: 'WhatsApp', href: 'https://wa.me/919876543210?text=Hi,%20I%20want%20to%20order%20from%20Godhavarolla%20Ruchulu', icon: MessageCircle, isExternal: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 glass-nav z-40 pb-safe border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] touch-none">
      <div className="flex justify-around items-center h-[68px] px-2">
        {links.map((link) => {
          const isActive = !link.isExternal && pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              target={link.isExternal && link.name === 'WhatsApp' ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="relative flex flex-col items-center justify-center w-full h-full group tap-highlight-transparent"
            >
              {/* Active Indicator Splash */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 top-1.5 w-12 h-12 mx-auto bg-primary-50 rounded-full -z-10"
                  layoutId="mobile-nav-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              <div className="relative p-1 transition-transform duration-200 group-active:scale-90">
                <Icon
                  size={24}
                  className={`${isActive ? 'text-primary-800' : 'text-gray-400 group-hover:text-gray-600'} transition-colors duration-300`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <AnimatePresence>
                  {link.badge !== undefined && link.badge > 0 && (
                    <motion.span
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      className="absolute -top-1 -right-2 bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-950 text-[10px] font-extrabold h-[18px] min-w-[18px] px-1 rounded-full flex items-center justify-center shadow-sm border border-white"
                    >
                      {link.badge}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <span
                className={`text-[10px] font-bold mt-1 tracking-wide transition-all duration-300 ${
                  isActive ? 'text-primary-800 translate-y-0.5' : 'text-gray-400 group-hover:text-gray-600'
                }`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
