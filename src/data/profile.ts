import avatar from '../assets/avatar.jpg'
import type { Profile } from '../models/profile'

/**
 * Dados pessoais/profissionais exibidos no site.
 * Este é o único lugar onde esses textos precisam ser alterados.
 */
export const profile: Profile = {
  brand: 'dev.davisantos',
  name: 'Davi Santos',
  codename: 'razor',
  role: 'Software Engineering / Software Development',
  headline: 'Desenvolvo aplicações full-stack, com o backend como base.',
  intro:
    'Java e Spring Boot para as APIs, as regras de negócio e o banco relacional; React e TypeScript para as telas que consomem tudo isso.',
  about: [
    'Trabalho com desenvolvimento full-stack. No backend é Java com Spring Boot: modelagem de dados, regras de negócio e API REST. No front-end, React e TypeScript nas telas que consomem essas APIs.',
    'Gosto de manter a regra de negócio perto do domínio — a entidade valida o que faz sentido, o service só orquestra e o DTO define o contrato — e de organizar o projeto em camadas que qualquer pessoa entende depois.',
    'Também cuido do que vem junto: autenticação com Spring Security e JWT, banco relacional (PostgreSQL e MySQL), versionamento com Git e, no momento, estudos de Docker para fechar o ciclo de entrega.',
  ],
  location: 'São Paulo - SP',
  highlights: [
    { id: 'linguagens', label: 'Linguagens', value: 'Java · Spring Boot · TS · React' },
    { id: 'ferramentas', label: 'Ferramentas', value: 'PostgreSQL · MySQL · Maven · Git' },
  ],
  email: 'davisantosdev228@gmail.com',
  githubUrl: 'https://github.com/dev-davisantos',
  linkedinUrl: 'https://www.linkedin.com/in/dev-davisantos',
}

/** Foto de perfil (avatar do GitHub, versionada no repositório). */
export const avatarUrl = avatar
