import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react'
import { company } from '../constants/company'

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Al Hashim</h3>
            <p className="text-white/70 text-sm">
              Professional general contracting services since 2009. Excellence in every project.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/70 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white transition">Services</Link></li>
              <li><Link href="/projects" className="text-white/70 hover:text-white transition">Projects</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{company.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/alhashimcontractor" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/al-hashim-contractor" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
          <p>&copy; {currentYear} Al Hashim General Contractor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
