import { company } from '../constants/company'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Target className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {company.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                <Eye className="w-6 h-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {company.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
