import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Godhavarolla Ruchulu | Authentic Telugu Cuisine at Hyderabad Metro",
  description:
    "Experience the authentic flavours of the Godavari region at your nearest Hyderabad Metro station. Traditional Telugu cuisine — rice bowls, pickles, snacks, sweets & more. Order online for quick pickup!",
  keywords: [
    "Godhavarolla Ruchulu",
    "Telugu food",
    "Hyderabad Metro food",
    "Godavari cuisine",
    "authentic Telugu snacks",
    "Andhra pickles",
    "rice bowls Hyderabad",
    "metro station food stall",
    "pootharekulu",
    "karapusa",
    "avakai",
    "gongura",
  ],
  openGraph: {
    title: "Godhavarolla Ruchulu | Authentic Telugu Cuisine",
    description:
      "Authentic Godavari flavours at Hyderabad Metro stations. Order online for quick pickup!",
    type: "website",
    locale: "en_IN",
    siteName: "Godhavarolla Ruchulu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="noise-overlay">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
