export const metadata = {
  title: 'Al Hashim General Contractor | Professional Construction Services',
  description: 'Expert general contracting services including site preparation, excavation, structural work, and infrastructure development in Karachi, Pakistan.',
}

export default function Home() {
  return (
    <main id="main-content" className="bg-background">
      <section className="bg-gradient-to-r from-accent to-accent-light py-20 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional General Contracting Excellence
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              With 15+ years of experience, Al Hashim General Contractor delivers exceptional results across site preparation, excavation, structural work, and infrastructure development throughout Karachi and the UAE.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-block px-8 py-3 bg-white text-accent rounded-lg font-semibold hover:bg-gray-100 transition">
                Start Your Project
              </a>
              <a href="/about" className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2</div>
              <p className="text-muted-foreground">Primary Locations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Site Preparation',
                description: 'Comprehensive site analysis, clearing, and preparation for construction projects of any scale.'
              },
              {
                title: 'Excavation Work',
                description: 'Precision excavation services using modern equipment and experienced operators.'
              },
              {
                title: 'Structural Work',
                description: 'High-quality structural installation and foundation work meeting all safety standards.'
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose Al Hashim?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            We combine years of expertise with cutting-edge equipment and a commitment to excellence. Every project receives our full attention and professional dedication.
          </p>
          <a href="/about" className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition">
            Explore Our Work
          </a>
        </div>
      </section>
    </main>
  )
}
