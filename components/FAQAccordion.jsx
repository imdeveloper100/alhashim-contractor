'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id || null)

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-surface transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary"
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
            >
              <h3 className="font-bold text-lg text-foreground pr-4">
                {item.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-content-${item.id}`}
                className="px-6 pb-6 border-t border-gray-200 bg-surface"
              >
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
