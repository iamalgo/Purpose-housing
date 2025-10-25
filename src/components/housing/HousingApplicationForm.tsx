'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  housingType: string
  moveInDate: string
  hudVash: string
  additionalNotes: string
}

const HousingApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/housing-application', {
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
            Apply for Housing
          </h2>
          <p className="text-xl text-gray-600">
            Fill out this form and we'll contact you within 24 hours
          </p>
        </div>

        {isSuccess && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <p className="text-green-800 font-semibold">
              Application received! We'll contact you within 24 hours.
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

          {/* Housing Type */}
          <div className="mb-6">
            <label htmlFor="housingType" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Preferred Housing Type *
            </label>
            <select
              {...register('housingType', { required: 'Please select a housing type' })}
              id="housingType"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">Select an option</option>
              <option value="shared">Shared Room Housing ($650/month)</option>
              <option value="private">Private Room Housing ($850/month)</option>
            </select>
            {errors.housingType && (
              <p className="mt-1 text-sm text-red-600">{errors.housingType.message}</p>
            )}
          </div>

          {/* Move-in Date */}
          <div className="mb-6">
            <label htmlFor="moveInDate" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Desired Move-In Date *
            </label>
            <input
              {...register('moveInDate', { required: 'Move-in date is required' })}
              type="date"
              id="moveInDate"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            {errors.moveInDate && (
              <p className="mt-1 text-sm text-red-600">{errors.moveInDate.message}</p>
            )}
          </div>

          {/* HUD-VASH Status */}
          <div className="mb-6">
            <label htmlFor="hudVash" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Are you a HUD-VASH participant? *
            </label>
            <select
              {...register('hudVash', { required: 'Please select an option' })}
              id="hudVash"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes, I participate in HUD-VASH</option>
              <option value="no">No</option>
              <option value="unsure">Not sure / Need information</option>
            </select>
            {errors.hudVash && (
              <p className="mt-1 text-sm text-red-600">{errors.hudVash.message}</p>
            )}
          </div>

          {/* Additional Notes */}
          <div className="mb-6">
            <label htmlFor="additionalNotes" className="block text-sm font-semibold text-charcoal-dark mb-2">
              Additional Information or Special Requirements
            </label>
            <textarea
              {...register('additionalNotes')}
              id="additionalNotes"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="Tell us about any specific needs, accessibility requirements, or questions..."
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
                Submit Application
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </button>

          <p className="mt-4 text-sm text-gray-600 text-center">
            By submitting this form, you agree to be contacted by Purpose Housing Management Solutions
          </p>
        </form>
      </div>
    </section>
  )
}

export default HousingApplicationForm
