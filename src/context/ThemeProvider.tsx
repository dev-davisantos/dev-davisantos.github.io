import { useEffect, useState, type ReactNode } from 'react'
import { readThemeFromDom, THEME_STORAGE_KEY, ThemeContext, type Theme } from './theme'

/** Aplica o tema escolhido no <html> e guarda a preferência para a próxima visita. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readThemeFromDom)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      /* armazenamento indisponível: a escolha vale só para esta sessão */
    }
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
