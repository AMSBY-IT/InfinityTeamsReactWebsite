import { Check } from "lucide-react"

export default function ProgressSteps() {
	const steps = [
		{ id: 1, name: "Personal Details", completed: true, current: false },
		{ id: 2, name: "Precessional Details", completed: true, current: false },
		{ id: 3, name: "Resume and Skills", completed: false, current: true },
	]

	return (
		<div className="flex justify-center">
			<nav className="flex space-x-4" aria-label="Progress">
				{steps.map((step, stepIdx) => (
					<div key={step.id} className="flex items-center">
						{step.completed ? (
							<div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center">
								<Check className="h-4 w-4 text-white" />
							</div>
						) : step.current ? (
							<div className="flex-shrink-0 h-6 w-6 rounded-full border-2 border-purple-600 flex items-center justify-center">
								<span className="text-xs font-medium text-purple-600">{step.id}</span>
							</div>
						) : (
							<div className="flex-shrink-0 h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
								<span className="text-xs font-medium text-gray-500">{step.id}</span>
							</div>
						)}
						<span className={`ml-2 text-sm ${step.current ? "text-purple-600 font-medium" : "text-gray-500"}`}>
							{step.name}
						</span>
						{stepIdx < steps.length - 1 && <div className="ml-4 w-8 border-t border-gray-300" />}
					</div>
				))}
			</nav>
		</div>
	)
}

