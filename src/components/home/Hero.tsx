// src/components/home/Hero.tsx
'use client'

import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-white text-charcoal py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
          Safe, Affordable Housing for Veterans & Seniors
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Purpose Housing Management Solutions is committed to providing dignified living for veterans, seniors 55+, and low-income households in Dothan, Alabama.
        </p>
        <Link href="/contact" className="inline-block bg-charcoal text-white px-6 py-3 rounded hover:bg-charcoal-light transition">
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

export default Hero