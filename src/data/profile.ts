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
    'Eu construo sistemas completos. Cuido da parte que ninguém vê — onde as informações ficam guardadas e onde as regras do seu negócio são aplicadas — e também da parte que todo mundo vê: as telas que a sua equipe usa todos os dias.',
    'Isso deixa o caminho mais curto: você trata com uma pessoa só, do começo ao fim, e não precisa coordenar equipes diferentes para o sistema funcionar.',
    'Gosto de entregar algo que dá para manter depois: organizado, com explicação de como usar e pronto para crescer quando o seu negócio mudar.',
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
