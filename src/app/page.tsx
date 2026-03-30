import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Award, Truck, Heart, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { menuItems } from '@/data/menu';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  const bestSellers = menuItems.filter(item => item.isPopular).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen pt-4">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[550px] w-[95%] mx-auto rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.png"
            alt="Traditional Telugu Cuisine Spread"
            fill
            className="object-cover object-center scale-105 animate-spin-slow duration-[120s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-900/30"></div>
          <div className="absolute inset-0 bg-primary-950/20 mix-blend-multiply"></div>
          {/* Decorative Pattern overlay */}
          <div className="absolute inset-0 opacity-10 pattern-dots" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 flex flex-col items-center text-center mt-8">
          <div className="animate-fade-in-up delay-100 bg-secondary-500/90 text-primary-950 text-xs sm:text-sm font-extrabold tracking-widest px-5 py-2 rounded-full mb-8 uppercase inline-flex items-center gap-2 backdrop-blur-sm shadow-[0_0_20px_rgba(255,193,7,0.3)]">
            <span className="w-2 h-2 rounded-full bg-primary-800 animate-pulse"></span>
            Ammamma&apos;s Secret Recipes
          </div>
          <h1 className="animate-fade-in-up delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.15] mb-6 max-w-4xl drop-shadow-2xl">
            Authentic Godavari <br />
            Homemade <span className="text-gradient">Pickles & Sweets</span>
          </h1>
          <p className="animate-fade-in-up delay-300 text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium drop-shadow-md px-4 leading-relaxed">
            Freshly prepared with hand-pounded spices, no preservatives, delivered straight to your doorstep. Experience the true taste of tradition.
          </p>
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
            <Link href="/shop" className="btn-secondary !text-lg !px-10 h-14 group">
              Order Now <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#categories" className="btn-outline !text-white !border-white/30 hover:!border-white hover:!bg-white/10 !text-lg !px-10 h-14 backdrop-blur-md">
              View Menu
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-[fadeInDown_1.5s_infinite]"></div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SECTION */}
      <section id="categories" className="py-24 bg-gradient-to-b from-white to-secondary-50 relative">
        <div className="section-container">
          <div className="text-center mb-14 md:mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              ★ Explore Our Menu
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">Shop by Category</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
            {[
              { title: 'Authentic Pickles', id: 'pickles', img: '/images/avakai.png', count: '4 Items', color: 'from-primary-900/90' },
              { title: 'Traditional Sweets', id: 'sweets', img: '/images/pootharekulu.png', count: '3 Items', color: 'from-secondary-900/90' },
              { title: 'Crispy Snacks', id: 'snacks', img: '/images/karapusa.png', count: '3 Items', color: 'from-amber-900/90' }
            ].map((cat, i) => (
              <Link 
                key={cat.id} 
                href={`/shop?category=${cat.id}`} 
                className={`group relative h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 block animate-fade-in-up delay-${(i+1)*100}`}
              >
                <div className="absolute inset-0 img-zoom bg-secondary-100">
                  <Image src={cat.img} alt={cat.title} fill className="object-cover" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                
                <div className="absolute top-6 right-6">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {cat.count}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-extrabold font-heading text-white mb-2 leading-tight">{cat.title}</h3>
                  <div className="flex items-center gap-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="font-semibold text-sm">Shop Now</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BEST SELLERS */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-100 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="section-container relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 px-4 sm:px-0 gap-6">
            <div className="text-center sm:text-left">
              <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                ★ Customer Favorites
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-0">Best Sellers</h2>
            </div>
            <Link href="/shop" className="hidden sm:inline-flex items-center gap-2 text-primary-800 font-bold hover:text-primary-600 group bg-primary-50 px-5 py-2.5 rounded-xl transition-colors">
              View All Menu <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="carousel-scroll px-4 md:px-0">
            {bestSellers.map(product => (
              <div key={product.id} className="carousel-item w-[280px] sm:w-[300px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="mt-10 px-4 sm:hidden">
            <Link href="/shop" className="btn-outline w-full !h-14 !rounded-2xl bg-white flex items-center justify-center gap-2">
              View All Menu <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-b from-[#3b0909] to-primary-950 text-white relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10 pattern-grid mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="section-container relative z-10 px-4">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-secondary-400 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              ★ Our Promise
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4">The Godavari Difference</h2>
            <p className="text-primary-200 max-w-2xl mx-auto text-lg leading-relaxed">
              We bring the authentic taste of Godavari straight to your dining table, preserving recipes that are over a century old.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: Heart, title: 'Homemade Recipes', desc: 'Passed down through 3 generations of Telugu grandmothers.' },
              { icon: Leaf, title: 'Zero Preservatives', desc: '100% natural ingredients. We use native cold-pressed oils only.' },
              { icon: Truck, title: 'Fresh Delivery', desc: 'Securely packed in glass/sealed pouches & shipped within 24 Hrs.' },
              { icon: Award, title: 'Authentic Taste', desc: 'Sourced directly from the Godavari region of Andhra Pradesh.' }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-secondary-400 group-hover:scale-110 group-hover:bg-primary-800 transition-all duration-300 shadow-xl shadow-black/20">
                  <feature.icon size={36} className="group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-white">{feature.title}</h3>
                <p className="text-primary-200 text-sm leading-relaxed max-w-[250px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 6. STORY SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 relative w-full">
              <div className="aspect-[4/5] object-cover w-full rounded-[2rem] overflow-hidden shadow-2xl relative z-20 border-[6px] border-white">
                <Image 
                  src="/images/story-cooking.png" 
                  alt="Traditional Cooking" 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Decorative block behind image */}
              <div className="absolute -bottom-6 -right-6 w-[90%] h-[90%] bg-gradient-to-br from-secondary-300 to-secondary-500 rounded-[2rem] z-10 hidden sm:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-full blur-2xl z-0"></div>
            </div>
            
            <div className="flex-1 lg:pl-6">
              <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">★ Our Heritage</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
                A Journey of <br/>
                <span className="text-gradient">100 Years</span> of Taste
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  It all started in a small kitchen overlooking the Godavari river. Our grandmother, with her stone grinder and brass vessels, created masterpieces that the entire extended family craved.
                </p>
                <p>
                  Today, Godhavarolla Ruchulu preserves that exact heritage. We refuse to mass-produce or use artificial preservatives. Every pickle is sun-dried, every sweet is hand-rolled, and every snack is fried in cold-pressed oil, just the way she taught us.
                </p>
              </div>
              <Link href="/about" className="btn-primary h-14 !px-10 text-lg shadow-xl shadow-primary-900/20 group inline-flex items-center gap-2">
                Discover Our Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
