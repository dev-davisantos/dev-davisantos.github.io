import { LinkButton } from '../../components/Button'
import { usePageMeta } from '../../hooks/usePageMeta'

export function NotFound() {
  usePageMeta({
    title: 'Página não encontrada — dev.davisantos',
    description: 'A página que você tentou abrir não existe neste site.',
  })

  return (
    <div className="shell flex flex-col items-start gap-6 py-24">
      <p className="font-mono text-xs tracking-[0.2em] text-accent-text uppercase">erro 404</p>
      <h1 className="max-w-2xl text-3xl font-semibold text-text sm:text-4xl">
        Esta página não existe.
      </h1>
      <p className="max-w-prose text-sm leading-relaxed text-muted sm:text-base">
        O endereço pode ter sido digitado errado ou a página foi movida. Você pode voltar para a
        home ou ir direto para os projetos.
      </p>
      <div className="flex flex-wrap gap-3">
        <LinkButton to="/">Voltar para a home</LinkButton>
        <LinkButton to="/projects" variant="outline">
          Ver projetos
        </LinkButton>
      </div>
    </div>
  )
}
