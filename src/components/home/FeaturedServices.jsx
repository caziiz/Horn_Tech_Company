import { ArrowRight, Check } from 'lucide-react'
import { getIcon } from '../../utils/iconMap'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'
import Button from '../common/Button'

export default function FeaturedServices({ services }) {
  const featured = services.slice(0, 3)

  return (
    <section aria-labelledby="services-heading" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Featured Services"
          subtitle="Comprehensive technology solutions tailored for Somali businesses and organizations across East Africa."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => {
            const Icon = getIcon(service.icon)
            return (
              <Card key={service.id}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check size={16} className="shrink-0 text-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button to="/services" variant="secondary">
            View All Services
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
