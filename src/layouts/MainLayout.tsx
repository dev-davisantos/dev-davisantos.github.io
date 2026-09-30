import { Outlet } from 'react-router'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { useScrollToTop } from '../hooks/useScrollToTop'

/** Estrutura comum a todas as páginas: navbar, conteúdo e rodapé. */
export function MainLayout() {
  useScrollToTop()

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-text"
      >
        Ir para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
