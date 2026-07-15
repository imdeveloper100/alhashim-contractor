import Link from 'next/link'
import { Building2, MapPin, Calendar, ArrowRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="h-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300">
        {/* Placeholder for project image */}
        <div className="relative h-48 bg-gradient-to-br from-mint-light to-primary/20 flex items-center justify-center overflow-hidden">
          <Building2 className="w-16 h-16 text-primary/20 group-hover:scale-110 transition-transform" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.company}
              </h3>
              <p className="text-sm text-gray-600">Director: {project.director}</p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-2 mb-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-primary" />
              {project.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4 text-primary" />
              Completed {project.year}
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-4 line-clamp-2">
            {project.projectDescription}
          </p>

          <div className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
            View Project
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
