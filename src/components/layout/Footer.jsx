import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/logo.png'
import useCompanyData from '../../hooks/useCompanyData'
import { formatAddress } from '../../utils/formatters'
import Container from '../common/Container'
import SocialIconBar from '../common/SocialIconBar'

export default function Footer() {
  const { company, contacts, navigation, socialMedia } = useCompanyData()
  const address = formatAddress(company.headquarters)

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt={company.name} className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{company.tagline}</p>
            <SocialIconBar socialMedia={socialMedia} className="mt-6" />
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm hover:text-brand transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>{address}</span>
              </li>
              {contacts.phone.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0 text-brand" aria-hidden="true" />
                  <a href={`tel:${phone}`} className="hover:text-brand transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand" aria-hidden="true" />
                <a href={`mailto:${contacts.email.general}`} className="hover:text-brand transition-colors">
                  {contacts.email.general}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Business Hours
            </h3>
            <ul className="space-y-1 text-sm">
              {Object.entries(contacts.workingHours).slice(0, 5).map(([day, hours]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span>{day}</span>
                  <span className="text-slate-400">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
