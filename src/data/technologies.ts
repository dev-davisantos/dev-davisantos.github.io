import type { TechnologyGroup } from '../models/technology'

/** Tecnologias exibidas na Home, na ordem: backend primeiro. */
export const technologyGroups: TechnologyGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring Web',
      'Spring Data JPA',
      'Spring Security',
      'Hibernate',
      'Lombok',
      'MapStruct',
      'SpringDoc OpenAPI',
    ],
  },
  {
    id: 'frontend',
    title: 'Front-end',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Angular', 'HTML', 'CSS'],
  },
  {
    id: 'dados',
    title: 'Dados',
    items: ['PostgreSQL', 'MySQL', 'H2', 'SQL'],
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas',
    items: ['Maven', 'Node.js', 'JWT', 'Git', 'Postman', 'IntelliJ IDEA', 'VS Code'],
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
