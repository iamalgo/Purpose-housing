import { Metadata } from 'next'
import HousingOptions from '@/components/housing/HousingOptions'
import HousingApplicationForm from '@/components/housing/HousingApplicationForm'

export const metadata: Metadata = {
  title: 'Housing Options - Purpose Housing Management Solutions',
  description: 'Apply for affordable housing in Dothan, AL. Shared and private room options available for veterans, seniors, and low-income families.',
}

export default function HousingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charcoal-dark to-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Find Your Home Today
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Affordable, safe, and dignified housing options designed for your needs
          </p>
        </div>
      </section>

      <HousingOptions />
      <HousingApplicationForm />
    </div>
  )
}
