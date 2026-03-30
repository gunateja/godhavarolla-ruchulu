import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-[#FFF8E1] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1546549095-5a67cadfa1f6?w=1200&auto=format&fit=crop" 
          alt="Traditional Indian Cooking" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-900/60"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-secondary-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">
            The Godavari Legacy
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto font-medium">
            Preserving a century of traditional flavors from the heart of Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding max-w-4xl mx-auto -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100">
          
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
            How It Began
          </h2>
          
          <div className="prose prose-lg prose-red mx-auto text-gray-600 leading-relaxed mb-12">
            <p>
              Decades ago, on the fertile banks of the Godavari river, our grandmother — known affectionately as Ammamma — perfected the art of pickling. Using stone grinders, locally cold-pressed peanut oils, and the fiery chillies native to the region, her recipes became legendary among family and friends.
            </p>
            <p>
              We established <strong>Godhavarolla Ruchulu</strong> to ensure her incredible legacy of taste wasn't lost to modern mass production. When you taste our Avakai or our Pootharekulu, you are experiencing the exact recipe she used in 1960.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100 text-center">
              <h3 className="text-xl font-bold font-heading text-primary-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To deliver uncompromising, authentic Telugu flavors to doorsteps everywhere, maintaining 100% natural processes without chemical preservatives.
              </p>
            </div>
            <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100 text-center">
              <h3 className="text-xl font-bold font-heading text-primary-800 mb-3">Our Promise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every jar of pickle and box of sweets is hand-made in small batches to guarantee the premium quality and nostalgic taste of home.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Experience the Taste</h3>
            <Link href="/shop" className="btn-primary !px-10">
              Browse Our Menu
            </Link>
          </div>
          
        </div>
      </section>

    </div>
  );
}
