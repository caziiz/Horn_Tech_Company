import { useEffect } from 'react'
import useCompanyData from '../hooks/useCompanyData'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import SocialIconBar from '../components/common/SocialIconBar'
import ContactForm from '../components/contact/ContactForm'
import ContactDetails from '../components/contact/ContactDetails'
import MapEmbed from '../components/contact/MapEmbed'
import BusinessHours from '../components/contact/BusinessHours'

export default function Contact() {
  const { company, contacts, locations, socialMedia, seo, pageIntros } = useCompanyData()

  useEffect(() => {
    document.title = `Contact | ${seo.title}`
  }, [seo.title])

  return (
    <>
      <section className="bg-gradient-to-br from-brand/20 via-white to-accent/10 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Get in Touch</p>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-slate-600">{pageIntros.contact}</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="contact-form-heading" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 id="contact-form-heading" className="sr-only">
                Contact Form
              </h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactDetails
                contacts={contacts}
                headquarters={company.headquarters}
                locations={locations}
              />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="map-heading" className="pb-16 md:pb-24">
        <Container>
          <SectionHeading eyebrow="Find Us" title="Our Location" />
          <h2 id="map-heading" className="sr-only">
            Office Map
          </h2>
          <MapEmbed map={contacts.map} companyName={company.name} />
        </Container>
      </section>

      <section aria-labelledby="hours-heading" className="bg-slate-50 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 id="hours-heading" className="sr-only">
                Business Hours
              </h2>
              <BusinessHours workingHours={contacts.workingHours} />
            </div>
            <div>
              <SectionHeading
                eyebrow="Connect"
                title="Follow Us"
                subtitle="Stay updated with our latest news, projects, and technology insights."
                align="left"
                className="mb-6"
              />
              <SocialIconBar socialMedia={socialMedia} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
