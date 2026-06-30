import { getIcon } from '../../utils/iconMap'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'

export default function CoreValues({ values }) {
  return (
    <section aria-labelledby="values-heading" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Core Values"
          subtitle="The principles that guide everything we do at HornTech Solutions."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {values.map((value) => {
            const Icon = getIcon(value.icon)
            return (
              <Card key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
