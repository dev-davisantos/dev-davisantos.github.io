import { ArrowRight } from 'lucide-react'
import { LinkButton } from '../../components/Button'
import { ProjectCard } from '../../components/ProjectCard'
import { Reveal } from '../../components/Reveal'
import { SectionTitle } from '../../components/SectionTitle'
import { featuredProjects } from '../../data/projects'

export function FeaturedProjectsSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="shell">
        <Reveal>
          <SectionTitle
            eyebrow="projetos"
            title="Alguns projetos"
            description="Sistemas e APIs que eu construí, do modelo de dados à interface. Cada um com o repositório aberto."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={index * 60}>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <LinkButton to="/projects" variant="outline">
            Ver todos os projetos
            <ArrowRight className="size-4" aria-hidden="true" />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
