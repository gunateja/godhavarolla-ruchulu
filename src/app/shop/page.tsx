'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
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
        default: return 0; // 'featured' or fallback
      }
    });

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <div className="bg-secondary-50 min-h-screen py-8 md:py-12 section-padding">
      <div className="section-container">
        
        {/* Page Header */}
        <div className="text-center md:text-left mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-800 mb-4">
            Our Menu
          </h1>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base">
            From the fiery heat of Avakai to the delicate sweetness of Pootharekulu, explore our wide range of authentic Godavari delicacies.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-20 z-30">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for pickles, sweets, snacks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition-all text-sm font-medium"
            />
          </div>

          <div className="flex w-full md:w-auto gap-3">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex-1 btn-outline bg-white flex items-center justify-center gap-2"
            >
              <SlidersHorizontal size={18} /> Filters
            </button>

            {/* Sort Dropdown */}
            <div className="relative flex-1 md:w-48">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 outline-none focus:border-primary-400 transition-colors"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-48">
              <h3 className="font-heading font-bold text-lg mb-4 text-gray-900">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setShowFilters(false); }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                      activeCategory === cat.id 
                        ? 'bg-primary-50 text-primary-800' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl leading-none">{cat.icon}</span>
                    <span>{cat.name}</span>
                    <span className="ml-auto text-xs opacity-50 font-bold">
                      {cat.id === 'all' 
                        ? menuItems.length 
                        : menuItems.filter(i => i.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>


            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-heading font-bold text-gray-800">
                {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                {filteredItems.length} items
              </span>
            </div>

            {filteredItems.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-gray-100 flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold font-heading text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">We couldn&apos;t find anything matching your search criteria.</p>
                <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="btn-secondary">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredItems.map(item => (
                  <ProductCard key={item.id} product={item} lazyLoad={false} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
