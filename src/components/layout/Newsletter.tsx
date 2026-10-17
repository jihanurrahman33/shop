"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative -mb-20 sm:-mb-24 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-black text-white rounded-[20px] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        {/* Left Heading */}
        <h2 className="font-integral text-2xl sm:text-3xl md:text-4xl font-black max-w-lg leading-tight uppercase">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        {/* Right Form */}
        <div className="w-full md:w-auto md:min-w-[350px]">
          {submitted ? (
            <div className="bg-white/10 text-white px-6 py-3.5 rounded-full text-center text-sm font-medium">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-black text-sm rounded-full pl-12 pr-4 py-3 placeholder:text-black/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black text-sm font-medium rounded-full py-3 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Subscribe to Newsletter
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
