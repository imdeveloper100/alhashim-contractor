import { company } from '../constants/company'
import * as Icons from 'lucide-react'

export default function CoreValuesGrid() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            These principles guide every decision and action we take.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {company.coreValues.map((value, index) => {
            const IconComponent = Icons[value.icon] || Icons.Zap
            return (
              <div
                key={index}
                className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <IconComponent className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
