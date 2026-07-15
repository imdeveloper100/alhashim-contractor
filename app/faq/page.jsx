import { faqs } from '../../constants/faqs'
import Breadcrumb from '../../components/Breadcrumb'
import JsonLd from '../../components/JsonLd'
import FAQAccordion from '../../components/FAQAccordion'
import CTABanner from '../../components/CTABanner'

export const metadata = {
  title: 'FAQs | Al Hashim Contractor',
  description: 'Find answers to common questions about our contracting services, capabilities, and experience.',
}

export default function FAQPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
  ]

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <main id="main-content" className="bg-background">
      <JsonLd schema={jsonLdData} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our services and capabilities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </div>

      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Didn&apos;t find your answer?</h2>
          <p className="text-muted-foreground mb-8">
            Our team is ready to help. Contact us directly for any specific questions.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition font-semibold">
            Get in Touch
          </a>
        </div>
      </div>

      <CTABanner />
    </main>
  )
}
