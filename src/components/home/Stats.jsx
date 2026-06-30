import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import StatCounter from '../common/StatCounter'

export default function Stats({ statistics }) {
  return (
    <section aria-labelledby="stats-heading" className="bg-slate-900 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Impact"
          title="Numbers That Speak"
          subtitle="Trusted by businesses across Somalia and East Africa."
          className="[&_h2]:text-white [&_p]:text-slate-400 [&_p:first-of-type]:text-accent"
        />
        <StatCounter statistics={statistics} />
      </Container>
    </section>
  )
}
