import { useContext } from 'react'
import { ThemeContext } from '../context/theme'

/** Acessa o tema atual e a função de alternância. Uso: `const { theme, toggleTheme } = useTheme()`. */
export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme precisa estar dentro de <ThemeProvider>.')
  }

  return context
}
