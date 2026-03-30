'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, ShoppingBag, Phone, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileBottomBar() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  const links = [
    { name: 'Home', href: '/', icon: Home, isExternal: false },
    { name: 'Cart', href: '/cart', icon: ShoppingBag, badge: itemCount, isExternal: false },
    { name: 'Call', href: 'tel:+919876543210', icon: Phone, isExternal: true },
    { name: 'WhatsApp', href: 'https://wa.me/919876543210?text=Hi,%20I%20want%20to%20order%20from%20Godhavarolla%20Ruchulu', icon: MessageCircle, isExternal: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 glass-nav z-40 pb-safe border-t border-gray-200">
      <div className="flex justify-around items-center h-16 px-2">
        {links.map((link) => {
          const isActive = !link.isExternal && pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              target={link.isExternal && link.name === 'WhatsApp' ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="relative flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-primary-800 transition-colors"
            >
              <div className="relative p-1">
                <Icon
                  size={24}
                  className={isActive ? 'text-primary-800' : 'text-gray-500'}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <AnimatePresence>
                  {link.badge !== undefined && link.badge > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-2 bg-secondary-500 text-primary-900 text-[10px] font-bold h-[18px] min-w-[18px] px-1 rounded-full flex items-center justify-center shadow-sm"
                    >
                      {link.badge}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <span
                className={`text-[10px] font-medium mt-1 ${
                  isActive ? 'text-primary-800' : 'text-gray-500'
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
