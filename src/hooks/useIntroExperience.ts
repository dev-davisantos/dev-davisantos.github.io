import { useCallback, useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/** Marca na sessão: a intro completa roda só na primeira entrada. */
const SEEN_KEY = 'dd:intro'

/** Duração da coreografia de entrada (inclui as passadas de afiação). */
const ENTRANCE_MS = 3700

/** Duração da saída (painéis deslizando + fade do card). */
const EXIT_MS = 700

type IntroState = 'showing' | 'leaving' | 'done'

interface IntroExperience {
  isVisible: boolean
  isLeaving: boolean
  /** Pula a animação (botão "Pular" ou tecla Esc). */
  skip: () => void
}

function shouldShowIntro(reducedMotion: boolean): boolean {
  if (reducedMotion) {
    return false
  }

  try {
    return sessionStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    /* sem storage disponível: mostra a intro (comportamento padrão) */
    return true
  }
}

function markIntroAsSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, '1')
  } catch {
    /* sem storage: a intro volta na próxima visita */
  }
}

/**
 * Controla a tela de entrada.
 * - roda inteira na primeira visita da sessão (~4,4s);
 * - não roda para quem pediu menos movimento;
 * - sempre pode ser pulada (botão, Esc ou clique no fundo).
 */
export function useIntroExperience(): IntroExperience {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [state, setState] = useState<IntroState>(() =>
    shouldShowIntro(prefersReducedMotion) ? 'showing' : 'done',
  )

  const skip = useCallback(() => {
    setState((current) => (current === 'showing' ? 'leaving' : current))
  }, [])

  /* Trava a rolagem enquanto o overlay está na tela. */
  useEffect(() => {
    if (state === 'done') {
      return
    }

    document.documentElement.classList.add('is-intro')

    return () => document.documentElement.classList.remove('is-intro')
  }, [state])

  /* Avança sozinho: entrada -> saída -> fim. */
  useEffect(() => {
    if (state === 'showing') {
      markIntroAsSeen()

      const timer = window.setTimeout(() => setState('leaving'), ENTRANCE_MS)

      return () => window.clearTimeout(timer)
    }

    if (state === 'leaving') {
      const timer = window.setTimeout(() => setState('done'), EXIT_MS)

      return () => window.clearTimeout(timer)
    }

    return undefined
  }, [state])

  /* Esc também pula. */
  useEffect(() => {
    if (state !== 'showing') {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setState('leaving')
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [state])

  return {
    isVisible: state !== 'done',
    isLeaving: state === 'leaving',
    skip,
  }
}
