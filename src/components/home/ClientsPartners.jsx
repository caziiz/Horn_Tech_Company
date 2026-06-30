import { useState } from 'react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'

function ClientLogo({ client }) {
  const [error, setError] = useState(false)

  if (error || !client.logo) {
    return (
      <div className="flex h-16 w-full items-center justify-center rounded-xl bg-slate-100 px-4">
        <span className="text-sm font-bold text-slate-600">{client.name}</span>
      </div>
    )
  }

  return (
    <img
      src={client.logo}
      alt={client.name}
      className="mx-auto h-12 max-w-full object-contain grayscale transition-all hover:grayscale-0"
      onError={() => setError(true)}
    />
  )
}

function PartnerBadge({ partner }) {
  return (
    <div className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 transition-all hover:border-brand hover:shadow-md">
      <span className="text-sm font-semibold text-slate-700">{partner.name}</span>
    </div>
  )
}

export default function ClientsPartners({ clients, partners }) {
  return (
    <section aria-labelledby="clients-heading" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Trusted By"
          title="Clients & Partners"
          subtitle="Proud to work with leading organizations across Somalia and East Africa."
        />

        <div className="mb-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
            Our Clients
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <Card key={client.name} hover={false} className="flex items-center justify-center p-4">
                <ClientLogo client={client} />
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
            Technology Partners
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <PartnerBadge key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
