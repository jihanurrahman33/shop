import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#F0F0F0] pt-28 sm:pt-32 pb-12 mt-12 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-black/10">
          {/* Brand Info */}
          <div className="col-span-2 space-y-5">
            <Link
              href="/"
              className="font-integral text-3xl font-black tracking-tight text-black inline-block"
            >
              SHOP.CO
            </Link>
            <p className="text-black/60 text-sm max-w-sm leading-relaxed">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.687.211-1.956.637-.253.402-.271 1.018-.271 1.879v1.468h4.63l-.6 3.667h-4.03v7.98H9.101z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-black">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-black/60">
              <li><Link href="/about" className="hover:text-black">About</Link></li>
              <li><Link href="/features" className="hover:text-black">Features</Link></li>
              <li><Link href="/works" className="hover:text-black">Works</Link></li>
              <li><Link href="/career" className="hover:text-black">Career</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-black">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-black/60">
              <li><Link href="/support" className="hover:text-black">Customer Support</Link></li>
              <li><Link href="/delivery" className="hover:text-black">Delivery Details</Link></li>
              <li><Link href="/terms" className="hover:text-black">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-black">
              FAQ
            </h4>
            <ul className="space-y-3 text-sm text-black/60">
              <li><Link href="/account" className="hover:text-black">Account</Link></li>
              <li><Link href="/deliveries" className="hover:text-black">Manage Deliveries</Link></li>
              <li><Link href="/orders" className="hover:text-black">Orders</Link></li>
              <li><Link href="/payments" className="hover:text-black">Payments</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-black">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-black/60">
              <li><Link href="/ebooks" className="hover:text-black">Free eBooks</Link></li>
              <li><Link href="/tutorials" className="hover:text-black">Development Tutorial</Link></li>
              <li><Link href="/blog" className="hover:text-black">How to - Blog</Link></li>
              <li><Link href="/youtube" className="hover:text-black">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Methods */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/60">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex items-center gap-2">
            <div className="bg-white rounded px-2.5 py-1.5 border border-black/10 flex items-center justify-center h-8">
              <Image src="/icons/visa.svg" alt="Visa" width={36} height={12} className="h-3 w-auto object-contain" />
            </div>
            <div className="bg-white rounded px-2.5 py-1.5 border border-black/10 flex items-center justify-center h-8">
              <Image src="/icons/mastercard.svg" alt="Mastercard" width={28} height={18} className="h-4 w-auto object-contain" />
            </div>
            <div className="bg-white rounded px-2.5 py-1.5 border border-black/10 flex items-center justify-center h-8">
              <Image src="/icons/paypal.svg" alt="Paypal" width={36} height={12} className="h-3 w-auto object-contain" />
            </div>
            <div className="bg-white rounded px-2.5 py-1.5 border border-black/10 flex items-center justify-center h-8">
              <Image src="/icons/apple-pay.svg" alt="Apple Pay" width={32} height={14} className="h-3 w-auto object-contain" />
            </div>
            <div className="bg-white rounded px-2.5 py-1.5 border border-black/10 flex items-center justify-center h-8">
              <Image src="/icons/google-pay.svg" alt="Google Pay" width={32} height={14} className="h-3 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
