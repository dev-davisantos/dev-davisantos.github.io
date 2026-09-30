import { Reveal } from '../../components/Reveal'
import { SectionTitle } from '../../components/SectionTitle'
import { processSteps } from '../../data/process'

export function ProcessSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="shell">
        <Reveal>
          <SectionTitle
            eyebrow="como eu trabalho"
            title="Do domínio à tela"
            description="Não é processo pomposo: é a ordem em que as coisas costumam acontecer em um sistema."
          />
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.id}>
              <Reveal delay={index * 50}>
                <div className="h-full border-t border-line pt-5">
                  <p className="font-mono text-xs text-accent-text">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
