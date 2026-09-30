import { ArrowRight, Mail } from 'lucide-react'
import { ExternalButton, LinkButton } from '../../components/Button'
import { GitHubIcon, LinkedInIcon } from '../../components/BrandIcons'
import { Reveal } from '../../components/Reveal'
import { profile } from '../../data/profile'

const mailtoHref = `mailto:${profile.email}?subject=Contato%20pelo%20site`

export function ContactSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="shell">
        <Reveal>
          <div className="rounded-sm border border-line bg-surface p-8 sm:p-12 clip-corner-br">
            <p className="font-mono text-xs tracking-[0.2em] text-accent-text uppercase">contato</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-semibold text-text sm:text-3xl">
              Tem uma interface para construir ou ajustar?
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
              Me conta o objetivo da tela, se já existe layout e se a API está pronta. Se preferir,
              começa por e-mail — respondo por lá mesmo.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <LinkButton to="/contact">
                Ver canais de contato
                <ArrowRight className="size-4" aria-hidden="true" />
              </LinkButton>
              <ExternalButton href={mailtoHref}>
                <Mail className="size-4" aria-hidden="true" />
                {profile.email}
              </ExternalButton>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Davi Santos"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent-text"
              >
                <GitHubIcon className="size-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Davi Santos"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent-text"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
