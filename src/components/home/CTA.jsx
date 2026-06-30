import { ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'

export default function CTA({ cta, tagline }) {
  return (
    <section aria-labelledby="cta-heading" className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-brand-dark px-8 py-16 text-center md:px-16">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl" aria-hidden="true" />

          <h2 id="cta-heading" className="relative text-3xl font-bold text-white sm:text-4xl">
            {cta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/90">{tagline}</p>
          <p className="relative mt-2 text-white/70">{cta.subtitle}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact" variant="primary" className="bg-accent hover:bg-accent-dark">
              {cta.primaryButton}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button to="/services" variant="secondary" className="border-white text-white hover:bg-white hover:text-brand">
              {cta.secondaryButton}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
