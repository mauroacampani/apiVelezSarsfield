import { Link } from 'react-router-dom'

export function Navbar() {
  return (
        <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto">
                <Link to={'/'} tab="positions" className="tab-button active px-6 py-3 nav-link">Posiciones</Link>
                <button tab="fixture" className="tab-button px-6 py-3 nav-link">Fixture</button>
                <button tab="players" className="tab-button px-6 py-3 nav-link">Jugadores</button>
                <button tab="squad" className="tab-button px-6 py-3 nav-link">Plantel</button>
                <button tab="stats" className="tab-button px-6 py-3 nav-link">Estadísticas</button>
            </div>
        </div>
    </nav>
  )
}