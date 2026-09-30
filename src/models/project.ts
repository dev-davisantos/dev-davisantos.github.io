export type ProjectStatus = 'em-desenvolvimento' | 'concluido' | 'evoluindo'

export type ProjectCategory = 'sistema' | 'api' | 'estudo'

export interface Project {
  slug: string
  name: string
  /** Uma linha: usada no card da Home. */
  summary: string
  /** Dois ou três parágrafos curtos: usados na página /projects. */
  description: string
  technologies: string[]
  status: ProjectStatus
  category: ProjectCategory
  /** `true` = aparece na Home. A Home mostra apenas os projetos marcados assim. */
  featured: boolean
  year: number
  githubUrl: string
  /** Opcional: só quando existir demonstração publicada. */
  demoUrl?: string
  /** Opcional: só quando existir uma imagem real do projeto. Sem imagem, o card usa a capa gerada. */
  image?: string
  /** Opcional: observação honesta exibida no card (ex.: roadmap, projeto de estudo). */
  note?: string
}
