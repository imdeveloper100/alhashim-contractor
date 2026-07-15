import Link from 'next/link'
import Button from './Button'
import { ArrowRight, Building2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-8 bg-secondary rounded" />
              <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
                Excellence in Construction
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Building Excellence Since {new Date().getFullYear() - 15}
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-lg text-pretty">
              Al Hashim General Contractor delivers professional construction solutions with quality, integrity, and reliability. From site preparation to complete turnkey projects across Karachi and UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Get a Quotation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <p className="text-sm text-gray-100">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <p className="text-sm text-gray-100">Major Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">2</div>
                <p className="text-sm text-gray-100">Countries</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden">
              {/* Decorative shapes */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-24 h-24 border-4 border-white/30 rounded-lg transform -rotate-45" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-secondary/30 rounded-lg" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white/20 rounded-full" />
              </div>
              <Building2 className="w-24 h-24 text-white/30 relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
