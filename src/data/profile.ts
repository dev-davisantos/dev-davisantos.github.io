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
  headline: 'Desenvolvo interfaces web — de sites simples a painéis que consomem APIs.',
  intro:
    'Trabalho com React e TypeScript: do layout às telas que leem e escrevem em APIs REST, com atenção a responsividade, acessibilidade e detalhe de interação.',
  about: [
    'Trabalho com desenvolvimento de interfaces web. Na prática, é transformar requisito e layout em tela que funciona: componente, estado, responsividade e detalhe de interação.',
    'Venho do lado do backend — Java, Spring Boot, PostgreSQL — e isso muda a forma como eu construo front-end: eu entendo o que a API está entregando, quais erros podem aparecer e como tratar cada um na tela.',
    'Uso React e TypeScript no dia a dia, Git para versionar e venho estudando Docker para fechar o ciclo de entrega.',
  ],
  location: 'Brasil',
  email: 'davisantosdev228@gmail.com',
  githubUrl: 'https://github.com/dev-davisantos',
  linkedinUrl: 'https://www.linkedin.com/in/dev-davisantos',
}

/** Foto de perfil (avatar do GitHub, versionada no repositório). */
export const avatarUrl = avatar
