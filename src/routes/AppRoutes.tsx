import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from '../layouts/MainLayout'
import { Contact } from '../pages/Contact/Contact'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { Projects } from '../pages/Projects/Projects'

/** Todas as rotas do site. Adicionar uma página nova = adicionar uma linha aqui. */
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
