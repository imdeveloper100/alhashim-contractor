import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import JsonLd from '../../components/JsonLd'
import ContactForm from '../../components/ContactForm'
import { company } from '../../constants/company'

export const metadata = {
  title: 'Contact Us | Al Hashim Contractor',
  description: 'Get in touch with Al Hashim General Contractor. We&apos;re ready to discuss your project and provide expert contracting solutions.',
}

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ]

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Al Hashim General Contractor',
    description: metadata.description,
  }

  return (
    <main id="main-content" className="bg-background">
      <JsonLd schema={jsonLdData} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Contact us today to discuss your needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-border rounded-lg p-8 text-center">
            <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground break-all">{company.email}</p>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 text-center">
            <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">{company.phone}</p>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 text-center">
            <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground text-sm">{company.address}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Additional Information</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Quick Response</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Service Areas</h3>
                <p className="text-muted-foreground text-sm">
                  We primarily serve Karachi and surrounding areas in Pakistan, with additional experience in the United Arab Emirates.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Emergency Contact</h3>
                <p className="text-muted-foreground text-sm">
                  For site emergencies or urgent issues, please call our mobile line for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-6">
            Fill out the form above or give us a call. Our team is ready to provide you with expert guidance.
          </p>
        </div>
      </div>
    </main>
  )
}
