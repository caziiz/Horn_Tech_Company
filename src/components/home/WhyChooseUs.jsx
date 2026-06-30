import { CheckCircle2 } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'

export default function WhyChooseUs({ reasons }) {
  return (
    <section aria-labelledby="why-heading" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why HornTech"
          title="Why Choose Us"
          subtitle="We combine local expertise with international standards to deliver exceptional results."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((reason) => (
            <Card key={reason} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-dark">
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-slate-900">{reason}</h3>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
