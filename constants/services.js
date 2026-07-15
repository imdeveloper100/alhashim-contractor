export const services = [
  {
    slug: 'site-preparation-demarcation',
    title: 'Site Preparation & Demarcation',
    icon: 'MapPin',
    shortDescription: 'Professional land surveying and site demarcation services',
    description: `Comprehensive site preparation services including accurate surveying, demarcation, and ground leveling. We ensure proper site boundaries, drainage planning, and foundation preparation for all construction projects.`,
    benefits: [
      'Accurate GPS surveying and demarcation',
      'Proper drainage and grading solutions',
      'Compliance with local regulations',
      'Detailed site documentation',
      'Equipment and labor management',
    ],
    details: `Our site preparation services include complete ground surveys, boundary demarcation, topographic mapping, and drainage analysis. We use modern surveying equipment and techniques to ensure accuracy and compliance with all local building codes.`,
  },
  {
    slug: 'excavation-foundation-work',
    title: 'Excavation & Foundation Work',
    icon: 'Hammer',
    shortDescription: 'Deep excavation and specialized foundation solutions',
    description: `Expert excavation and foundation construction including deep excavation for underground structures, pile driving, and foundation laying for all building types. We handle complex geological conditions with precision.`,
    benefits: [
      'Deep excavation up to required depths',
      'Pile driving and reinforcement',
      'Foundation engineering solutions',
      'Soil testing and analysis',
      'Safety-first excavation practices',
    ],
    details: `We specialize in all types of foundation work including strip foundations, raft foundations, and specialized deep piling. Our team conducts thorough soil investigations and provides engineered solutions for complex site conditions.`,
  },
  {
    slug: 'structural-carpentry-work',
    title: 'Structural & Carpentry Work',
    icon: 'BuildingIcon',
    shortDescription: 'Complete structural framing and carpentry solutions',
    description: `Steel and concrete structural framing, custom carpentry, roofing systems, and floor construction. We deliver high-quality structural work that meets all engineering specifications.`,
    benefits: [
      'Steel and concrete frame erection',
      'Quality carpentry and joinery',
      'Roofing systems installation',
      'Floor systems and decking',
      'Precision engineering execution',
    ],
    details: `Our structural team executes complete building frames, custom cabinetry, roof systems, and interior framing. We work closely with engineers to ensure structural integrity and adherence to all specifications.`,
  },
  {
    slug: 'mosque-design-construction',
    title: 'Mosque Design & Construction',
    icon: 'Dome',
    shortDescription: 'Specialized mosque architecture and construction',
    description: `Specialized services for mosque design, construction, and renovation. We combine traditional Islamic architectural elements with modern construction techniques to create beautiful, functional prayer spaces.`,
    benefits: [
      'Islamic architectural expertise',
      'Proper acoustic design',
      'Ablution area planning',
      'Minaret and dome construction',
      'Prayer space optimization',
    ],
    details: `We have extensive experience in mosque construction including proper orientation, acoustic treatments, segregated facilities, and beautiful architectural elements. Our designs respect Islamic principles while meeting modern safety and comfort standards.`,
  },
  {
    slug: 'material-procurement',
    title: 'Material Procurement & Supply',
    icon: 'Package',
    shortDescription: 'Quality materials sourcing and supply chain management',
    description: `Comprehensive material sourcing, procurement, and logistics management. We ensure timely delivery of quality materials at competitive rates through established supplier relationships.`,
    benefits: [
      'Competitive material sourcing',
      'Quality assurance checks',
      'Logistics and delivery management',
      'Inventory tracking and management',
      'Vendor relationship management',
    ],
    details: `We manage complete material procurement for projects including steel, cement, aggregates, timber, and finishing materials. Our supplier relationships ensure quality products at fair prices with reliable delivery schedules.`,
  },
  {
    slug: 'architectural-interior-specialty',
    title: 'Architectural & Interior Specialty Work',
    icon: 'Paintbrush',
    shortDescription: 'Specialized finishing and interior design work',
    description: `Expert finishing work including plaster, tiling, cladding, interior design, and decorative elements. We transform structural work into beautiful, functional spaces.`,
    benefits: [
      'High-quality plaster finishes',
      'Ceramic and specialty tiling',
      'Cladding and facade systems',
      'Interior design and styling',
      'Custom decorative elements',
    ],
    details: `Our finishing team handles premium plaster work, decorative tiling, wall cladding, and complete interior finishing. We bring design expertise to every project, creating beautiful and durable finishes.`,
  },
  {
    slug: 'full-construction-services',
    title: 'Full Construction Services',
    icon: 'Building2',
    shortDescription: 'Complete turnkey construction solutions',
    description: `End-to-end construction management from planning to completion. We serve as your single point of contact for all construction needs, coordinating all trades and ensuring project success.`,
    benefits: [
      'Single point of responsibility',
      'Coordinated project management',
      'Timeline and budget control',
      'Quality assurance at all stages',
      'Post-completion support',
    ],
    details: `We offer complete construction services where we manage all aspects of your project including planning, permits, execution, quality control, and completion. Our integrated approach ensures efficiency and quality.`,
  },
]

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug)
}

export const getRelatedServices = (currentSlug, limit = 3) => {
  return services
    .filter(service => service.slug !== currentSlug)
    .slice(0, limit)
}
