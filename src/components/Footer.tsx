import { Mail } from 'lucide-react'
import { Link } from 'react-router'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

const socialLinks = [
  { href: profile.githubUrl, label: 'GitHub de Davi Santos', icon: GitHubIcon },
  { href: profile.linkedinUrl, label: 'LinkedIn de Davi Santos', icon: LinkedInIcon },
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="shell flex flex-col gap-8 py-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-mono text-sm text-text">{profile.brand}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">{profile.role}</p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link to="/projects" className="text-muted transition-colors duration-200 hover:text-text">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted transition-colors duration-200 hover:text-text">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex size-10 items-center justify-center rounded-sm border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent-text"
              >
                <link.icon className="size-4" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Enviar e-mail para ${profile.email}`}
              className="inline-flex size-10 items-center justify-center rounded-sm border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent-text"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>

      <div className="shell flex flex-wrap items-center justify-between gap-2 border-t border-line py-6 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          <span className="text-accent-text">{profile.codename}</span> · {profile.location}
        </p>
      </div>
    </footer>
  )
}
