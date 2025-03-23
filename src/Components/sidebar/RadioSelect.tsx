import type React from "react"
import { Calendar, Clock, ClipboardCheck } from "lucide-react"

export default function RadioSelect() {
	return (
		<div>
			<h4 className="text-sm font-medium mb-3">Employment Type</h4>
			<div className="grid grid-cols-3 gap-3">
				<EmploymentTypeButton icon={<Clock className="h-5 w-5" />} label="Full Time" selected />
				<EmploymentTypeButton icon={<ClipboardCheck className="h-5 w-5" />} label="Contract" />
				<EmploymentTypeButton icon={<Calendar className="h-5 w-5" />} label="Partime" />
			</div>
		</div>
	)
}

interface EmploymentTypeButtonProps {
	icon: React.ReactNode
	label: string
	selected?: boolean
}

function EmploymentTypeButton({ icon, label, selected }: EmploymentTypeButtonProps) {
	return (
		<button
			className={`flex items-center gap-2 px-4 py-3 border rounded-md ${selected ? "border-purple-600 bg-purple-50 text-purple-600" : "border-gray-300 hover:border-gray-400"
				}`}
		>
			<span className={selected ? "text-purple-600" : "text-gray-500"}>{icon}</span>
			<span className="text-sm font-medium">{label}</span>
			{selected && (
				<span className="ml-auto">
					<Check className="h-4 w-4 text-purple-600" />
				</span>
			)}
		</button>
	)
}

function Check(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	)
}

