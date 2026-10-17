import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { TopBanner } from "@/components/layout/TopBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Newsletter } from "@/components/layout/Newsletter";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SHOP.CO | Find Clothes That Match Your Style",
  description:
    "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black font-satoshi selection:bg-black selection:text-white">
        <CartProvider>
          <TopBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Newsletter />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
