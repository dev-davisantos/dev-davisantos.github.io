interface SectionTitleProps {
  /** Rótulo pequeno em mono acima do título. */
  eyebrow: string
  title: string
  description?: string
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <header className="max-w-2xl">
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent-text uppercase">
        {eyebrow}
        <span
          className="h-px w-12 bg-linear-to-r from-green-bright to-transparent"
          aria-hidden="true"
        />
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-text sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      ) : null}
    </header>
  )
}
