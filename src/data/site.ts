/**
 * Informações do próprio site.
 *
 * TODO (quando o domínio for definido): preencher `url` com o endereço final
 * (ex.: 'https://davisantos.dev'). Só então faz sentido usar `url` em canonical,
 * og:url e gerar o sitemap.xml.
 */
export const site = {
  url: 'https://dev-davisantos.github.io',
  name: 'dev.davisantos',
  title: 'dev.davisantos — Davi Santos | Software Engineering',
  description:
    'Davi Santos (dev.davisantos) — desenvolvedor full-stack: APIs em Java e Spring Boot, banco de dados relacional e interfaces em React e TypeScript.',
  ogImage: '/og-image.png',
} as const
