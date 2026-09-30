import { Reveal } from '../../components/Reveal'
import { SectionTitle } from '../../components/SectionTitle'
import { profile } from '../../data/profile'

const highlights = [
  {
    id: 'responsavel',
    text: 'Um responsável pelo sistema inteiro: do que acontece nos bastidores até o botão que a pessoa clica.',
  },
  {
    id: 'acesso',
    text: 'Acesso controlado: cada pessoa do time vê e faz exatamente o que precisa — e nada além disso.',
  },
  {
    id: 'entrega',
    text: 'Entrega organizada e explicada, para o sistema continuar funcionando e crescer sem retrabalho.',
  },
]

export function AboutSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="shell grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <SectionTitle
            eyebrow="sobre"
            title="Eu construo o sistema inteiro"
            description="Da parte que guarda e organiza as informações até as telas que a sua equipe usa todos os dias."
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
