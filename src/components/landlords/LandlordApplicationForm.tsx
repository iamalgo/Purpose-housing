'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  propertyAddress: string
  unitCount: string
  propertyType: string
  availabilityDate: string
  additionalInfo: string
}

const LandlordApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/landlord-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-charcoal-dark mb-4">
            Become a Partner Landlord
          </h2>
          <p className="text-xl text-gray-600">
            Start your partnership today—we'll respond within 24 hours
          </p>
        </div>

        {isSuccess && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <p className="text-green-800 font-semibold">
              Application received! We'll contact you within 24 hours to discuss next steps.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Full Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Email Address *
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Phone Number *
            </label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Property Address */}
          <div className="mb-6">
            <label htmlFor="propertyAddress" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Property Address *
            </label>
            <input
              {...register('propertyAddress', { required: 'Property address is required' })}
              type="text"
              id="propertyAddress"
              placeholder="123 Main Street, Dothan, AL 36303"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            {errors.propertyAddress && (
              <p className="mt-1 text-sm text-red-600">{errors.propertyAddress.message}</p>
            )}
          </div>

          {/* Unit Count */}
          <div className="mb-6">
            <label htmlFor="unitCount" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Number of Available Units *
            </label>
            <select
              {...register('unitCount', { required: 'Please select number of units' })}
              id="unitCount"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="1">1 unit</option>
              <option value="2-3">2-3 units</option>
              <option value="4-5">4-5 units</option>
              <option value="6+">6+ units</option>
            </select>
            {errors.unitCount && (
              <p className="mt-1 text-sm text-red-600">{errors.unitCount.message}</p>
            )}
          </div>

          {/* Property Type */}
          <div className="mb-6">
            <label htmlFor="propertyType" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Property Type *
            </label>
            <select
              {...register('propertyType', { required: 'Please select property type' })}
              id="propertyType"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="single-family">Single Family Home</option>
              <option value="multi-family">Multi-Family Property</option>
              <option value="apartment">Apartment Complex</option>
              <option value="duplex">Duplex/Triplex</option>
              <option value="other">Other</option>
            </select>
            {errors.propertyType && (
              <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
            )}
          </div>

          {/* Availability Date */}
          <div className="mb-6">
            <label htmlFor="availabilityDate" className="block text-sm font-semibold text-charcoal-dark mb-2">
              When is the property available? *
            </label>
            <input
              {...register('availabilityDate', { required: 'Availability date is required' })}
              type="date"
              id="availabilityDate"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            {errors.availabilityDate && (
              <p className="mt-1 text-sm text-red-600">{errors.availabilityDate.message}</p>
            )}
          </div>

          {/* Additional Info */}
          <div className="mb-6">
            <label htmlFor="additionalInfo" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Additional Information
            </label>
            <textarea
              {...register('additionalInfo')}
              id="additionalInfo"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="Tell us about your property, rental expectations, or any questions..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                Submit Partnership Application
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </button>

          <p className="mt-4 text-sm text-gray-600 text-center">
            By submitting, you agree to a property assessment and partnership discussion
          </p>
        </form>
      </div>
    </section>
  )
}

export default LandlordApplicationForm
