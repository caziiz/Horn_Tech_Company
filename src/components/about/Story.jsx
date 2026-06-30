import { Target, Eye } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'

export default function Story({ story, companyName }) {
  const paragraphs = story.split('\n\n')

  return (
    <section aria-labelledby="story-heading" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Story"
          title={`The ${companyName} Journey`}
          align="left"
        />
        <div className="max-w-3xl space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function MissionVision({ mission, vision }) {
  return (
    <section aria-labelledby="mission-heading" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Target size={28} aria-hidden="true" />
            </div>
            <h2 id="mission-heading" className="text-2xl font-bold text-slate-900">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{mission}</p>
          </Card>

          <Card>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent-dark">
              <Eye size={28} aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{vision}</p>
          </Card>
        </div>
      </Container>
    </section>
  )
}
