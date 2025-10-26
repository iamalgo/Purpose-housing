'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-charcoal-dark text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center space-x-6 text-sm">
            <a href="tel:205-523-6459" className="flex items-center hover:text-gold transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              205-523-6459
            </a>
            <a href="mailto:adriennew@limyefoundation.org" className="flex items-center hover:text-gold transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              adriennew@limyefoundation.org
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="https://page.gensparksite.com/v1/base64_upload/d37a5b27-c83d-4ee8-9af4-29f7aae15c8a.png" 
              alt="Purpose Housing Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-charcoal-dark hover:text-gold transition-colors font-medium">
              Home
            </Link>
            <Link href="/housing" className="text-charcoal-dark hover:text-gold transition-colors font-medium">
              Find Housing
            </Link>
            <Link href="/landlords" className="text-charcoal-dark hover:text-gold transition-colors font-medium">
              For Landlords
            </Link>
            <Link href="/contact" className="text-charcoal-dark hover:text-gold transition-colors font-medium">
              Contact
            </Link>
            <Link 
              href="/housing" 
              className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-charcoal-dark"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-charcoal-dark hover:text-gold transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/housing" 
              className="block text-charcoal-dark hover:text-gold transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Housing
            </Link>
            <Link 
              href="/landlords" 
              className="block text-charcoal-dark hover:text-gold transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              For Landlords
            </Link>
            <Link 
              href="/contact" 
              className="block text-charcoal-dark hover:text-gold transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/housing" 
              className="block bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-lg font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation