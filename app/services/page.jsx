import Breadcrumb from '../../components/Breadcrumb'
import ServicesGrid from '../../components/ServicesGrid'
import CTABanner from '../../components/CTABanner'
import JsonLd from '../../components/JsonLd'

export const metadata = {
  title: 'Services | Al Hashim General Contractor',
  description: 'Comprehensive construction services including site preparation, excavation, structural work, mosque design, and more.',
  openGraph: {
    title: 'Our Services - Al Hashim General Contractor',
    description: 'Professional construction services across all project phases',
  },
}

export default function Services() {
  return (
    <>
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': '/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': '/services' },
        ],
      }} />
      
      <Breadcrumb items={[{ label: 'Services' }]} />

      <main id="main-content">
        <section className="py-12 md:py-16 bg-surface border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive construction solutions tailored to your specific needs, from initial site preparation through project completion.
            </p>
          </div>
        </section>

        <ServicesGrid />

        <CTABanner
          title="Need a Specific Service?"
          description="Contact our team to discuss your project requirements"
          cta_text="Get in Touch"
        />
      </main>
    </>
  )
}
