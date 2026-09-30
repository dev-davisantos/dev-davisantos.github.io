import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/** `true` quando o usuário pediu para reduzir movimento no sistema operacional. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY)
    const handleChange = () => setReduced(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return reduced
}
