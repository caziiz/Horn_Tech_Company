import { Building2, Calendar, Users } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'

export default function Intro({ company }) {
  const highlights = [
    { icon: Calendar, label: 'Founded', value: company.founded },
    { icon: Users, label: 'Team Size', value: `${company.employees}+` },
    { icon: Building2, label: 'Headquarters', value: `${company.headquarters.city}, ${company.headquarters.country}` },
  ]

  return (
    <section aria-labelledby="intro-heading" className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title={`Welcome to ${company.name}`}
              align="left"
              className="mb-6"
            />
            <p className="text-lg leading-relaxed text-slate-600">{company.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {highlights.map(({ icon: Icon, label, value }) => (
              <Card key={label} className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-center lg:text-center xl:items-start xl:text-left">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <p className="text-xl font-bold text-slate-900">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
