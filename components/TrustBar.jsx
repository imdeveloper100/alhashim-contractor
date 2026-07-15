import { Award, MapPin, Clock, Users } from 'lucide-react'
import { company } from '../constants/company'

export default function TrustBar() {
  const yearsInBusiness = new Date().getFullYear() - company.founded

  const stats = [
    {
      icon: Clock,
      label: `Founded ${company.founded}`,
      value: `${yearsInBusiness}+ Years`,
    },
    {
      icon: MapPin,
      label: 'Locations',
      value: 'Karachi & UAE',
    },
    {
      icon: Award,
      label: 'Specialization',
      value: 'General Contracting',
    },
    {
      icon: Users,
      label: 'Team Size',
      value: '180+ Experts',
    },
  ]

  return (
    <section className="bg-surface border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
