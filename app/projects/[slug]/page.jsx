import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { projects } from '../../../constants/projects'
import Breadcrumb from '../../../components/Breadcrumb'
import JsonLd from '../../../components/JsonLd'
import Button from '../../../components/Button'
import CTABanner from '../../../components/CTABanner'

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }
  
  return {
    title: `${project.name} | Al Hashim Contractor`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: 'article',
    },
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">Sorry, we could not find this project.</p>
          <Link href="/projects">
            <Button variant="primary">Back to Projects</Button>
          </Link>
        </div>
      </main>
    )
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: project.name, href: `/projects/${project.slug}` },
  ]

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.image,
    dateCreated: project.year,
    creator: {
      '@type': 'Organization',
      name: 'Al Hashim General Contractor',
    },
  }

  return (
    <main id="main-content" className="bg-background">
      <JsonLd data={jsonLdData} />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <div className="bg-muted">
        <div className="container mx-auto px-4 py-12">
          <Link href="/projects" className="inline-flex items-center text-accent hover:text-accent-dark transition mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.name}</h1>
          <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {project.year && (
              <div>
                <span className="text-sm text-muted-foreground">Year</span>
                <p className="font-semibold text-foreground">{project.year}</p>
              </div>
            )}
            {project.location && (
              <div>
                <span className="text-sm text-muted-foreground">Location</span>
                <p className="font-semibold text-foreground">{project.location}</p>
              </div>
            )}
            {project.category && (
              <div>
                <span className="text-sm text-muted-foreground">Category</span>
                <p className="font-semibold text-foreground">{project.category}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {project.image && (
        <div className="relative w-full h-[400px] md:h-[600px] my-12">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Details</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                <p>{project.fullDescription || project.description}</p>
              </div>
            </section>

            {project.highlights && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="bg-muted p-8 rounded-lg h-fit">
            <h3 className="text-xl font-bold text-foreground mb-6">Project Information</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Category</p>
                <p className="font-semibold text-foreground">{project.category}</p>
              </div>
              {project.location && (
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Location</p>
                  <p className="font-semibold text-foreground">{project.location}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Completed</p>
                  <p className="font-semibold text-foreground">{project.year}</p>
                </div>
              )}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Interested in similar work?</p>
                <Link href="/contact">
                  <Button variant="primary" className="w-full">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CTABanner />
    </main>
  )
}
