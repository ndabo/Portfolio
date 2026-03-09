import clsx from 'clsx'

interface BadgeProps {
  label: string
  variant?: 'tech' | 'category' | 'accent'
}

export default function Badge({ label, variant = 'tech' }: BadgeProps) {
  return (
    <span
      className={clsx('tech-badge', {
        'text-accent-blue border-accent-blue/20 bg-accent-blue/10': variant === 'accent',
        'text-primary border-primary/20 bg-primary/10': variant === 'category',
      })}
    >
      {label}
    </span>
  )
}
