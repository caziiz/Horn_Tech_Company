import { useEffect } from 'react'
import useCompanyData from '../hooks/useCompanyData'
import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import FeaturedServices from '../components/home/FeaturedServices'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'
import ClientsPartners from '../components/home/ClientsPartners'
import CTA from '../components/home/CTA'

export default function Home() {
  const { company, services, about, statistics, testimonials, clients, partners, seo, cta } =
    useCompanyData()

  useEffect(() => {
    document.title = seo.title
  }, [seo.title])

  return (
    <>
      <Hero company={company} />
      <Intro company={company} />
      <FeaturedServices services={services} />
      <WhyChooseUs reasons={about.whyChooseUs} />
      <Stats statistics={statistics} />
      <Testimonials testimonials={testimonials} />
      <ClientsPartners clients={clients} partners={partners} />
      <CTA cta={cta} tagline={company.tagline} />
    </>
  )
}
