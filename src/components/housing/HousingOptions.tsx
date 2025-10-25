import { Users, User, CheckCircle, Wifi, Shield, Lock } from 'lucide-react'

const options = [
  {
    icon: Users,
    name: 'Shared Room Housing',
    price: '$650',
    period: '/month',
    description: 'Comfortable shared living space with private amenities',
    features: [
      'Shared bedroom with compatible roommate',
      'Access to common areas',
      'Smart lock technology',
      'WiFi included',
      'Utilities included',
      '24/7 maintenance support',
      'On-site security',
      'Community activities',
    ],
    recommended: false,
  },
  {
    icon: User,
    name: 'Private Room Housing',
    price: '$850',
    period: '/month',
    description: 'Your own private space with full amenities',
    features: [
      'Private bedroom with lock',
      'Shared common areas',
      'Smart lock technology',
      'WiFi included',
      'Utilities included',
      '24/7 maintenance support',
      'On-site security',
      'Priority maintenance',
      'Digital access control',
    ],
    recommended: true,
  },
]

const HousingOptions = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-charcoal-dark mb-4">
            Choose Your Housing Option
          </h2>
          <p className="text-xl text-gray-600">
            All options include modern amenities and smart technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => {
            const Icon = option.icon
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  option.recommended ? 'ring-2 ring-gold' : ''
                }`}
              >
                {option.recommended && (
                  <div className="bg-gold text-white text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal-dark mb-2">
                    {option.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-charcoal-dark">
                      {option.price}
                    </span>
                    <span className="text-gray-600">{option.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Wifi className="w-10 h-10 text-gold mx-auto mb-4" />
            <h4 className="font-semibold text-charcoal-dark mb-2">Smart Technology</h4>
            <p className="text-sm text-gray-600">
              All units equipped with smart locks and WiFi
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Shield className="w-10 h-10 text-gold mx-auto mb-4" />
            <h4 className="font-semibold text-charcoal-dark mb-2">Security Monitoring</h4>
            <p className="text-sm text-gray-600">
              24/7 security for your peace of mind
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Lock className="w-10 h-10 text-gold mx-auto mb-4" />
            <h4 className="font-semibold text-charcoal-dark mb-2">Digital Access</h4>
            <p className="text-sm text-gray-600">
              Keyless entry with mobile app control
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HousingOptions
