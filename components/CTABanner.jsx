import Link from 'next/link'
import Button from './Button'
import { ArrowRight } from 'lucide-react'

export default function CTABanner({ title, description, cta_text, cta_href }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title || 'Ready to Start Your Project?'}
        </h2>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          {description || 'Contact us today for a free consultation and quotation'}
        </p>
        <Link href={cta_href || '/contact'} className="inline-flex">
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center justify-center gap-2"
          >
            {cta_text || 'Get a Quotation'}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
