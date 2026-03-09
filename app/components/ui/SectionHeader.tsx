interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  pulseDot?: boolean
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  pulseDot = false,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 border border-primary/20 w-fit">
        {pulseDot && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
        )}
        <span className="section-label text-primary">{label}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
