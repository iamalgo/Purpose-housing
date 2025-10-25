import { Metadata } from 'next'
import LandlordBenefits from '@/components/landlords/LandlordBenefits'
import LandlordApplicationForm from '@/components/landlords/LandlordApplicationForm'
import LandlordProcess from '@/components/landlords/LandlordProcess'

export const metadata: Metadata = {
  title: 'For Landlords - Purpose Housing Management Solutions',
  description: 'Partner with Purpose Housing for guaranteed rent, damage protection, and full property management services in Dothan, AL.',
}

export default function LandlordsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-charcoal-dark to-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Partner with Purpose Housing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Guaranteed rent, comprehensive property management, and social impact—all in one partnership
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gold/20 border border-gold rounded-full">
            <span className="text-gold font-semibold text-lg">
              ✓ Guaranteed Rent  ✓ $500 Damage Protection  ✓ Zero Hassle
            </span>
          </div>
        </div>
      </section>

      <LandlordBenefits />
      <LandlordProcess />
      <LandlordApplicationForm />
    </div>
  )
}
