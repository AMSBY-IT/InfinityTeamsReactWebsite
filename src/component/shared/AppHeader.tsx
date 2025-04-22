import { Search } from "lucide-react"


function AppHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold text-gray-900">
          Infinity Team
        </a>
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="/new-tools" className="text-sm text-gray-600 hover:text-gray-900">
              New Tools
            </a>
          </li>
          
          <li>
            <a href="/toolkits" className="text-sm text-gray-600 hover:text-gray-900">
              Toolkits
            </a>
          </li>
        </ul>
      </nav>

      <div className="relative">
        <div className="flex items-center rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5">
          <Search className="mr-2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Quick search..."
            className="w-40 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
          <span className="ml-2 rounded border border-gray-200 bg-white px-1 text-xs text-gray-400">⌘K</span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default AppHeader