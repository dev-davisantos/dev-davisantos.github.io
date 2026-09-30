import { profile } from '../data/profile'
import '../styles/katana.css'

interface LoadingScreenProps {
  /** Quando `true`, os painéis se abrem no corte e o overlay sai de cena. */
  isLeaving: boolean
  onSkip: () => void
}

/**
 * Tela de entrada: a katana aparece na bainha, sai só um pouco no começo e, no
 * fim, é sacada por inteiro e corta a tela (os dois painéis se abrem).
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
        {/* Fundo do card: a katana dentro da bainha, pronta para ser sacada. */}
        <div className="katana-scene" aria-hidden="true">
          {/* A espada inteira (lâmina + guarda + cabo) desliza para a direita. */}
          <div className="katana-sword">
            <svg className="katana-sword-svg" viewBox="0 0 400 60" focusable="false">
              {/* lâmina */}
              <path d="M272 26.4 L20 26.4 L8 30 L272 33.6 Z" fill="#CECDD2" opacity="0.95" />
              {/* fio (hamon) */}
              <path d="M268 31.8 L22 31.8" stroke="#008F78" strokeWidth="1" opacity="0.95" />
              {/* tsuba (guarda) */}
              <rect x="272" y="19.5" width="6" height="21" rx="1.8" fill="#CECDD2" opacity="0.9" />
              {/* tsuka (cabo) */}
              <rect
                x="278"
                y="25.2"
                width="74"
                height="9.6"
                rx="4.8"
                fill="#163B5C"
                stroke="#7E7D82"
                strokeWidth="0.6"
              />
              <path
                d="M284 25.4 L290 34.6 M294 25.4 L300 34.6 M304 25.4 L310 34.6 M314 25.4 L320 34.6 M324 25.4 L330 34.6 M334 25.4 L340 34.6"
                stroke="#7E7D82"
                strokeWidth="0.7"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* A bainha fica POR CIMA da lâmina: só aparece o que sai dela. */}
          <div className="katana-saya" />
          <span className="katana-mouth" />
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
