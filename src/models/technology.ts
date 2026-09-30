export type TechnologyGroupId = 'frontend' | 'backend' | 'tools' | 'learning' | 'next'

export interface TechnologyGroup {
  id: TechnologyGroupId
  title: string
  items: string[]
}
