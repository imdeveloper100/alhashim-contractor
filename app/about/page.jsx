import Breadcrumb from '../../components/Breadcrumb'
import CoreValuesGrid from '../../components/CoreValuesGrid'
import JsonLd from '../../components/JsonLd'
import { company } from '../../constants/company'
import { BookOpen, Users } from 'lucide-react'

export const metadata = {
  title: 'About Al Hashim General Contractor | Company History & Mission',
  description: 'Learn about Al Hashim General Contractor. Founded in 2009, we specialize in professional construction and contracting services across Karachi and UAE.',
  openGraph: {
    title: 'About Us - Al Hashim General Contractor',
    description: 'Trusted construction services since 2009',
  },
}

export default function About() {
  return (
    <>
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': '/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': '/about' },
        ],
      }} />
      
      <Breadcrumb items={[{ label: 'About Us' }]} />

      <main id="main-content">
        {/* Company Overview */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About Al Hashim General Contractor
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {company.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-primary">Founded</h3>
                    <p className="text-gray-600">{company.founded}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-primary">Locations</h3>
                    <p className="text-gray-600">Karachi, Pakistan & UAE</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-primary">Specialization</h3>
                    <p className="text-gray-600">General Contracting</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-primary">NTN</h3>
                    <p className="text-gray-600">{company.ntn}</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block relative h-96 bg-gradient-to-br from-mint-light to-primary/20 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-primary/20" />
              </div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />

              <div className="space-y-12">
                {company.history.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex md:w-1/2 justify-center">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                    </div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white p-6 rounded-xl border-2 border-primary/20 hover:border-primary transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-bold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">{company.mission}</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl border-2 border-secondary/20">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">{company.vision}</p>
              </div>
            </div>
          </div>
        </section>

        <CoreValuesGrid />

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals leading Al Hashim General Contractor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {company.team.map((member, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-2 border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Email:</span> {member.email}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Phone:</span> {member.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
