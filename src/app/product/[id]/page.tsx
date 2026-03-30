import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, ArrowLeft, Heart, Share2, ShieldCheck, Truck, Clock } from 'lucide-react';
import { menuItems } from '@/data/menu';
import ProductActions from './ProductActions'; // Client component for interactivity
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id,
  }));
}

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

  // Mock rating
  const rating = 4.5 + (product.name.length % 5) * 0.1;
  const reviewsCount = 120 + product.price;

  return (
    <div className="bg-secondary-50 min-h-screen pt-4 pb-12 section-padding">
      <div className="section-container max-w-6xl">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
          <Link href="/shop" className="hover:text-primary-800 flex items-center gap-1 transition-colors">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
          <span className="text-gray-300">/</span>
          <span className="capitalize">{product.category.replace('-', ' ')}</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 bg-secondary-100 relative aspect-square lg:aspect-auto min-h-[400px]">
            <Image
              src={product.image || "https://images.unsplash.com/photo-1606822295629-9e2feae9eecf?w=800&auto=format&fit=crop"} // Fallback placeholder
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.isPopular && (
              <div className="absolute top-6 left-6 bg-primary-600 text-white font-bold px-4 py-1.5 rounded-lg shadow-md tracking-wide text-sm">
                BEST SELLER
              </div>
            )}
            {/* Action Buttons Overlay */}
            <div className="absolute top-6 right-6 flex flex-col gap-3">
              <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur text-gray-700 flex items-center justify-center hover:text-primary-600 hover:bg-white transition-colors shadow-sm">
                <Heart size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur text-gray-700 flex items-center justify-center hover:text-primary-600 hover:bg-white transition-colors shadow-sm">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-secondary-500">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={16} fill={i <= Math.floor(rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700">{rating.toFixed(1)}</span>
              <span className="text-sm text-gray-400 underline decoration-dotted">({reviewsCount} reviews)</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-800 font-medium mb-6 font-heading">
              {product.telugu}
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-extrabold text-gray-900 tracking-tight">₹{product.price}</span>
              <span className="text-sm text-gray-500 font-medium">Incl. all taxes</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description} Built using traditional Godavari recipes with hand-pounded spices and sun-dried ingredients for the authentic amma's taste.
            </p>

            {/* Feature Mini-Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-secondary-50 p-3 rounded-2xl flex flex-col items-center justify-center text-center border border-secondary-100">
                <ShieldCheck size={24} className="text-primary-700 mb-2" />
                <span className="text-xs font-bold text-gray-700 leading-tight">100%<br/>Natural</span>
              </div>
              <div className="bg-secondary-50 p-3 rounded-2xl flex flex-col items-center justify-center text-center border border-secondary-100">
                <Truck size={24} className="text-primary-700 mb-2" />
                <span className="text-xs font-bold text-gray-700 leading-tight">Fast<br/>Delivery</span>
              </div>
              <div className="bg-secondary-50 p-3 rounded-2xl flex flex-col items-center justify-center text-center border border-secondary-100">
                <Clock size={24} className="text-primary-700 mb-2" />
                <span className="text-xs font-bold text-gray-700 leading-tight">Freshly<br/>Made</span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-8"></div>

            {/* Interactive Add to Cart & Quantity */}
            <ProductActions product={product} />

          </div>
        </div>

        {/* Product Details Tabs (Information & Ingredients) */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">Product Details</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-primary-800 mb-3 border-b border-gray-100 pb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our {product.name} is meticulously prepared in small batches to ensure the highest quality and consistent taste. 
                Using cold-pressed oils and hand-picked spices sourced directly from local farmers, we guarantee an explosion of authentic flavors in every bite. 
                Perfect for gifting or satisfying your daily cravings.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-primary-800 mb-3 border-b border-gray-100 pb-2">Key Ingredients</h3>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed text-sm md:text-base space-y-1">
                {product.category === 'pickles' && (
                  <>
                    <li>Premium Quality Spices (Red Chilli, Mustard, Fenugreek)</li>
                    <li>Cold-pressed Groundnut Oil</li>
                    <li>Crystal Salt</li>
                    <li>Freshly sourced raw materials</li>
                  </>
                )}
                {product.category === 'sweets' && (
                  <>
                    <li>Pure Desi Ghee</li>
                    <li>Organic Jaggery / Crystal Sugar</li>
                    <li>Premium Dry Fruits (Cashews, Almonds)</li>
                    <li>Cardamom Powder</li>
                  </>
                )}
                {(product.category !== 'pickles' && product.category !== 'sweets') && (
                  <>
                    <li>Premium Quality Gram Flour / Rice Flour</li>
                    <li>Double-refined Oil</li>
                    <li>Traditional Spice Blend</li>
                    <li>Curry Leaves & Peanuts</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
