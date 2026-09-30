import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Volta ao topo sempre que a rota muda (o SPA não faz isso sozinho). */
export function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}
