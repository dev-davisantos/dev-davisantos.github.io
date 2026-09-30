import { profile } from '../data/profile'
import '../styles/katana.css'

interface LoadingScreenProps {
  /** Quando `true`, os painéis se abrem no corte e o overlay sai de cena. */
  isLeaving: boolean
  onSkip: () => void
}

/**
 * Tela de entrada: a katana é afiada atrás do card e o corte abre a página.
 * A animação é toda CSS (styles/katana.css) — este componente só desenha.
 */
export function LoadingScreen({ isLeaving, onSkip }: LoadingScreenProps) {
  return (
    <div className="katana-overlay" data-leaving={isLeaving ? 'true' : undefined}>
      <div className="katana-panel katana-panel--top" aria-hidden="true" />
      <div className="katana-panel katana-panel--bottom" aria-hidden="true" />
      <div className="katana-cut" aria-hidden="true" />

      <p className="sr-only" role="status">
        Carregando o site
      </p>

      <div className="katana-stage">
        <span className="katana-stone" aria-hidden="true" />

        <svg
          className="katana-blade"
          viewBox="0 0 240 26"
          aria-hidden="true"
          focusable="false"
        >
          {/* lâmina */}
          <path d="M190 10.4 L14 10.4 L2 14.8 L190 14.8 Z" fill="#CECDD2" />
          {/* fio (hamon) */}
          <path d="M188 13.3 L18 13.3" stroke="#008F78" strokeWidth="0.9" opacity="0.9" />
          {/* tsuba (guarda) */}
          <rect x="188" y="4.6" width="5" height="15.8" rx="1.5" fill="#CECDD2" opacity="0.85" />
          {/* tsuka (cabo) */}
          <rect
            x="193"
            y="9.4"
            width="44"
            height="6.6"
            rx="3.3"
            fill="#163B5C"
            stroke="#7E7D82"
            strokeWidth="0.6"
          />
          <path
            d="M198 9.6 L203 15.8 M206 9.6 L211 15.8 M214 9.6 L219 15.8 M222 9.6 L227 15.8"
            stroke="#7E7D82"
            strokeWidth="0.7"
            opacity="0.7"
          />
        </svg>

        <div className="katana-card">
          <p className="katana-brand">{profile.brand}</p>
          <p className="katana-loading">carregando…</p>
          <p className="katana-codename">codename: {profile.codename}</p>
        </div>

        <span className="katana-edge" aria-hidden="true" />
      </div>

      <button type="button" className="katana-skip" onClick={onSkip}>
        Pular
      </button>
    </div>
  )
}
