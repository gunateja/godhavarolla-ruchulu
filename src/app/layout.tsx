import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileBottomBar from '@/components/MobileBottomBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Godhavarolla Ruchulu | Authentic Godavari Pickles & Sweets',
  description:
    'Freshly prepared homemade authentic Telugu cuisine, pickles, and sweets with no preservatives. Delivered to your doorstep.',
  keywords: [
    'Godhavarolla Ruchulu',
    'Telugu food',
    'Godavari pickles',
    'homemade sweets',
    'authentic Telugu snacks',
    'Andhra pickles',
    'online food delivery',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col pt-16 md:pt-20 pb-16 md:pb-0">
        <CartProvider>
          {/* Main App Navigation */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1 w-full bg-[#FFF8E1]">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Global Persistent Elements */}
          <FloatingWhatsApp />
          <MobileBottomBar />
        </CartProvider>
      </body>
    </html>
  );
}
