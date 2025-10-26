// src/components/home/CallToAction.tsx
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="bg-charcoal text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-6">
          Ready to Learn More?
        </h2>
        <p className="text-lg mb-8">
          Contact us today to explore housing opportunities or partner with Purpose Housing Management Solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>(334) 555-1234</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>info@purposehousing.org</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Dothan, AL</span>
          </div>
        </div>
        <Link href="/contact" className="inline-block bg-white text-charcoal px-6 py-3 rounded hover:bg-gray-100 transition">
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default CallToAction