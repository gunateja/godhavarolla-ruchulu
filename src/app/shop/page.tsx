'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { menuItems, categories } from '@/data/menu';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = useMemo(() => {
    let result = menuItems;

    // Filter by Search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) || 
        item.description.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by Category
    if (activeCategory !== 'all') {
      result = result.filter(item => item.category === activeCategory);
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'popular': return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        default: return 0;
      }
    });

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <div className="bg-secondary-50 min-h-screen py-8 md:py-16 section-padding relative overflow-hidden">
      {/* Decorative Bg */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100 rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="section-container relative z-10">
        
        {/* Page Header */}
        <motion.div 
          className="text-center md:text-left mb-8 md:mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            ★ Authentic Flavours
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-5 leading-tight">
            Our <span className="text-gradient-warm">Menu</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-sm md:text-lg font-medium leading-relaxed">
            From the fiery heat of Avakai to the delicate sweetness of Pootharekulu, explore our wide range of authentic Godavari delicacies.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md p-3 md:p-5 rounded-3xl shadow-lg shadow-black/5 border border-white/40 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-20 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Input */}
          <div className="relative w-full md:flex-1 md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for pickles, sweets, snacks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 focus:bg-white outline-none transition-all text-sm font-semibold text-gray-800 placeholder:text-gray-400 shadow-inner shadow-black/5"
            />
          </div>

          <div className="flex w-full md:w-auto gap-3">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex-1 btn-outline bg-white !rounded-2xl flex items-center justify-center gap-2 !h-12 !border-gray-200 !text-gray-700"
            >
              <SlidersHorizontal size={18} /> Filters
            </button>

            {/* Sort Dropdown */}
            <div className="relative flex-1 md:w-56">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none pl-5 pr-12 py-3.5 bg-white border border-gray-100 shadow-sm rounded-2xl text-sm font-bold text-gray-800 outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-colors cursor-pointer"
              >
                <option value="popular">★ Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center pointer-events-none">
                <ChevronDown className="text-gray-500" size={16} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar Sidebar Filters */}
          <aside className={`md:w-64 lg:w-72 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-[160px]">
              <h3 className="font-heading font-extrabold text-xl mb-6 text-gray-900 border-b border-gray-50 pb-4">Categories</h3>
              <div className="flex flex-col gap-2.5">
                <AnimatePresence>
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const count = cat.id === 'all' ? menuItems.length : menuItems.filter(i => i.category === cat.id).length;
                    
                    return (
                      <button
                        key={cat.id}
                        onClick={() => { setActiveCategory(cat.id); setShowFilters(false); }}
                        className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all text-left overflow-hidden ${
                          isActive 
                            ? 'bg-primary-900 text-white shadow-md shadow-primary-900/20' 
                            : 'text-gray-600 hover:bg-primary-50 hover:text-primary-800 border border-transparent hover:border-primary-100'
                        }`}
                      >
                        <span className="text-2xl leading-none relative z-10 transition-transform group-hover:scale-110">{cat.icon}</span>
                        <span className="relative z-10">{cat.name}</span>
                        
                        {isActive && (
                          <motion.div 
                            layoutId="active-cat-bg" 
                            className="absolute inset-0 bg-primary-800 z-0" 
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          />
                        )}

                        <span className={`ml-auto text-[10px] px-2 py-1 rounded-md font-extrabold relative z-10 transition-colors ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-primary-100'
                        }`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            <div className="mb-8 flex justify-between items-center bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/80 shadow-sm">
              <div className="flex items-center gap-3">
                <h2 className="text-xl md:text-2xl font-heading font-extrabold text-gray-900 line-clamp-1">
                  {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name}
                </h2>
                {activeCategory !== 'all' && (
                  <span className="bg-primary-100 text-primary-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <CheckCircle2 size={12} /> Active
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm whitespace-nowrap">
                {filteredItems.length} items
              </span>
            </div>

            {filteredItems.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 text-center rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
                  🔍
                </div>
                <h3 className="text-2xl font-extrabold font-heading text-gray-800 mb-3">No products found</h3>
                <p className="text-gray-500 mb-8 max-w-sm font-medium">We couldn&apos;t find anything matching your search criteria. Try different keywords or categories.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} 
                  className="btn-secondary !rounded-2xl"
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <motion.div 
                layout
                className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-6"
              >
                <AnimatePresence>
                  {filteredItems.map((item, i) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      key={item.id}
                    >
                      <ProductCard product={item} lazyLoad={false} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
