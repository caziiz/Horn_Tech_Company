import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import useCompanyData from '../../hooks/useCompanyData'
import Container from '../common/Container'
import Button from '../common/Button'

export default function Header() {
  const { company, navigation } = useCompanyData()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-brand ${
      isActive ? 'text-brand border-b-2 border-brand pb-0.5' : 'text-slate-700'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
            <img src={logo} alt={company.name} className="h-10 w-auto md:h-12" />
            <span className="hidden text-lg font-bold text-slate-900 sm:block">{company.name}</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="primary" className="px-4 py-2 text-sm">
              Get in Touch
            </Button>
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            aria-label="Mobile"
            className="border-t border-slate-100 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navLinkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button to="/contact" variant="primary" className="w-full" onClick={() => setMobileOpen(false)}>
                Get in Touch
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
