import type { TechnologyGroup } from '../models/technology'

/** Tecnologias exibidas na Home, separadas por contexto. */
export const technologyGroups: TechnologyGroup[] = [
  {
    id: 'frontend',
    title: 'Front-end',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'Angular'],
  },
  {
    id: 'backend',
    title: 'Backend e dados',
    items: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'MySQL',
      'H2',
      'Maven',
    ],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
    items: ['Git', 'Postman', 'IntelliJ IDEA', 'VS Code'],
  },
  {
    id: 'learning',
    title: 'Aprendendo agora',
    items: ['Docker'],
  },
  {
    id: 'next',
    title: 'Próximos interesses',
    items: ['Kafka', 'RabbitMQ', 'AWS'],
  },
]
