// src/components/home/Features.tsx
import { Home, Users, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: <Home className="w-8 h-8 text-charcoal" />,
    title: 'Affordable Housing',
    description: 'We provide safe, clean, and affordable housing options tailored to veterans, seniors, and low-income families.',
  },
  {
    icon: <Users className="w-8 h-8 text-charcoal" />,
    title: 'Community Support',
    description: 'Our team works closely with residents to ensure a supportive, respectful, and inclusive living environment.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-charcoal" />,
    title: 'Trusted Management',
    description: 'With years of experience in housing management, we prioritize transparency, safety, and long-term stability.',
  },
]

const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-12">
          What We Offer
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded shadow hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features