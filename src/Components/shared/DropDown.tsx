import { ChevronDown } from "lucide-react"
import React from 'react'

export type Options = {
	id: string,
	name: string
}
type Props = {
	label: string
	options: Options[]
}

const DropDown = (props: Props) => {
	return (
		<div className="py-2">
			<div>
				<h4 className="text-sm font-medium mb-2">{props.label}</h4>
				<div className="relative">
					<select
						className="w-full bg-white appearance-none border rounded-md px-4 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-purple-500"
						defaultValue="hourly"
					>
						{props.options.map((opt) => {
							return <option value={opt.id}>{opt.name}</option>
						})}
					</select>
					<ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
				</div>
			</div>
		</div>

	)
}

export default DropDown