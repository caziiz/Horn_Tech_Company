import { cn } from '../../utils/cn'

export default function Card({ children, className, hover = true }) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-6 shadow-md',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  )
}
