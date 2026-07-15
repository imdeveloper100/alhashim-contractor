import Link from 'next/link'
import { company, socialLinks } from '../constants/company'
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HGC</span>
              </div>
              <div>
                <h3 className="font-bold text-white">{company.shortCode}</h3>
                <p className="text-xs text-gray-400">{company.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Professional construction and contracting services since {company.founded}.
            </p>
            <div className="flex gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/site-preparation-demarcation" className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  Site Preparation
                </Link>
              </li>
              <li>
                <Link href="/services/excavation-foundation-work" className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  Excavation & Foundation
                </Link>
              </li>
              <li>
                <Link href="/services/structural-carpentry-work" className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  Structural Work
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <address className="text-gray-400 not-italic">
                  {company.address}
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-gray-400 hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
            <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary rounded">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
