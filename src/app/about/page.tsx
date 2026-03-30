import Image from 'next/image';
import { ShieldCheck, Truck, Heart, ArrowRight, Leaf, History } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-secondary-50 min-h-screen py-16 md:py-24 section-padding relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="section-container max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">★ Our Journey</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
            The Story of <br className="hidden md:block"/> <span className="text-gradient">Godhavarolla Ruchulu</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Preserving a 100-year-old culinary legacy from the heart of Andhra Pradesh, bringing authentic homemaker flavors to your table.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-gray-200/50 border border-white mb-20 md:mb-32 overflow-hidden relative group">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Image */}
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white z-10 relative">
                <Image 
                  src="/images/story-cooking.png" 
                  alt="Traditional Cooking in Godavari" 
                  fill 
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-heading font-extrabold text-2xl drop-shadow-lg">Where it all began.</p>
                  <p className="text-primary-100 font-medium text-sm mt-1">Our first kitchen in East Godavari (1924)</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary-100 rounded-full blur-2xl z-0"></div>
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-primary-100 rounded-full blur-xl z-0"></div>
            </div>

            {/* Right Content */}
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4 text-primary-800 font-heading font-extrabold text-2xl mb-2">
                <History size={32} className="text-primary-600" /> Origins
              </div>
              
              <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
                <p>
                  In the fertile plains of East Godavari, our grandmother (Ammamma) was known for a single skill: turning fresh, local ingredients into culinary masterpieces using her stone grinder and brass vessels. Her Avakai and Pootharekulu were the absolute pride of our village.
                </p>
                <p>
                  As subsequent generations moved to cities, the one thing we consistently missed was that unmistakable traditional taste. Store-bought products loaded with preservatives simply couldn't compare.
                </p>
                <p>
                  Thus, <strong className="text-primary-800">Godhavarolla Ruchulu</strong> was born.
                </p>
                <p>
                  We didn't just want to start a business; we wanted to preserve a fading art form. Today, our products are made following her exact meticulously written recipes. We continue to sun-dry our spices, hand-pound our masalas, and use purely 100% cold-pressed oils.
                </p>
              </div>

              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-heading font-extrabold text-primary-900 leading-none mb-1">100+</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Years of Legacy</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-extrabold text-primary-900 leading-none mb-1">50k+</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Happy Customers</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">★ Core Values</span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">Our Promise to You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-[2rem] p-10 text-center shadow-xl shadow-gray-200/40 border border-white hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-20 h-20 bg-secondary-50 text-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-secondary-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-secondary-500/30">
              <Leaf size={36} />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-gray-900 mb-4">Pure & Natural</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">
              We strictly forbid artificial colors, synthetic flavors, and chemical preservatives. Everything is 100% natural, as it was a century ago.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 text-center shadow-xl shadow-gray-200/40 border border-white hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-20 h-20 bg-primary-50 text-primary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary-800 group-hover:text-white transition-all shadow-sm group-hover:shadow-primary-800/30">
              <Heart size={36} />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-gray-900 mb-4">Made with Love</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">
              Our food is prepared by experienced rural homemakers using traditional generational techniques, ensuring every bite carries the warmth of home.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 text-center shadow-xl shadow-gray-200/40 border border-white hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-emerald-500/30">
              <ShieldCheck size={36} />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-gray-900 mb-4">Safety Assured</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">
              FSSAI compliant facilities. Securely double-packed in pristine hygienic conditions to prevent leakage and retain maximum freshness.
            </p>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="mt-20 md:mt-32 relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-primary-900 to-[#3b0909] text-center p-12 md:p-20 shadow-2xl shadow-primary-900/40">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-secondary-400 rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight drop-shadow-md">
              Experience the Taste <br/> of Telugu Tradition
            </h2>
            <p className="text-primary-100 max-w-xl mx-auto mb-10 text-lg font-medium">Ready to take a trip down memory lane? Explore our menu and bring home the true flavors of Godavari.</p>
            <Link href="/shop" className="btn-secondary h-16 !px-12 text-lg !rounded-2xl shadow-2xl shadow-secondary-500/30 inline-flex items-center gap-3">
              Explore Menu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
