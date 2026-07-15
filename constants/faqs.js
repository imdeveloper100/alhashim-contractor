export const faqs = [
  {
    id: 'faq-1',
    question: 'When was Al Hashim General Contractor established?',
    answer: 'Al Hashim General Contractor was founded in 2009. We started as Mohd Farooq Plaster & Tiles Contracting in the UAE, expanded to Pakistan in 2013, and became Al Hashim General Contractor in 2014. With over 15 years of experience, we have built a strong reputation for excellence in construction.',
  },
  {
    id: 'faq-2',
    question: 'What services does Al Hashim General Contractor provide?',
    answer: 'We offer comprehensive construction services including site preparation and demarcation, excavation and foundation work, structural and carpentry work, mosque design and construction, material procurement and supply, architectural and interior specialty work, and complete turnkey construction solutions.',
  },
  {
    id: 'faq-3',
    question: 'Where does Al Hashim General Contractor operate?',
    answer: 'Our primary operations are based in Karachi, Pakistan, with our headquarters at A-256, Block-T, North Nazimabad. We also have established operations in the United Arab Emirates and serve clients across both countries.',
  },
  {
    id: 'faq-4',
    question: 'What types of projects have you completed?',
    answer: 'We have successfully completed projects for leading companies including Home Care Textiles, Ideal Group of Companies, and Miangul Industries. Our projects span industrial facilities, commercial complexes, and specialized structures with project values ranging from small to large-scale undertakings.',
  },
  {
    id: 'faq-5',
    question: 'How can I request a quotation for my project?',
    answer: 'You can contact us through our website contact form, by phone at 0333-2242472, or by email at faryousafzai@gmail.com. We will promptly evaluate your project requirements and provide a detailed quotation.',
  },
  {
    id: 'faq-6',
    question: 'What is your approach to project safety and quality?',
    answer: 'Safety and quality are paramount in all our projects. We implement comprehensive safety protocols, maintain strict quality assurance standards, and ensure compliance with all local building codes and regulations. Our team receives regular training to maintain our high standards.',
  },
  {
    id: 'faq-7',
    question: 'Do you offer both small and large-scale projects?',
    answer: 'Yes, we handle projects of all sizes from small commercial ventures to large industrial complexes. Our experience and resources allow us to manage projects with various scopes and complexities while maintaining consistent quality standards.',
  },
  {
    id: 'faq-8',
    question: 'What makes Al Hashim General Contractor different from other contractors?',
    answer: 'Our commitment to quality, integrity, and reliability sets us apart. We combine decades of expertise with modern construction techniques, maintain excellent safety records, and prioritize client satisfaction. Our diverse portfolio demonstrates our capability to handle various project types professionally.',
  },
]

export const getFAQSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
