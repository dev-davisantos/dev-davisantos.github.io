import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { ExternalButton } from '../../components/Button'
import { GitHubIcon, LinkedInIcon } from '../../components/BrandIcons'
import { profile } from '../../data/profile'
import { site } from '../../data/site'
import { usePageMeta } from '../../hooks/usePageMeta'

const mailtoHref = `mailto:${profile.email}?subject=Contato%20pelo%20site`

export function Contact() {
  usePageMeta({
    title: 'Contato — dev.davisantos',
    description:
      'Fale com Davi Santos sobre APIs, sistemas e as telas que consomem essas APIs. Contato por e-mail, LinkedIn ou GitHub.',
  })

  return (
    <div className="shell py-16 sm:py-20">
      <p className="font-mono text-xs tracking-[0.2em] text-accent-text uppercase">contato</p>
      <h1 className="mt-4 max-w-2xl text-3xl font-semibold text-text sm:text-4xl">
        Me conta o que você precisa construir.
      </h1>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
        Se for um sistema, uma API ou as telas que consomem essa API: descreve o objetivo, se já
        existe banco ou API e o que precisa funcionar primeiro. Com isso eu já consigo te responder
        o que dá para fazer e por onde começar.
      </p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li className="flex flex-col gap-3 rounded-sm border border-line bg-surface p-5">
          <Mail className="size-5 text-accent-text" aria-hidden="true" />
          <h2 className="text-base font-semibold text-text">E-mail</h2>
          <p className="text-sm break-all text-muted">{profile.email}</p>
          <a
            href={mailtoHref}
            className="mt-auto inline-flex items-center gap-1 text-sm text-accent-text transition-colors duration-200 hover:underline"
          >
            Enviar e-mail
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </li>

        <li className="flex flex-col gap-3 rounded-sm border border-line bg-surface p-5">
          <GitHubIcon className="size-5 text-accent-text" />
          <h2 className="text-base font-semibold text-text">GitHub</h2>
          <p className="text-sm break-all text-muted">
            github.com/dev-davisantos
          </p>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center gap-1 text-sm text-accent-text transition-colors duration-200 hover:underline"
          >
            Ver repositórios
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </li>

        <li className="flex flex-col gap-3 rounded-sm border border-line bg-surface p-5">
          <LinkedInIcon className="size-5 text-accent-text" />
          <h2 className="text-base font-semibold text-text">LinkedIn</h2>
          <p className="text-sm break-all text-muted">linkedin.com/in/dev-davisantos</p>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center gap-1 text-sm text-accent-text transition-colors duration-200 hover:underline"
          >
            Abrir perfil
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </li>
      </ul>

      <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <MapPin className="size-4 text-accent-text" aria-hidden="true" />
          {profile.location}
        </p>
        <ExternalButton href={mailtoHref} variant="primary">
          Escrever um e-mail
          <ArrowRight className="size-4" aria-hidden="true" />
        </ExternalButton>
      </div>

      <p className="mt-8 font-mono text-xs text-muted">({site.name})</p>
    </div>
  )
}
