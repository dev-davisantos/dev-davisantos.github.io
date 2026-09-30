import { ArrowRight, Code, MapPin, Wrench } from 'lucide-react'
import type { ComponentType } from 'react'
import { LinkButton } from '../../components/Button'
import { avatarUrl, profile } from '../../data/profile'

const highlightIcons: Record<string, ComponentType<{ className?: string }>> = {
  linguagens: Code,
  ferramentas: Wrench,
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Linhas de lâmina ao fundo: assinatura discreta da marca. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -inset-x-10 top-[34%] h-px -rotate-12 bg-linear-to-r from-transparent via-green-bright/25 to-transparent" />
        <div className="absolute -inset-x-10 top-[58%] h-px -rotate-12 bg-linear-to-r from-transparent via-gray-light/12 to-transparent" />
      </div>

      <div className="shell relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="rise font-mono text-xs tracking-[0.2em] text-accent-text uppercase">
            {profile.brand}
          </p>

          <h1 className="rise mt-5 text-3xl leading-tight font-semibold text-text sm:text-4xl lg:text-5xl" style={{ animationDelay: '60ms' }}>
            {profile.name}
          </h1>

          <p className="rise mt-3 text-sm text-muted sm:text-base" style={{ animationDelay: '120ms' }}>
            {profile.role}
          </p>

          <p
            className="rise mt-8 max-w-2xl text-xl leading-snug text-text sm:text-2xl"
            style={{ animationDelay: '180ms' }}
          >
            {profile.headline}
          </p>

          <p
            className="rise mt-4 max-w-prose text-sm leading-relaxed text-muted sm:text-base"
            style={{ animationDelay: '240ms' }}
          >
            {profile.intro}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: '300ms' }}>
            <LinkButton to="/projects">
              Ver projetos
              <ArrowRight className="size-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton to="/contact" variant="outline">
              Falar comigo
            </LinkButton>
          </div>
        </div>

        <aside
          className="rise rounded-sm border border-line bg-surface p-6 clip-corner-tr"
          style={{ animationDelay: '360ms' }}
        >
          <div className="flex items-center gap-4">
            <img
              src={avatarUrl}
              alt="Foto de Davi Santos"
              width={64}
              height={64}
              className="size-16 shrink-0 rounded-sm object-cover ring-1 ring-line"
            />
            <div>
              <p className="font-mono text-sm text-text">{profile.brand}</p>
              <p className="mt-1 text-sm text-muted">{profile.role}</p>
            </div>
          </div>

          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-text" aria-hidden="true" />
              <div>
                <dt className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                  Local
                </dt>
                <dd className="mt-0.5 text-text">{profile.location}</dd>
              </div>
            </div>

            {profile.highlights.map((highlight) => {
              const Icon = highlightIcons[highlight.id] ?? Code

              return (
                <div key={highlight.id} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-accent-text" aria-hidden="true" />
                  <div>
                    <dt className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                      {highlight.label}
                    </dt>
                    <dd className="mt-0.5 text-text">{highlight.value}</dd>
                  </div>
                </div>
              )
            })}
          </dl>
        </aside>
      </div>
    </section>
  )
}
