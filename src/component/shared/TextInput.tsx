type Props = {
	label: string
	placeHolder: string
	helperText: string
	value?:string | undefined
	onChange:(value:string)=>void
	required?: boolean
}

export default function  TextInput({ label, placeHolder, helperText,value,onChange,required}: Props) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value); 
	  };
	return (
		<div className="py-2">
			<div>
				<h4 className="text-sm font-medium mb-2">{label}{required && <span className="text-red-500 ml-1">*</span>}</h4>
				<div className="relative">

					<input
						type="text"
						className="block w-full bg-white pl-2 py-2.5 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
						placeholder={placeHolder}
						value={value}
						onChange={handleChange}
					/>

				</div>
				<div className="flex justify-between items-center mt-2">
					<p className="text-xs text-red-600">{helperText}</p>
				</div>
			</div>
		</div>
	)
}

// interface CompensationButtonProps {
// 	icon: React.ReactNode
// 	label: string
// 	selected?: boolean
// }

// function CompensationButton({ icon, label, selected }: CompensationButtonProps) {
// 	return (
// 		<button
// 			className={`flex items-center gap-2 px-4 py-3 border rounded-md ${selected ? "border-purple-600 bg-purple-50 text-purple-600" : "border-gray-300 hover:border-gray-400"
// 				}`}
// 		>
// 			<span className={selected ? "text-purple-600" : "text-gray-500"}>{icon}</span>
// 			<span className="text-sm font-medium">{label}</span>
// 			{selected && (
// 				<span className="ml-auto">
// 					<Check className="h-4 w-4 text-purple-600" />
// 				</span>
// 			)}
// 		</button>
// 	)
// }

// function Check(props: React.SVGProps<SVGSVGElement>) {
// 	return (
// 		<svg
// 			{...props}
// 			xmlns="http://www.w3.org/2000/svg"
// 			width="24"
// 			height="24"
// 			viewBox="0 0 24 24"
// 			fill="none"
// 			stroke="currentColor"
// 			strokeWidth="2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		>
// 			<polyline points="20 6 9 17 4 12" />
// 		</svg>
// 	)
// }

