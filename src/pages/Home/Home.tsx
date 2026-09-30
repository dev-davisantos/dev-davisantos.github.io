import { site } from '../../data/site'
import { usePageMeta } from '../../hooks/usePageMeta'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { FeaturedProjectsSection } from './FeaturedProjectsSection'
import { HeroSection } from './HeroSection'
import { ProcessSection } from './ProcessSection'
import { ServicesSection } from './ServicesSection'
import { StackSection } from './StackSection'

/**
 * Home: apresentação objetiva. Cada seção tem o seu próprio arquivo nesta pasta —
 * para mudar um texto, abra o arquivo da seção correspondente.
 */
export function Home() {
  usePageMeta({ title: site.title, description: site.description })

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <StackSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}

