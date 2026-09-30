export type TechnologyGroupId =
  | 'backend'
  | 'frontend'
  | 'dados'
  | 'ferramentas'
  | 'learning'
  | 'next'

export interface TechnologyGroup {
  id: TechnologyGroupId
  title: string
  items: string[]
}
