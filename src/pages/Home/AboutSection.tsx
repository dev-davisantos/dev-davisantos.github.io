import { Reveal } from '../../components/Reveal'
import { SectionTitle } from '../../components/SectionTitle'
import { profile } from '../../data/profile'

const highlights = [
  {
    id: 'apis',
    text: 'Consumo de APIs REST: entendo contrato, formato de retorno, erro e autenticação porque também construí as APIs dos meus projetos.',
  },
  {
    id: 'dados',
    text: 'Modelagem de dados: sei o que está por trás das telas — tabelas, relacionamentos e regra de negócio.',
  },
  {
    id: 'entrega',
    text: 'Entrega organizada: componentes com nome claro, conteúdo separado do layout e README explicando como rodar.',
  },
]

export function AboutSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="shell grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <SectionTitle eyebrow="sobre" title="Interfaces com base técnica por trás" />

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
