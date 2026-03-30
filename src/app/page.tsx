import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Award, Truck, Heart } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { menuItems } from '@/data/menu';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  const bestSellers = menuItems.filter(item => item.isPopular).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1626779836561-c852fc6360c7?q=80&w=2070&auto=format&fit=crop"
            alt="Traditional Telugu Cuisine Spread"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-primary-900/30 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 section-container px-6 flex flex-col items-center text-center mt-12 md:mt-24">
          <span className="bg-secondary-500/90 text-primary-900 text-xs md:text-sm font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase inline-block backdrop-blur-sm shadow-lg">
            Ammamma&apos;s Secret Recipes
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6 max-w-4xl drop-shadow-lg">
            Authentic Godavari Homemade <span className="text-secondary-400">Pickles & Sweets</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium drop-shadow-md">
            Freshly prepared, no preservatives, delivered straight to your doorstep. Experience the true taste of tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/shop" className="btn-secondary !text-lg !px-8">
              Order Now
            </Link>
            <Link href="#categories" className="btn-outline !text-white !border-white hover:!bg-white/10 !text-lg !px-8 backdrop-blur-sm">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SECTION */}
      <section id="categories" className="py-20 bg-secondary-50 section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">Shop by Category</h2>
            <div className="w-20 h-1.5 bg-primary-800 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Authentic Pickles', id: 'pickles', img: 'https://images.unsplash.com/photo-1606822295629-9e2feae9eecf?w=600&auto=format&fit=crop' },
              { title: 'Traditional Sweets', id: 'sweets', img: 'https://images.unsplash.com/photo-1644783321591-dd0418c3debf?w=600&auto=format&fit=crop' },
              { title: 'Crispy Snacks', id: 'snacks', img: 'https://images.unsplash.com/photo-1596450504781-420fe8c20577?w=600&auto=format&fit=crop' }
            ].map((cat) => (
              <Link key={cat.id} href={`/shop?category=${cat.id}`} className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all block">
                <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <h3 className="text-2xl font-bold font-heading text-white">{cat.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-secondary-500 text-primary-900 flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BEST SELLERS */}
      <section className="py-20 bg-white section-padding border-t border-gray-100">
        <div className="section-container">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">Best Sellers</h2>
              <div className="w-16 h-1 bg-secondary-500 rounded-full"></div>
            </div>
            <Link href="/shop" className="hidden sm:flex text-primary-800 font-semibold hover:text-primary-600 items-center gap-1 transition-colors">
              View All <span className="text-lg">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <Link href="/shop" className="sm:hidden btn-outline w-full mt-8">
            View All Products
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-primary-900 text-white section-padding relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-800 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500 rounded-full blur-[120px] opacity-20"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">The Godavari Difference</h2>
            <p className="text-primary-200 max-w-2xl mx-auto">We bring the authentic taste of Godavari straight to your dining table, without any compromises.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: Heart, title: 'Homemade Recipes', desc: 'Passed down through generations' },
              { icon: Leaf, title: 'No Preservatives', desc: '100% natural ingredients only' },
              { icon: Truck, title: 'Fresh Delivery', desc: 'Securely packed & shipped quickly' },
              { icon: Award, title: 'Authentic Taste', desc: 'True flavors of Andhra & Telangana' }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-800/50 border border-primary-700 flex items-center justify-center mb-6 text-secondary-400">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
                <p className="text-primary-200 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 6. STORY SECTION */}
      <section className="py-24 bg-secondary-50 section-padding">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1546549095-5a67cadfa1f6?w=800&auto=format&fit=crop" 
                  alt="Traditional Cooking" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Decorative block behind image */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary-200 rounded-3xl z-0 transform translate-x-2 translate-y-2"></div>
            </div>
            
            <div className="flex-1">
              <span className="text-primary-800 font-bold tracking-wider uppercase text-sm mb-4 block">Our Heritage</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
                A Journey of <span className="text-primary-800">100 Years</span> of Taste
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                It all started in a small kitchen overlooking the Godavari river. Our grandmother, with her stone grinder and brass vessels, created masterpieces that the entire extended family craved.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, Godhavarolla Ruchulu preserves that exact heritage. We refuse to mass-produce or use artificial preservatives. Every pickle is sun-dried, every sweet is hand-rolled, and every snack is fried in cold-pressed oil, just the way she taught us.
              </p>
              <Link href="/about" className="btn-primary">
                Read Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
