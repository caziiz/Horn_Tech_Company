import { useEffect } from 'react'
import useCompanyData from '../hooks/useCompanyData'
import Container from '../components/common/Container'
import Story, { MissionVision } from '../components/about/Story'
import CoreValues from '../components/about/CoreValues'
import Timeline from '../components/about/Timeline'
import Certifications from '../components/about/Certifications'

export default function About() {
  const { company, about, certifications, seo } = useCompanyData()

  useEffect(() => {
    document.title = `About Us | ${seo.title}`
  }, [seo.title])

  return (
    <>
      <section className="bg-gradient-to-br from-brand/20 via-white to-accent/10 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">About Us</p>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">About {company.name}</h1>
            <p className="mt-4 text-lg text-slate-600">{company.tagline}</p>
          </div>
        </Container>
      </section>

      <Story story={about.story} companyName={company.name} />
      <MissionVision mission={company.mission} vision={company.vision} />
      <CoreValues values={about.coreValues} />
      <Timeline timeline={about.timeline} />
      <Certifications certifications={certifications} />
    </>
  )
}
