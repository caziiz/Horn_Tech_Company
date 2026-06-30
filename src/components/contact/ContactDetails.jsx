import { Mail, MapPin, Phone } from 'lucide-react'
import { formatAddress, formatLocationAddress } from '../../utils/formatters'
import Card from '../common/Card'

export default function ContactDetails({ contacts, headquarters, locations }) {
  const address = formatAddress(headquarters)

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="mb-4 text-lg font-bold text-slate-900">Contact Information</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <p className="font-medium text-slate-900">Head Office</p>
              <p className="text-sm text-slate-600">{address}</p>
            </div>
          </div>

          {contacts.phone.map((phone) => (
            <div key={phone} className="flex items-center gap-3">
              <Phone size={20} className="shrink-0 text-brand" aria-hidden="true" />
              <a href={`tel:${phone}`} className="text-slate-600 hover:text-brand transition-colors">
                {phone}
              </a>
            </div>
          ))}

          {Object.entries(contacts.email).map(([type, email]) => (
            <div key={type} className="flex items-center gap-3">
              <Mail size={20} className="shrink-0 text-brand" aria-hidden="true" />
              <div>
                <span className="text-xs font-medium uppercase text-slate-400">{type}</span>
                <a href={`mailto:${email}`} className="block text-slate-600 hover:text-brand transition-colors">
                  {email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {locations.length > 0 && (
        <Card>
          <h3 className="mb-4 text-lg font-bold text-slate-900">Our Offices</h3>
          <div className="space-y-4">
            {locations.map((location) => (
              <div key={location.office} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <p className="font-medium text-slate-900">{location.office}</p>
                <p className="text-sm text-slate-600">{formatLocationAddress(location)}</p>
                <a href={`tel:${location.phone}`} className="mt-1 block text-sm text-brand hover:underline">
                  {location.phone}
                </a>
                <a href={`mailto:${location.email}`} className="block text-sm text-slate-600 hover:text-brand">
                  {location.email}
                </a>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
