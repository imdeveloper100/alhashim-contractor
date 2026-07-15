// Note: Phone numbers for client contacts are withheld from public display
// for privacy reasons. Team members can access this information internally.

export const projects = [
  {
    slug: 'home-care-textiles',
    company: 'Home Care Textiles',
    director: 'Mr. Ahmed Malik',
    // Phone withheld from public display
    location: 'Karachi, Pakistan',
    year: 2022,
    status: 'Completed',
    projectDescription: `Complete construction of a modern textile manufacturing facility with integrated warehousing. The project included foundational work, structural framing, specialized flooring for machinery, and comprehensive finishing.`,
    scope: [
      'Site preparation and excavation',
      'Structural steel framing',
      'Industrial flooring systems',
      'Electrical infrastructure',
      'Plumbing and HVAC systems',
      'Interior finishing',
      'Quality assurance',
    ],
    specifications: {
      totalArea: '12,500 sq ft',
      buildingHeight: '45 feet',
      floors: 3,
      constructionDuration: '14 months',
      workforce: '120+ workers',
    },
    highlights: [
      'Advanced industrial flooring suitable for heavy machinery',
      'Efficient layout design optimizing production flow',
      'Completed on schedule and within budget',
      'Excellent safety record',
    ],
    services: [
      'site-preparation-demarcation',
      'excavation-foundation-work',
      'structural-carpentry-work',
      'full-construction-services',
    ],
  },
  {
    slug: 'ideal-group-companies',
    company: 'Ideal Group of Companies',
    director: 'Engr. Hassan Raza',
    // Phone withheld from public display
    location: 'Karachi, Pakistan',
    year: 2021,
    status: 'Completed',
    projectDescription: `Construction of a commercial office complex with modern amenities. The facility includes administrative offices, conference rooms, cafeteria, and parking facilities with premium finishing throughout.`,
    scope: [
      'Land surveying and demarcation',
      'Foundation and structural work',
      'Commercial interior design',
      'Premium finishing with imported tiles',
      'Complete MEP installation',
      'Safety and security systems',
      'Landscaping and exterior design',
    ],
    specifications: {
      totalArea: '18,000 sq ft',
      buildingHeight: '60 feet',
      floors: 4,
      parkingSpaces: 75,
      constructionDuration: '16 months',
      workforce: '150+ workers',
    },
    highlights: [
      'State-of-the-art office spaces',
      'HVAC systems for optimal comfort',
      'Abundant natural lighting design',
      'Exceeded client expectations on quality',
    ],
    services: [
      'site-preparation-demarcation',
      'excavation-foundation-work',
      'structural-carpentry-work',
      'architectural-interior-specialty',
      'full-construction-services',
    ],
  },
  {
    slug: 'miangul-industries',
    company: 'Miangul Industries',
    director: 'Mr. Rashid Ahmad',
    // Phone withheld from public display
    location: 'Karachi, Pakistan',
    year: 2023,
    status: 'Completed',
    projectDescription: `Large-scale industrial manufacturing facility with water tank infrastructure. The project involved constructing production areas, storage facilities, and specialized water storage systems with capacity for 500 cubic meters.`,
    scope: [
      'Comprehensive site preparation',
      'Deep excavation for foundations',
      'Industrial structural framing',
      'Water tank construction - 500 cubic meter capacity',
      'Elevated water distribution system',
      'Industrial finishing and cladding',
      'Drainage and utility systems',
    ],
    specifications: {
      totalArea: '25,000 sq ft',
      buildingHeight: '50 feet',
      floors: 2,
      waterTankCapacity: '500 cubic meters',
      foundationDepth: '12 feet',
      constructionDuration: '18 months',
      workforce: '180+ workers',
    },
    highlights: [
      'Advanced water tank engineering',
      'Precision structural calculations',
      'Efficient industrial layout',
      'Completed with zero safety incidents',
      'Strong structural integrity verified',
    ],
    services: [
      'site-preparation-demarcation',
      'excavation-foundation-work',
      'structural-carpentry-work',
      'material-procurement',
      'full-construction-services',
    ],
  },
]

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug)
}

export const getProjectsByService = (serviceSlug) => {
  return projects.filter(project =>
    project.services.includes(serviceSlug)
  )
}

export const getFeaturedProjects = (limit = 3) => {
  return projects.slice(0, limit)
}
