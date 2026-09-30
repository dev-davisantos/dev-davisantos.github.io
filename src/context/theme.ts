import { createContext } from 'react'

export type Theme = 'dark' | 'light'

export const THEME_STORAGE_KEY = 'dd:theme'

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * O tema inicial é lido do atributo `data-theme` do <html>, que já foi definido
 * pelo script inline do index.html (evita piscar a cor errada no primeiro paint).
 */
export function readThemeFromDom(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}
