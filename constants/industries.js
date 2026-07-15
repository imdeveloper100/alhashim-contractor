export const industries = [
  {
    slug: 'industrial-facilities',
    title: 'Industrial Facilities',
    icon: 'Factory',
    description: 'Manufacturing, textile, and heavy industry construction',
    longDescription: `We have extensive experience building manufacturing facilities, textile mills, and heavy industrial complexes. Our expertise includes specialized flooring for heavy machinery, process optimization, and compliance with industrial safety standards.`,
    services: [
      'Site Preparation & Demarcation',
      'Excavation & Foundation Work',
      'Structural & Carpentry Work',
      'Material Procurement & Supply',
      'Full Construction Services',
    ],
    expertise: [
      'Machinery installation coordination',
      'Heavy-duty industrial flooring',
      'Process optimization design',
      'Safety and compliance systems',
      'Production efficiency layouts',
    ],
    applications: [
      'Textile manufacturing facilities',
      'Heavy machinery plants',
      'Food processing units',
      'Pharmaceutical manufacturing',
      'Automotive component facilities',
    ],
  },
  {
    slug: 'commercial-properties',
    title: 'Commercial Properties',
    icon: 'Building',
    description: 'Office complexes, retail centers, and commercial facilities',
    longDescription: `We develop premium commercial properties including office towers, shopping centers, and specialized commercial complexes. Our focus is on creating modern, efficient spaces with excellent aesthetics and functionality.`,
    services: [
      'Site Preparation & Demarcation',
      'Excavation & Foundation Work',
      'Structural & Carpentry Work',
      'Architectural & Interior Specialty Work',
      'Full Construction Services',
    ],
    expertise: [
      'Modern office design',
      'Premium finishing standards',
      'Parking solutions',
      'HVAC and climate control',
      'Commercial MEP systems',
    ],
    applications: [
      'Office buildings and towers',
      'Shopping malls and retail centers',
      'Business complexes',
      'Hotel and hospitality facilities',
      'Administrative centers',
    ],
  },
  {
    slug: 'religious-structures',
    title: 'Religious Structures',
    icon: 'Landmark',
    description: 'Mosque design, construction, and renovation',
    longDescription: `We specialize in designing and constructing mosques that blend traditional Islamic architecture with modern construction techniques. Every project reflects our commitment to creating meaningful sacred spaces.`,
    services: [
      'Site Preparation & Demarcation',
      'Excavation & Foundation Work',
      'Structural & Carpentry Work',
      'Mosque Design & Construction',
      'Architectural & Interior Specialty Work',
    ],
    expertise: [
      'Islamic architectural design',
      'Acoustic optimization',
      'Proper Qibla orientation',
      'Ablution facility design',
      'Minaret and dome construction',
    ],
    applications: [
      'Neighborhood mosques',
      'Grand mosques',
      'Community prayer halls',
      'Religious school complexes',
      'Heritage restoration projects',
    ],
  },
]

export const getIndustryBySlug = (slug) => {
  return industries.find(industry => industry.slug === slug)
}

export const getFeaturedIndustries = (limit = 3) => {
  return industries.slice(0, limit)
}
