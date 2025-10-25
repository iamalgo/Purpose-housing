import { FileCheck, Home, Users, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: FileCheck,
    title: 'Submit Application',
    description: 'Complete our simple landlord application with your property details.',
    timeline: 'Day 1',
  },
  {
    icon: Home,
    title: 'Property Review',
    description: 'We conduct a walkthrough and assess suitability for our housing program.',
    timeline: 'Days 2-3',
  },
  {
    icon: Users,
    title: 'Tenant Matching',
    description: 'We match pre-screened, qualified tenants to your property.',
    timeline: 'Days 4-7',
  },
  {
    icon: CheckCircle,
    title: 'Move-In & Management',
    description: 'Tenant moves in, and we begin full property management services.',
    timeline: 'Day 8+',
  },
]

const LandlordProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-dark to-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Simple Partnership Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From application to occupied unit in as little as 8 days
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gold/30 -ml-4"></div>
                )}
                
                <div className="relative bg-charcoal rounded-xl p-6 border border-gray-700 hover:border-gold transition-colors duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-gold font-semibold text-sm mb-2">{step.timeline}</div>
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-xl p-6">
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-gold">Fast-Track Available:</span> Properties that meet all criteria can be occupied in as few as 3-5 days
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandlordProcess
