import { Reveal } from '../../components/Reveal'
import { SectionTitle } from '../../components/SectionTitle'
import { TechnologyBadge } from '../../components/TechnologyBadge'
import { technologyGroups } from '../../data/technologies'

export function StackSection() {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="shell">
        <Reveal>
          <SectionTitle
            eyebrow="stack"
            title="O que eu uso hoje"
            description="Sem exagero: isto é o que eu realmente uso. O que ainda estou aprendendo aparece separado."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group, index) => {
            const isNotSkillYet = group.id === 'learning' || group.id === 'next'

            return (
              <Reveal key={group.id} delay={index * 60}>
                <div
                  className={`h-full rounded-sm border p-5 ${
                    isNotSkillYet ? 'border-dashed border-line' : 'border-line bg-surface'
                  }`}
                >
                  <h3 className="font-mono text-xs tracking-[0.15em] text-accent-text uppercase">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item}>
                        <TechnologyBadge label={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
