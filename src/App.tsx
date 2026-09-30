import { LoadingScreen } from './components/LoadingScreen'
import { ThemeProvider } from './context/ThemeProvider'
import { useIntroExperience } from './hooks/useIntroExperience'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  const intro = useIntroExperience()

  return (
    <ThemeProvider>
      {intro.isVisible ? (
        <LoadingScreen isLeaving={intro.isLeaving} onSkip={intro.skip} />
      ) : null}

      {/* `inert` impede navegar no conteúdo enquanto a intro está na tela
          (o `contents` evita que essa div interfira no layout). */}
      <div className="contents" inert={intro.isVisible}>
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App

