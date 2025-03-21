import { Home, ChevronRight, Info } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
	return (
		<header className="border-b bg-white p-4 flex items-center justify-between">
			<div className="flex items-center gap-2 text-sm">
				<Link to={""} className="text-gray-500 hover:text-gray-700">
					<Home size={16} />
				</Link>
				<ChevronRight size={14} className="text-gray-400" />
				<Link to={""} className="text-gray-500 hover:text-gray-700">
					Candidate
				</Link>
				<ChevronRight size={14} className="text-gray-400" />
				<span className="text-gray-700">Personal Details</span>
			</div>
			<button className="text-gray-500 hover:text-gray-700">
				<Info size={18} />
			</button>
		</header>
	)
}

