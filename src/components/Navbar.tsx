import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { avatarUrl, profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projetos', end: false },
  { to: '/contact', label: 'Contato', end: false },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src={avatarUrl}
            alt="Foto de Davi Santos"
            width={32}
            height={32}
            className="size-8 rounded-sm object-cover ring-1 ring-line"
          />
          <span className="font-mono text-sm text-text">{profile.brand}</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `relative block px-3 py-2 text-sm transition-colors duration-200 after:absolute after:inset-x-3 after:-bottom-px after:h-px after:origin-left after:bg-linear-to-r after:from-green-bright after:to-transparent ${
                      isActive
                        ? 'text-accent-text after:scale-x-100'
                        : 'text-muted after:scale-x-0 hover:text-text'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex size-10 items-center justify-center rounded-sm border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent-text sm:hidden"
          >
            {isMenuOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav id="menu-mobile" aria-label="Navegação principal (mobile)" className="border-t border-line sm:hidden">
          <ul className="shell flex flex-col py-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-3 text-sm transition-colors duration-200 ${
                      isActive ? 'text-accent-text' : 'text-muted hover:text-text'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
