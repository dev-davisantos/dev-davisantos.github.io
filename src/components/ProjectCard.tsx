import { ArrowUpRight } from 'lucide-react'
import type { Project, ProjectStatus } from '../models/project'
import { ProjectCover } from './ProjectCover'
import { TechnologyBadge } from './TechnologyBadge'

const statusLabels: Record<ProjectStatus, string> = {
  'em-desenvolvimento': 'Em desenvolvimento',
  concluido: 'Concluído',
  evoluindo: 'Em evolução',
}

interface ProjectCardProps {
  project: Project
  /** `true` mostra a descrição completa (usado em /projects) em vez do resumo (Home). */
  detailed?: boolean
}

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-line bg-surface transition-colors duration-200 hover:border-accent">
      <div className="h-36 border-b border-line sm:h-40">
        <ProjectCover name={project.name} image={project.image} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-text">{project.name}</h3>
          <span className="shrink-0 rounded-sm border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
            {statusLabels[project.status]}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {detailed ? project.description : project.summary}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechnologyBadge label={technology} />
            </li>
          ))}
        </ul>

        {project.note ? <p className="text-xs text-muted italic">{project.note}</p> : null}

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-accent-text transition-colors duration-200 hover:underline"
          >
            Repositório
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent-text transition-colors duration-200 hover:underline"
            >
              Ver demo
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
