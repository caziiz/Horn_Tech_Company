import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

export default function Timeline({ timeline }) {
  return (
    <section aria-labelledby="timeline-heading" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our History"
          title="Company Timeline"
          subtitle="Key milestones in our journey to becoming East Africa's leading IT partner."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-brand/30 md:left-1/2 md:-translate-x-px" aria-hidden="true" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden w-1/2 md:block" />

                <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-slate-900 md:left-1/2">
                  {String(item.year).slice(2)}
                </div>

                <div className={`ml-12 w-full md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-sm font-bold text-brand">{item.year}</span>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
