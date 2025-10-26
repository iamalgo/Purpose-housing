import Link from 'next/link'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://page.gensparksite.com/v1/base64_upload/d37a5b27-c83d-4ee8-9af4-29f7aae15c8a.png" 
              alt="Purpose Housing Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Providing safe, affordable housing with dignity and respect for veterans, seniors, and families in need.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/housing" className="text-gray-400 hover:text-gold transition-colors">
                  Find Housing
                </Link>
              </li>
              <li>
                <Link href="/landlords" className="text-gray-400 hover:text-gold transition-colors">
                  For Landlords
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  212 W Troy St<br />Dothan, AL 36303
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a href="tel:205-523-6459" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  205-523-6459
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a href="mailto:adriennew@limyefoundation.org" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  adriennew@limyefoundation.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold">Our Values</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <Heart className="w-4 h-4 text-gold mr-2" />
                Dignity
              </li>
              <li className="flex items-center">
                <Heart className="w-4 h-4 text-gold mr-2" />
                Respect
              </li>
              <li className="flex items-center">
                <Heart className="w-4 h-4 text-gold mr-2" />
                Inclusivity
              </li>
              <li className="flex items-center">
                <Heart className="w-4 h-4 text-gold mr-2" />
                Trust
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Purpose Housing Management Solutions. All rights reserved.</p>
          <p className="mt-2">
            Powered by{' '}
            <a 
              href="https://www.iamalgo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark transition-colors font-semibold"
            >
              IAMALGO
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
