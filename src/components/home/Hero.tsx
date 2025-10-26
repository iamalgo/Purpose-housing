// src/components/home/Hero.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white text-center py-20 px-4">
      <Image
        src="/publiclogo.png"
        alt="Purpose Housing Logo"
        width={120}
        height={48}
        className="mx-auto mb-6"
        priority
      />
      <h1 className="text-4xl md:text-5xl font-bold text-charcoal-dark mb-6">
        Safe, Affordable Housing for Veterans & Seniors
      </h1>
      <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-8">
        Purpose Housing Management Solutions is committed to providing dignified living for veterans, seniors 55+, and low-income households in Dothan, Alabama.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Get In Touch
      </Link>
    </section>
  );
}