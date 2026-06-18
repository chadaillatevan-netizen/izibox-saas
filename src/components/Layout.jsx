import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Boxes', path: '/boxes', icon: '📦' },
  { name: 'Clients', path: '/clients', icon: '👤' },
  { name: 'Facturation', path: '/facturation', icon: '💶' },
  { name: 'Paramètres', path: '/parametres', icon: '⚙️' },
]

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      
      {/* Sidebar */}
      <div className="w-56 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-green-400">iziBox</h1>
          <p className="text-xs text-gray-500 mt-1">Self-stockage</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                location.pathname === item.path
                  ? 'bg-green-500/10 text-green-400 font-medium'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

    </div>
  )
}