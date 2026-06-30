import { ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'

export default function Hero({ company }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-brand/20 via-white to-accent/10 py-20 md:py-32"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
            {company.industry} · Est. {company.founded}
          </p>
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {company.tagline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            {company.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/services" variant="primary">
              Our Services
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
