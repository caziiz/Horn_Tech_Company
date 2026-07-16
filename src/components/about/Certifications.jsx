import { Award } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

// Greating function 

export default function Certifications({ certifications }) {
  return (
    <section aria-labelledby="certifications-heading" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Recognition"
          title="Certifications & Partnerships"
          subtitle="Industry-recognized credentials that validate our commitment to quality."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-6 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-brand hover:shadow-md"
            >
              <Award size={18} className="text-brand" aria-hidden="true" />
              {cert}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
