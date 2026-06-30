import { Quote, Star } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'

export default function Testimonials({ testimonials }) {
  return (
    <section aria-labelledby="testimonials-heading" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from businesses we've helped transform."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name + testimonial.company}>
              <Quote size={24} className="mb-4 text-brand/40" aria-hidden="true" />
              <div className="mb-3 flex gap-1" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'fill-accent text-accent' : 'text-slate-300'}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic">&ldquo;{testimonial.comment}&rdquo;</p>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
