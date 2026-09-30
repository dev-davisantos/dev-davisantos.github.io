import { LinkButton } from '../../components/Button'
import { ProjectCard } from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import { usePageMeta } from '../../hooks/usePageMeta'

export function Projects() {
  usePageMeta({
    title: 'Projetos — dev.davisantos',
    description:
      'Projetos de Davi Santos: sistemas, APIs REST em Java com Spring Boot e interfaces em React e TypeScript, com o que cada um faz e o link do repositório.',
  })

  return (
    <div className="shell py-16 sm:py-20">
      <p className="font-mono text-xs tracking-[0.2em] text-accent-text uppercase">projetos</p>
      <h1 className="mt-4 max-w-2xl text-3xl font-semibold text-text sm:text-4xl">
        O que eu construí e o que estou construindo.
      </h1>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted sm:text-base">
        Cada projeto aqui tem código aberto no GitHub: o que ele faz, as tecnologias usadas e em que
        ponto está. Os destaques também aparecem na home.
      </p>

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} detailed />
          </li>
        ))}
      </ul>

      <div className="mt-16 border-t border-line pt-8">
        <p className="text-sm text-muted">
          Quer conversar sobre algum desses projetos ou sobre uma interface sua?
        </p>
        <div className="mt-4">
          <LinkButton to="/contact">Falar comigo</LinkButton>
        </div>
      </div>
    </div>
  )
}
