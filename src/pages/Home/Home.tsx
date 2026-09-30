import { profile } from '../../data/profile'
import { site } from '../../data/site'
import { usePageMeta } from '../../hooks/usePageMeta'

/**
 * Estrutura temporária: o conteúdo completo da home (hero, serviços, destaques,
 * stack e processo) entra na próxima etapa.
 */
export function Home() {
  usePageMeta({ title: site.title, description: site.description })

  return (
    <div className="shell py-16">
      <p className="font-mono text-xs tracking-[0.2em] text-accent-text uppercase">{profile.brand}</p>
      <h1 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">{profile.headline}</h1>
      <p className="mt-4 max-w-prose text-sm text-muted sm:text-base">{profile.intro}</p>
    </div>
  )
}
