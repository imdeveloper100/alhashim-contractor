import Link from 'next/link'
import { services } from '../constants/services'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function ServicesGrid({ limit }) {
  const displayServices = limit ? services.slice(0, limit) : services

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Comprehensive construction services tailored to your project needs, from site preparation to complete turnkey solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service) => {
            const IconComponent = Icons[service.icon] || Icons.Building2
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <div className="h-full p-6 md:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {limit && services.length > limit && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
