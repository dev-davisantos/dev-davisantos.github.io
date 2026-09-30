export type ServiceId = 'apis' | 'sistemas' | 'seguranca' | 'interfaces' | 'manutencao'

export interface Service {
  id: ServiceId
  title: string
  description: string
}
