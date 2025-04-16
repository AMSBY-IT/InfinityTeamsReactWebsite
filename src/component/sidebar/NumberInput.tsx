import { ChevronDown } from "lucide-react"
export default function SalarySection() {
	return (
		<div className="space-y-4">
			<div>
				<h4 className="text-sm font-medium mb-2">Salary type</h4>
				<div className="relative">
					<select
						className="w-full appearance-none border rounded-md px-4 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-purple-500"
						defaultValue="hourly"
					>
						<option value="hourly">Hourly</option>
						<option value="salary">Salary</option>
					</select>
					<ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
				</div>
			</div>

			<div>
				<h4 className="text-sm font-medium mb-2">Payment rate</h4>
				<div className="flex">
					<div className="relative flex-1">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="text-gray-500">$</span>
						</div>
						<input
							type="text"
							className="block w-full pl-7 pr-12 py-2.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
							placeholder="0.00"
							defaultValue="40"
						/>
					</div>
					<div className="relative ml-2 w-32">
						<select
							className="w-full appearance-none border rounded-md px-4 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-purple-500"
							defaultValue="hours"
						>
							<option value="hours">hours</option>
						</select>
						<ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
					</div>
				</div>
				<p className="text-xs text-gray-500 mt-2">Standart fulltime work hour per week in United States $40</p>
			</div>
		</div>
	)
}

