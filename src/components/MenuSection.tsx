'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Flame, Leaf, Sparkles, Star } from 'lucide-react';
import { menuItems, categories } from '@/data/menu';
import { useCart } from '@/context/CartContext';

const spiceIcons = (level: number) => {
  return Array.from({ length: level }).map((_, i) => (
    <Flame key={i} size={12} className="text-spice-400" />
  ));
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { dispatch } = useCart();

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleAdd = (item: typeof menuItems[0]) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    setAddedItems((prev) => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 1200);
  };

  return (
    <section id="menu" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-saffron-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="section-container relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-saffron-400 font-medium text-sm uppercase tracking-[0.2em] mb-3 block">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Godavari&apos;s Finest <span className="gradient-text">Flavours</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Every dish is a journey to the banks of the Godavari — crafted with traditional recipes 
            passed down through generations.
          </p>
        </motion.div>

        {/* Category pills */}
        <motion.div
          className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide justify-start md:justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-pill flex items-center gap-2 ${
                activeCategory === cat.id ? 'active' : ''
              }`}
              id={`category-${cat.id}`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Image placeholder area */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-earth-800 to-earth-900">
                  {/* Pattern background */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,193,7,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,87,34,0.2) 0%, transparent 50%)`,
                    }}
                  />

                  {/* Food emoji as placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-60 group-hover:scale-110 transition-transform duration-500">
                    {item.category === 'rice-bowls' && '🍚'}
                    {item.category === 'snacks' && '🥟'}
                    {item.category === 'pickles' && '🫙'}
                    {item.category === 'sweets' && '🍮'}
                    {item.category === 'meals' && '🥘'}
                    {item.category === 'beverages' && '🥤'}
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isVeg ? (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-leaf-600/90 text-white text-xs font-semibold backdrop-blur-sm">
                        <Leaf size={12} /> Veg
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-spice-600/90 text-white text-xs font-semibold backdrop-blur-sm">
                        Non-Veg
                      </span>
                    )}
                    {item.isPopular && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-saffron-600/90 text-white text-xs font-semibold backdrop-blur-sm">
                        <Star size={12} /> Popular
                      </span>
                    )}
                    {item.isNew && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-600/90 text-white text-xs font-semibold backdrop-blur-sm">
                        <Sparkles size={12} /> New
                      </span>
                    )}
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgba(20,20,20,0.95)] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-saffron-300 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xs text-saffron-500/70 font-medium">
                        {item.telugu}
                      </span>
                    </div>
                    {item.spiceLevel && (
                      <div className="flex gap-0.5 mt-1 shrink-0">
                        {spiceIcons(item.spiceLevel)}
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-white/40 line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold gradient-text-warm">
                      ₹{item.price}
                    </span>
                    <motion.button
                      onClick={() => handleAdd(item)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        addedItems.has(item.id)
                          ? 'bg-leaf-600 text-white'
                          : 'bg-white/5 text-white/80 hover:bg-saffron-600 hover:text-white border border-white/10 hover:border-saffron-600'
                      }`}
                      whileTap={{ scale: 0.95 }}
                      id={`add-${item.id}`}
                    >
                      {addedItems.has(item.id) ? (
                        <>✓ Added</>
                      ) : (
                        <>
                          <Plus size={16} /> Add
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
