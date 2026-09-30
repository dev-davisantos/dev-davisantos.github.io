import { profile } from '../data/profile'
import '../styles/katana.css'

interface LoadingScreenProps {
  /** Quando `true`, os painéis se abrem no corte e o overlay sai de cena. */
  isLeaving: boolean
  onSkip: () => void
}

/**
 * Tela de entrada: uma katana atravessa o fundo do card e a pedra de amolar
 * passa pelo fio (5 passadas). No fim, o corte abre a página.
 * A animação é toda CSS (styles/katana.css) — este componente só desenha.
 */
export function LoadingScreen({ isLeaving, onSkip }: LoadingScreenProps) {
  return (
    <div className="katana-overlay" data-leaving={isLeaving ? 'true' : undefined}>
      {/* Clicar nas áreas de fundo (fora do card) também pula a intro. */}
      <div className="katana-panel katana-panel--top" aria-hidden="true" onClick={onSkip} />
      <div className="katana-panel katana-panel--bottom" aria-hidden="true" onClick={onSkip} />
      <div className="katana-cut" aria-hidden="true" />

      <p className="sr-only" role="status">
        Carregando o site
      </p>

      <div className="katana-card">
        {/* Fundo do card: a katana e, por cima dela, a pedra de amolar deslizando no fio. */}
        <div className="katana-track" aria-hidden="true">
          <svg className="katana-blade" viewBox="0 0 400 60" focusable="false">
            {/* lâmina */}
            <path d="M300 26.4 L20 26.4 L8 30 L300 33.6 Z" fill="#CECDD2" opacity="0.92" />
            {/* fio (hamon) */}
            <path d="M296 31.8 L22 31.8" stroke="#008F78" strokeWidth="1" opacity="0.95" />
            {/* tsuba (guarda) */}
            <rect x="298" y="19.5" width="5" height="21" rx="1.6" fill="#CECDD2" opacity="0.85" />
            {/* tsuka (cabo) */}
            <rect
              x="303"
              y="25.2"
              width="90"
              height="9.6"
              rx="4.8"
              fill="#163B5C"
              stroke="#7E7D82"
              strokeWidth="0.6"
            />
            <path
              d="M310 25.4 L316 34.6 M320 25.4 L326 34.6 M330 25.4 L336 34.6 M340 25.4 L346 34.6 M350 25.4 L356 34.6 M360 25.4 L366 34.6 M370 25.4 L376 34.6 M380 25.4 L386 34.6"
              stroke="#7E7D82"
              strokeWidth="0.7"
              opacity="0.55"
            />
          </svg>

          <span className="katana-stone" />
          <span className="katana-spark" />
        </div>

        <div className="katana-card-content">
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
