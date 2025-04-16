import type React from "react"
import { Avatar } from "@/component/ui/avatar"
import { AvatarFallback } from "@/component/ui/avatar"
import { Home, Users, Briefcase, Globe, SettingsIcon, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CandidateContext } from "@/Provider/CandidateContext"

export default function Sidebar() {
	const { profile } = useContext(CandidateContext)
	return (
		<div className=" border-r bg-white flex flex-col h-full">
			<div className="p-4 border-b flex items-center gap-2">
				<div className="h-8 w-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold">U</div>
				<h1 className="text-lg font-semibold max-lg:hidden">Infinity teams</h1>
			</div>

			<div className="p-4 border-b">
				<div className="flex items-center gap-3">
					<Avatar className="h-8 w-8 bg-purple-200 ">
						<AvatarFallback>{profile ? profile?.candidate?.name?.at(0) : "Register"}</AvatarFallback>
					</Avatar>
					<div className="flex-1 max-lg:hidden">{profile && profile?.candidate?.name?.at(0)}</div>
				</div>
			</div>
			<nav className="flex-1 p-2">
				<ul className="space-y-1">
					<NavItem icon={<Home size={18} />} label="Home" />
					<NavItem icon={<Users size={18} />} label="People" active />
					<NavItem icon={<Briefcase size={18} />} label="Jobs" />
					<NavItem icon={<Globe size={18} />} label="Imigrations" />
					<NavItem icon={<SettingsIcon size={18} />} label="Team Settings" />
				</ul>
			</nav>
		</div>
	)
}

interface NavItemProps {
	icon: React.ReactNode
	label: string
	active?: boolean
	hasSubmenu?: boolean
}

function NavItem({ icon, label, active, hasSubmenu }: NavItemProps) {
	return (
		<li>
			<Link
				to="#"
				className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${active ? "text-purple-600 bg-purple-50" : "text-gray-700 hover:bg-gray-100"
					}`}
			>
				<span className="text-gray-500">{icon}</span>
				<span className="max-lg:hidden">{label}</span>
				{hasSubmenu && <ChevronDown size={16} className="ml-auto text-gray-400" />}
			</Link>
		</li>
	)
}

