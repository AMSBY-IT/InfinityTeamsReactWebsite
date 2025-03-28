import type React from "react"
import { Search } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { AvatarFallback } from "@/components/ui/avatar"
import { Home, Users, Briefcase, BarChart2, Shield, CreditCard, Globe, SettingsIcon, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"

export default function Sidebar() {
	return (
		<div className="w-64 border-r bg-white flex flex-col h-full">
			<div className="p-4 border-b flex items-center gap-2">
				<div className="h-8 w-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold">U</div>
				<h1 className="text-lg font-semibold">Infinity teams</h1>
			</div>

			<div className="p-4 border-b">
				<div className="flex items-center gap-3">
					<Avatar className="h-8 w-8 bg-purple-600 text-white">
						<AvatarFallback>MF</AvatarFallback>
					</Avatar>
					<div className="flex-1">March Fonda</div>
					<ChevronDown size={16} className="text-gray-400" />
				</div>
			</div>

			<div className="p-4 border-b">
				<div className="relative">
					<Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
					<input
						type="text"
						placeholder="Search"
						className="w-full pl-8 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
					/>
				</div>
			</div>

			<nav className="flex-1 p-2">
				<ul className="space-y-1">
					<NavItem icon={<Home size={18} />} label="Home" />
					<NavItem icon={<Users size={18} />} label="People" active hasSubmenu />
					<NavItem icon={<Briefcase size={18} />} label="Jobs" />
					<NavItem icon={<BarChart2 size={18} />} label="Analytics" />
					<NavItem icon={<Shield size={18} />} label="Compliance" />
					<NavItem icon={<CreditCard size={18} />} label="Payment" />
					<NavItem icon={<Globe size={18} />} label="Imigrations" />
					<NavItem icon={<SettingsIcon size={18} />} label="Team Settings" />
				</ul>
			</nav>

			<div className="p-4 border-t">
				<NavItem icon={<SettingsIcon size={18} />} label="Setting" />
			</div>
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
				<span>{label}</span>
				{hasSubmenu && <ChevronDown size={16} className="ml-auto text-gray-400" />}
			</Link>
		</li>
	)
}

