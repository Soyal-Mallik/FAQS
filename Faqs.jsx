import React, { useState } from 'react'

import { faqsData } from './Data'
import Faq from './Faq'

export default function Faqs() {
    const[faqs, setFaqs] = useState(faqsData)
  return (
    <main>
        <section>
            <h1>Frequently Asked Questions</h1>
            {faqs.map(faq => <Faq key={faq.id} {...faq} />)}
        </section>
    </main>
  )
}
