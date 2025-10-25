import { 
  DollarSign, 
  Shield, 
  Wrench, 
  UserCheck, 
  Smartphone, 
  BarChart, 
  Clock,
  Heart
} from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Guaranteed Rent Payment',
    description: 'Receive your rent on time, every time. No more chasing payments or dealing with late fees.',
    highlight: 'On-time guarantee',
  },
  {
    icon: Shield,
    title: '$500 Damage Protection',
    description: 'Comprehensive damage coverage protects your investment and provides peace of mind.',
    highlight: 'Property secured',
  },
  {
    icon: Wrench,
    title: 'Full Maintenance Coordination',
    description: 'We handle all maintenance requests, coordinate repairs, and ensure property upkeep.',
    highlight: '24/7 support',
  },
  {
    icon: UserCheck,
    title: 'Comprehensive Tenant Screening',
    description: 'Thorough background checks and vetting ensure compatible, responsible tenants.',
    highlight: 'Quality tenants',
  },
  {
    icon: Smartphone,
    title: 'Smart Technology Integration',
    description: 'Smart locks, monitoring systems, and digital access control protect your property.',
    highlight: 'Modern security',
  },
  {
    icon: BarChart,
    title: 'Digital Management Portal',
    description: 'Track everything online: payments, maintenance, communications, and property performance.',
    highlight: 'Full transparency',
  },
  {
    icon: Clock,
    title: 'Reduced Vacancy Time',
    description: 'Our network of pre-qualified applicants means faster turnaround between tenants.',
    highlight: 'Quick placement',
  },
  {
    icon: Heart,
    title: 'Social Impact Partnership',
    description: 'Make a difference by providing housing to veterans, seniors, and families in need.',
    highlight: 'Purpose-driven',
  },
]

const LandlordBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-charcoal-dark mb-4">
            Why Landlords Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than property management—a complete partnership for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {benefit.description}
                </p>
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                  {benefit.highlight}
                </span>
              </div>
            )
          })}
        </div>

        {/* Featured Benefit Callout */}
        <div className="mt-16 bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-8 border-2 border-gold">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl font-bold text-charcoal-dark mb-4">
              Up to 2 Months Rent Advance Available
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Get started with immediate cash flow. We can advance up to two months' rent to qualified landlords, ensuring you're covered from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">Average Partnership Value</p>
                <p className="text-2xl font-bold text-gold">$18,000+/year</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">Average Vacancy Reduction</p>
                <p className="text-2xl font-bold text-gold">65%</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">Landlord Satisfaction</p>
                <p className="text-2xl font-bold text-gold">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandlordBenefits
