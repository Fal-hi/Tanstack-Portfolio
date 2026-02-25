import { Link } from '@tanstack/react-router'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center px-6 transition-all duration-300 bg-sky-white/50 dark:bg-gray-950/50 backdrop-blur-sm border-b border-light-blue/50 dark:border-gray-800/50">
      <div className="container flex items-center justify-between h-full mx-auto">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-neutral-gray dark:text-gray-100 hover:text-muted-sky dark:hover:text-muted-sky transition-colors"
        >
          Portfolio.
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-neutral-gray/80 dark:text-gray-300 hover:text-muted-sky dark:hover:text-muted-sky transition-colors [&.active]:text-muted-sky"
    >
      {children}
    </Link>
  )
}
