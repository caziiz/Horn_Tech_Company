import { cn } from '../../utils/cn'

export default function SectionHeading({ eyebrow, title, subtitle, className, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <div className={cn('mb-12', alignClass, className)}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg text-slate-600', align === 'center' && 'mx-auto max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
