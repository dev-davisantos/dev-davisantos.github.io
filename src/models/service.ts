export type ServiceId = 'sites' | 'painels' | 'sistemas' | 'manutencao'

export interface Service {
  id: ServiceId
  title: string
  description: string
}
