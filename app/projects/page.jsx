import Breadcrumb from '../../components/Breadcrumb'
import ProjectCard from '../../components/ProjectCard'
import CTABanner from '../../components/CTABanner'
import JsonLd from '../../components/JsonLd'
import { projects } from '../../constants/projects'

export const metadata = {
  title: 'Projects | Al Hashim General Contractor',
  description: 'View our portfolio of completed construction projects for leading companies across industrial and commercial sectors.',
  openGraph: {
    title: 'Our Projects - Al Hashim General Contractor',
    description: 'Successful construction projects and case studies',
  },
}

export default function Projects() {
  return (
    <>
      <JsonLd schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': '/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': '/projects' },
        ],
      }} />
      
      <Breadcrumb items={[{ label: 'Projects' }]} />

      <main id="main-content">
        <section className="py-12 md:py-16 bg-surface border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful construction projects completed for leading companies across various industries.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to Partner With Us?"
          description="Let's discuss how we can bring your next project to life"
          cta_text="Start Your Project"
        />
      </main>
    </>
  )
}
