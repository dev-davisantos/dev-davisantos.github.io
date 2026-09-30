import { Reveal } from '../../components/Reveal'
import { SectionTitle } from '../../components/SectionTitle'
import { profile } from '../../data/profile'

const highlights = [
  {
    id: 'dominio',
    text: 'Regra de negócio perto do domínio: a entidade valida o que faz sentido, o service só orquestra e o DTO define o contrato da API.',
  },
  {
    id: 'api',
    text: 'API pensada de ponta a ponta: contrato, validação, erro, autenticação com JWT e banco relacional — não só o caminho feliz do endpoint.',
  },
  {
    id: 'entrega',
    text: 'Entrega organizada: projeto em camadas, nomes claros, README dizendo como rodar e commits descritivos.',
  },
]

export function AboutSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="shell grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <SectionTitle
            eyebrow="sobre"
            title="Full-stack, com o backend como base"
            description="Trabalho nas duas pontas, mas a base vem do lado do servidor — e é isso que muda a forma como eu construo a interface."
          />

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="space-y-4 rounded-sm border border-line bg-surface p-5">
            {highlights.map((item) => (
              <li key={item.id} className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
                {item.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
