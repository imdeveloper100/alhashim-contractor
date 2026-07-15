import { industries } from '../../constants/industries'
import Breadcrumb from '../../components/Breadcrumb'
import JsonLd from '../../components/JsonLd'
import Button from '../../components/Button'
import CTABanner from '../../components/CTABanner'

export const metadata = {
  title: 'Industries We Serve | Al Hashim Contractor',
  description: 'Explore the diverse industries we serve with expert contracting solutions including construction, infrastructure, commercial, and industrial projects.',
}

export default function IndustriesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
  ]

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://al-hashim-contractor.com${item.href}`,
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Industries We Serve</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We bring expertise and precision to diverse sectors, delivering excellence across every industry we serve.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.id} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                <div className="text-white text-5xl">{industry.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>
                
                {industry.specializations && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">Our Expertise:</p>
                    <ul className="space-y-2">
                      {industry.specializations.map((spec, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Button variant="secondary" className="w-full">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </main>
  )
}
