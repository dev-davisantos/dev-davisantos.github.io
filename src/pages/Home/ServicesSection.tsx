import { LayoutTemplate, PanelsTopLeft, Plug, Wrench } from 'lucide-react'
import type { ComponentType } from 'react'
import { Reveal } from '../../components/Reveal'
import { SectionTitle } from '../../components/SectionTitle'
import { services } from '../../data/services'
import type { ServiceId } from '../../models/service'

const icons: Record<ServiceId, ComponentType<{ className?: string }>> = {
  sites: LayoutTemplate,
  painels: Plug,
  sistemas: PanelsTopLeft,
  manutencao: Wrench,
}

export function ServicesSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="shell">
        <Reveal>
          <SectionTitle
            eyebrow="serviços"
            title="O que eu faço"
            description="Trabalho com interfaces: sites, painéis e telas que consomem API. Se o seu caso não estiver aqui, me conta que eu digo se consigo ajudar."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.id]

            return (
              <li key={service.id}>
                <Reveal delay={index * 60}>
                  <article className="flex h-full flex-col gap-4 rounded-sm border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent">
                    <Icon className="size-5 text-accent-text" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-text">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
