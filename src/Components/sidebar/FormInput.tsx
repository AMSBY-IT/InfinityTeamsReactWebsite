import type React from "react"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function CompensationSection() {
	return (
		<div className="space-y-4">
			<h4 className="text-sm font-medium mb-3">Compensation</h4>
			<div className="grid grid-cols-2 gap-3">
				<CompensationButton icon={<Calendar className="h-5 w-5" />} label="Annual" selected />
				<CompensationButton icon={<Clock className="h-5 w-5" />} label="Hourly" />
			</div>

			<div>
				<h4 className="text-sm font-medium mb-2">Gross annual salary</h4>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<span className="text-gray-500">USD</span>
					</div>
					<input
						type="text"
						className="block w-full pl-12 pr-12 py-2.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
						placeholder="0.00"
						defaultValue="50,000"
					/>
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						<span className="text-yellow-500 text-sm">Median</span>
					</div>
				</div>
				<div className="flex justify-between items-center mt-2">
					<p className="text-xs text-gray-500">Standart fulltime work hour per week in United States</p>
					<button className="text-xs text-blue-600 flex items-center">
						Click to see more
						<ChevronRight className="h-3 w-3 ml-1" />
					</button>
				</div>
			</div>

			<div className="flex items-center justify-between pt-2">
				<span className="text-sm font-medium">Add signing bonus</span>
				<Switch />
			</div>
		</div>
	)
}

interface CompensationButtonProps {
	icon: React.ReactNode
	label: string
	selected?: boolean
}

function CompensationButton({ icon, label, selected }: CompensationButtonProps) {
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

