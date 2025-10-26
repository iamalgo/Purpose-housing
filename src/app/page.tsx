// src/app/page.tsx
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import CallToAction from '@/components/home/CallToAction'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CallToAction />
    </main>
  )
}