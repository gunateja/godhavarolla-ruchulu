import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, ArrowLeft, Heart, Share2, ShieldCheck, Truck, Clock } from 'lucide-react';
import { menuItems } from '@/data/menu';
import ProductActions from './ProductActions';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id,
  }));
}

// Ensure layout doesn't break cache
export const dynamicParams = true;

const categoryEmoji: Record<string, string> = {
  pickles: '🫙',
  sweets: '🍮',
  snacks: '🥟',
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = menuItems.find((item) => item.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  // Generate related products
  const relatedProducts = menuItems
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const rating = 4.5 + (product.name.length % 5) * 0.1;
  const reviewsCount = 120 + product.price;

  return (
    <div className="bg-secondary-50 min-h-screen pt-4 pb-16 section-padding relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>

      <div className="section-container max-w-6xl relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 mb-6 font-bold tracking-wide">
          <Link href="/shop" className="hover:text-primary-800 flex items-center gap-1.5 transition-colors group bg-white/50 px-3 py-1.5 rounded-lg border border-white">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
          </Link>
          <span className="opacity-50">/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-primary-800 capitalize transition-colors">
            {product.category.replace('-', ' ')}
          </Link>
          <span className="opacity-50">/</span>
          <span className="text-primary-900 truncate max-w-[150px] sm:max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-white overflow-hidden flex flex-col lg:flex-row mb-12 animate-fade-in-up">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 relative bg-secondary-100 overflow-hidden group aspect-square lg:aspect-auto min-h-[400px]">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 to-secondary-50 flex items-center justify-center">
                <span className="text-8xl opacity-30">{categoryEmoji[product.category] || '🍽️'}</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              {product.isPopular && (
                <div className="bg-primary-700 text-white font-extrabold px-4 py-1.5 rounded-xl shadow-lg tracking-widest text-[10px] uppercase animate-pulse-soft">
                  ★ Best Seller
                </div>
              )}
            </div>
            
            {/* Action Buttons Overlay */}
            <div className="absolute top-6 right-6 flex flex-col gap-3">
              <button className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md text-gray-700 flex items-center justify-center hover:text-primary-700 hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" aria-label="Favorite">
                <Heart size={20} />
              </button>
              <button className="w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md text-gray-700 flex items-center justify-center hover:text-primary-700 hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" aria-label="Share">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-secondary-500 bg-secondary-50 px-2.5 py-1.5 rounded-lg border border-secondary-100 shadow-sm float-left">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={14} fill={i <= Math.floor(rating) ? "currentColor" : "none"} className="mx-[1px]" />
                ))}
              </div>
              <span className="text-sm font-extrabold text-gray-800">{rating.toFixed(1)}</span>
              <span className="text-xs text-primary-800 underline decoration-primary-200 decoration-dashed font-semibold cursor-pointer hover:text-primary-600 transition-colors">
                Read {reviewsCount} reviews
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-2 leading-tight tracking-tight">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl text-primary-800 font-extrabold mb-6 font-heading opacity-80">
              {product.telugu}
            </p>

            <div className="flex items-baseline gap-3 mb-6 bg-primary-50 px-5 py-4 rounded-2xl w-fit border border-primary-100">
              <span className="text-4xl font-extrabold text-primary-900 tracking-tight">₹{product.price}</span>
              <span className="text-[11px] text-primary-800/60 font-bold uppercase tracking-wider">Incl. all taxes</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base font-medium">
              {product.description} Built using traditional Godavari recipes with hand-pounded spices and sun-dried ingredients for the authentic amma's taste.
            </p>

            {/* Feature Mini-Cards */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-secondary-50/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center border border-secondary-100 hover:border-secondary-300 transition-colors group">
                <ShieldCheck size={26} className="text-primary-700 mb-2 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-[11px] font-extrabold text-gray-800 leading-tight">100%<br/>Natural</span>
              </div>
              <div className="bg-secondary-50/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center border border-secondary-100 hover:border-secondary-300 transition-colors group">
                <Truck size={26} className="text-primary-700 mb-2 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-[11px] font-extrabold text-gray-800 leading-tight">Fast<br/>Delivery</span>
              </div>
              <div className="bg-secondary-50/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center border border-secondary-100 hover:border-secondary-300 transition-colors group">
                <Clock size={26} className="text-primary-700 mb-2 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="text-[11px] font-extrabold text-gray-800 leading-tight">Freshly<br/>Made</span>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

            {/* Interactive Add to Cart & Quantity */}
            <ProductActions product={product} />

          </div>
        </div>

        {/* Product Details Tabs (Information & Ingredients) */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 animate-fade-in-up delay-200">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-8 flex items-center gap-3">
            Product Details
            <span className="h-0.5 flex-1 bg-gradient-to-r from-gray-100 to-transparent rounded-full max-w-xs"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-extrabold text-primary-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-600"></span>
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Our {product.name} is meticulously prepared in small batches to ensure the highest quality and consistent taste. 
                Using cold-pressed oils and hand-picked spices sourced directly from local farmers, we guarantee an explosion of authentic flavors in every bite. 
                Perfect for gifting or satisfying your daily cravings.
              </p>
            </div>
            
            <div className="bg-secondary-50 rounded-2xl p-6 md:p-8 border border-secondary-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-extrabold text-primary-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-600"></span>
                Key Ingredients
              </h3>
              <ul className="list-none space-y-3">
                {[
                  // Dynamic array based on category
                  ...(product.category === 'pickles' ? [
                    'Premium Spices (Red Chilli, Mustard)', 'Cold-pressed Groundnut Oil', 'Crystal Salt', 'Freshly sourced raw materials'
                  ] : product.category === 'sweets' ? [
                    'Pure Desi Ghee', 'Organic Jaggery / Crystal Sugar', 'Premium Dry Fruits', 'Cardamom Powder'
                  ] : [
                    'Premium Gram / Rice Flour', 'Double-refined Oil', 'Traditional Spice Blend', 'Curry Leaves & Peanuts'
                  ])
                ].map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-secondary-500 mt-1">✦</span>
                    <span className="text-gray-700 text-sm font-bold">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 animate-fade-in-up delay-300">
            <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-8">You May Also Like</h2>
            <div className="carousel-scroll pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
              {relatedProducts.map(item => (
                <div key={item.id} className="carousel-item w-[280px] sm:w-auto">
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
