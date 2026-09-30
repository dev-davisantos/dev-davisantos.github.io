# dev.davisantos — site pessoal

Site profissional de **Davi Santos / dev.davisantos**: apresentação, projetos e contato.
Stack: React 19 + TypeScript (Vite), Tailwind CSS v4, React Router e Lucide.

## Rodando o projeto

```bash
npm install
npm run dev        # desenvolvimento (http://localhost:5173)
npm run build      # build de produção (roda o tsc antes do vite)
npm run preview    # serve o build localmente
npm run lint       # eslint
npm run og         # regenera a imagem de compartilhamento (public/og-image.png)
```

## Onde fica cada coisa

| Quero mudar... | Arquivo |
| --- | --- |
| Nome, cargo, textos do hero e do "sobre", e-mail e links | `src/data/profile.ts` |
| Projetos (adicionar, editar, destacar na home) | `src/data/projects.ts` |
| Serviços | `src/data/services.ts` |
| Tecnologias | `src/data/technologies.ts` |
| "Como eu trabalho" | `src/data/process.ts` |
| Título, descrição do site e URL do domínio | `src/data/site.ts` |
| Cores e temas (escuro/claro) | `src/styles/tailwind.css` |
| Intro da katana | `src/styles/katana.css` + `src/hooks/useIntroExperience.ts` |
| Texto de cada seção da home | `src/pages/Home/<NomeDaSecao>.tsx` |
| Rotas | `src/routes/AppRoutes.tsx` |
| Navbar e rodapé | `src/components/Navbar.tsx` e `Footer.tsx` |
| Imagem de compartilhamento | `scripts/generate-og.ps1` (rode `npm run og`) |

## Adicionar um projeto

Copie um bloco de `src/data/projects.ts` e ajuste os campos:

```ts
{
  slug: 'meu-projeto',
  name: 'Meu Projeto',
  summary: 'Uma linha, aparece no card da home.',
  description: 'Texto mais completo, aparece em /projects.',
  technologies: ['React', 'TypeScript'],
  status: 'em-desenvolvimento', // 'em-desenvolvimento' | 'concluido' | 'evoluindo'
  category: 'api',              // 'sistema' | 'api' | 'estudo'
  featured: false,              // true = aparece na home também
  year: 2026,
  githubUrl: 'https://github.com/dev-davisantos/meu-projeto',
}
```

Campos opcionais: `demoUrl` (link da demo), `note` (observação honesta, tipo roadmap),
`image` (print real do projeto).

## Adicionar um print de projeto

Sem o campo `image`, o card usa uma capa gerada (monograma + geometria, nada de imagem
inventada). Para usar um print de verdade:

1. Salve o arquivo em `src/assets/projects/meu-projeto.png`.
2. Importe e passe no campo `image`:

```ts
import meuProjeto from '../assets/projects/meu-projeto.png'
// ...
image: meuProjeto,
```

## Tema

- O padrão é **escuro**. O claro é escolha do usuário (botão na navbar) e fica salvo no `localStorage`.
- O tema vive em `<html data-theme="light|dark">`. Um script inline no `index.html` roda antes do
  CSS para não piscar a cor errada no primeiro paint.
- Os tokens semânticos (`--bg`, `--surface`, `--text`, `--accent`...) ficam em `src/styles/tailwind.css`.
  As classes (`bg-surface`, `text-muted`, `border-line`...) mudam junto com o tema — por isso quase
  não se usa `dark:` no JSX.

## Intro (tela de carregamento)

- Roda na primeira entrada da sessão (`sessionStorage`), dura ~1,75s e pode ser pulada com o botão
  **Pular**, com **Esc** ou clicando fora.
- Quem usa `prefers-reduced-motion` não vê animação: o conteúdo aparece direto.
- Tempos em `src/hooks/useIntroExperience.ts`; coreografia (katana afiando e corte) em
  `src/styles/katana.css`. Toda a animação é CSS puro — não há biblioteca de animação no projeto.
- O conteúdo real é renderizado **atrás** do overlay, então o carregamento do site não é bloqueado.

## Acessibilidade

- Link "ir para o conteúdo", foco sempre visível, `aria-current` na navegação ativa.
- SVG decorativos com `aria-hidden`; `alt` nas imagens; status do projeto em texto (não só cor).
- Alvos de toque de 40px na navbar e no rodapé.
- Enquanto a intro está na tela, o conteúdo fica com `inert` (não dá para focar o que está atrás).
- Todas as animações respeitam `prefers-reduced-motion`.

## SEO

- Meta tags base e Open Graph em `index.html`; título e descrição por rota via `usePageMeta`.
- **Quando o domínio for definido:**
  1. preencher `site.url` em `src/data/site.ts` (habilita `og:url` por rota);
  2. trocar `og:image` por URL absoluta no `index.html` (a imagem é `public/og-image.png`);
  3. criar `public/sitemap.xml` e liberar a linha do sitemap em `public/robots.txt`.
- Observação: como é uma SPA, o HTML servido é o mesmo para todas as rotas. Google executa o JS,
  mas pré-visualizações de link (WhatsApp/LinkedIn) das rotas internas usam as metas base.
  Se quiser metas específicas por rota em crawlers, o próximo passo é pré-renderizar no build.

## Deploy

O site é estático: o `dist/` gerado por `npm run build` é o que vai para o ar.
Nada de configuração de host versionada aqui — quando decidir o host:

- **Netlify:** build `npm run build`, publish `dist` e um redirect do SPA — arquivo `netlify.toml`:

  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

- **GitHub Pages:** dois ajustes por causa do subdiretório:
  1. `base: '/nome-do-repo/'` em `vite.config.ts`;
  2. `<BrowserRouter basename="/nome-do-repo">` em `src/routes/AppRoutes.tsx`;
  3. copiar `dist/index.html` para `dist/404.html` durante o deploy (fallback das rotas).

## Commits

Conventional Commits: tipo e escopo em inglês, descrição curta no imperativo.

```
feat(home): add stack section
fix(theme): keep dark as default after reload
docs: explain how to add a project
```

## Estrutura

```
src/
├── assets/       avatar e imagens
├── components/   componentes reutilizáveis (Navbar, Footer, ProjectCard, LoadingScreen...)
├── context/      tema (ThemeProvider + contexto)
├── data/         TODO o conteúdo editável
├── hooks/        useTheme, usePageMeta, useScrollToTop, useIntroExperience...
├── layouts/      MainLayout (navbar + conteúdo + rodapé)
├── models/       tipos dos dados (Project, Service, Technology, ProcessStep, Profile)
├── pages/        Home (uma seção por arquivo), Projects, Contact, NotFound
├── routes/       AppRoutes (todas as rotas em um arquivo)
└── styles/       tailwind.css (tokens), base.css, katana.css (intro)
```

