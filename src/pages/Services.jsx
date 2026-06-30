import { useEffect } from 'react'
import useCompanyData from '../hooks/useCompanyData'
import Container from '../components/common/Container'
import ServicesGrid from '../components/services/ServicesGrid'
import CTA from '../components/home/CTA'

export default function Services() {
  const { company, services, seo, cta } = useCompanyData()

  useEffect(() => {
    document.title = `Services | ${seo.title}`
  }, [seo.title])

  return (
    <>
      <section className="bg-gradient-to-br from-brand/20 via-white to-accent/10 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Our Services</p>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">What We Offer</h1>
            <p className="mt-4 text-lg text-slate-600">{company.description}</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="services-grid-heading" className="py-16 md:py-24">
        <Container>
          <h2 id="services-grid-heading" className="sr-only">
            All Services
          </h2>
          <ServicesGrid services={services} />
        </Container>
      </section>

      <CTA cta={cta} tagline={company.tagline} />
    </>
  )
}
