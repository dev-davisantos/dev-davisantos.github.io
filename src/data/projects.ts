import type { Project } from '../models/project'

/**
 * Projetos exibidos no site.
 *
 * Para adicionar um projeto novo, basta copiar um objeto abaixo e ajustar os campos.
 * `featured: true` faz o projeto aparecer na Home; todos aparecem em /projects.
 */
export const projects: Project[] = [
  {
    slug: 'arena-challenge-manager',
    name: 'Arena — Challenges Manager',
    summary: 'Gincanas em equipes e seus desafios, organizados em um só lugar.',
    description:
      'Sistema para organizar gincanas em equipes e os desafios de cada uma. O backend em Java com Spring Boot e PostgreSQL está concluído; o front-end em React e TypeScript está em desenvolvimento.',
    technologies: [
      'Java 17',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Maven',
    ],
    status: 'em-desenvolvimento',
    category: 'sistema',
    featured: true,
    year: 2026,
    githubUrl: 'https://github.com/dev-davisantos/arena-challenge-manager',
  },
  {
    slug: 'order-manager',
    name: 'Order Manager API',
    summary: 'Gestão de pedidos e produtos, com as regras de negócio dentro do domínio.',
    description:
      'Sistema de pedidos pensado para pequenos estabelecimentos: produtos, usuários, pedidos e itens de pedido. As regras ficam dentro das entidades e os services apenas orquestram. A v1.0 está concluída; autenticação e front-end estão no roadmap.',
    technologies: [
      'Java 21',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'H2',
      'Maven',
      'Lombok',
    ],
    status: 'evoluindo',
    category: 'sistema',
    featured: true,
    year: 2026,
    githubUrl: 'https://github.com/dev-davisantos/order-manager',
    note: 'Spring Security (OAuth2/JWT), testes com JUnit e o front-end estão planejados.',
  },
  {
    slug: 'task-vault-api',
    name: 'TaskVault API',
    summary: 'Tarefas com login JWT e autorização por papéis.',
    description:
      'API REST de tarefas com autenticação stateless via JWT: papéis de admin, técnico e usuário, mais regras próprias de autorização — por exemplo, só quem abriu a tarefa (ou um admin) pode alterá-la. Endpoints documentados no Swagger.',
    technologies: [
      'Java 21',
      'Spring Boot',
      'Spring Web',
      'Spring Data JPA',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'MapStruct',
      'SpringDoc OpenAPI',
      'Maven',
    ],
    status: 'concluido',
    category: 'api',
    featured: true,
    year: 2026,
    githubUrl: 'https://github.com/dev-davisantos/task-vault-api',
    note: 'Projeto de estudo, como está declarado no próprio repositório.',
  },
]

/** Projetos exibidos na Home. */
export const featuredProjects = projects.filter((project) => project.featured)
