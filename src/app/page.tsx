import Link from 'next/link'
import { Home, Users, Shield, Heart, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal-dark to-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Safe, Affordable Housing with <span className="text-gold">Dignity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Purpose Housing Management Solutions provides quality housing for veterans, seniors 55+, and low-income households in Dothan, AL
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/housing" 
                className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Apply for Housing
                <Home className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/landlords" 
                className="bg-white hover:bg-gray-100 text-charcoal-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Partner With Us
                <Shield className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal-dark mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Providing housing solutions with respect and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal-dark mb-3">
                Veterans
              </h3>
              <p className="text-gray-600">
                Honoring those who served with safe, affordable housing. HUD-VASH participants welcome.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal-dark mb-3">
                Seniors 55+
              </h3>
              <p className="text-gray-600">
                Comfortable, accessible housing designed with seniors' needs in mind.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal-dark mb-3">
                Low-Income Households
              </h3>
              <p className="text-gray-600">
                Quality housing options that fit your budget without compromising on safety or comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Housing Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal-dark mb-4">
              Our Housing Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-charcoal-dark mb-2">
                  Shared Room Housing
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-charcoal-dark">$650</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Shared bedroom with compatible roommate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">All utilities included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">WiFi and smart lock technology</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden ring-2 ring-gold">
              <div className="bg-gold text-white text-center py-2 font-semibold text-sm">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-charcoal-dark mb-2">
                  Private Room Housing
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-charcoal-dark">$850</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Private bedroom with lock</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">All utilities included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority maintenance and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/housing" 
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Full Details & Apply
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold to-gold-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Ready to Find Your Home?
          </h2>
          <p className="text-xl mb-8">
            Apply today and take the first step toward safe, comfortable housing.
          </p>
          <Link 
            href="/housing" 
            className="inline-flex items-center bg-white text-charcoal-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Application
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-charcoal-dark mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help answer your questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full mb-4">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal-dark mb-2">Phone</h3>
              <a href="tel:205-523-6459" className="text-gray-600 hover:text-gold">
                205-523-6459
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full mb-4">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal-dark mb-2">Email</h3>
              <a href="mailto:adriennew@limyefoundation.org" className="text-gray-600 hover:text-gold">
                adriennew@limyefoundation.org
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal-dark mb-2">Location</h3>
              <p className="text-gray-600">
                212 W Troy St<br />Dothan, AL 36303
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}