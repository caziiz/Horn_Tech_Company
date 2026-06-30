import { Check } from 'lucide-react'
import { getIcon } from '../../utils/iconMap'
import Card from '../common/Card'

export default function ServiceCard({ service }) {
  const Icon = getIcon(service.icon)

  return (
    <Card>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon size={28} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
      <p className="mt-2 text-slate-600">{service.description}</p>
      <ul className="mt-6 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
            <Check size={16} className="shrink-0 text-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}
