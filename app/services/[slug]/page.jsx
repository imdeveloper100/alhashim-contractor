import Breadcrumb from '../../../components/Breadcrumb'
import CTABanner from '../../../components/CTABanner'
import JsonLd from '../../../components/JsonLd'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { services, getServiceBySlug, getRelatedServices } from '../../../constants/services'

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  return {
    title: `${service?.title} | Al Hashim General Contractor`,
    description: service?.description,
    openGraph: {
      title: service?.title,
      description: service?.description,
    },
  }
}

export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }))
}

export default function ServiceDetail({ params }) {
  const service = getServiceBySlug(params.slug)
  const related = getRelatedServices(params.slug, 3)

  if (!service) {
    return notFound()
  }

  const IconComponent = Icons[service.icon] || Icons.Building2

  return (
    <>
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': service.title,
        'description': service.description,
        'provider': {
          '@type': 'Organization',
          'name': 'Al Hashim General Contractor',
        },
      }} />
      
      <Breadcrumb items={[
        { label: 'Services', href: '/services' },
        { label: service.title },
      ]} />

      <main id="main-content">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.title}</h1>
                <p className="text-lg text-gray-100">{service.shortDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {service.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 my-12">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-3 h-3 bg-primary rounded-full" />
                      </span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Details</h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.details}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-surface border-2 border-primary/20 rounded-xl p-8 text-center my-12">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-gray-700 mb-6">
                Contact our team to discuss how this service can benefit your project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {related.length > 0 && (
          <section className="py-16 md:py-24 bg-surface">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((relatedService) => {
                  const RelatedIcon = Icons[relatedService.icon] || Icons.Building2
                  return (
                    <Link
                      key={relatedService.slug}
                      href={`/services/${relatedService.slug}`}
                      className="group"
                    >
                      <div className="h-full p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                          <RelatedIcon className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{relatedService.title}</h3>
                        <p className="text-sm text-gray-600">{relatedService.shortDescription}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        <CTABanner
          title="Have Questions?"
          description="Our team is ready to help with your construction needs"
        />
      </main>
    </>
  )
}

function notFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="text-primary hover:text-primary-dark">
          Back to Services
        </Link>
      </div>
    </div>
  )
}
