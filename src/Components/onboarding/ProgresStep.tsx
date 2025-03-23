import { Check } from "lucide-react"

export default function ProgressSteps({ step }: { step: number }) {
	const steps = [
		{ id: 1, name: "Personal Details", completed: false, current: step === 1 },
		{ id: 2, name: "Professional Details", completed: false, current: step === 2 },
		{ id: 3, name: "Resume and Skills", completed: false, current: step === 3 },
	]

	return (
		<div className="flex justify-center">
			<nav className="flex space-x-4" aria-label="Progress">
				{steps.map((s, stepIdx) => (
					<div key={s.id} className="flex items-center">
						{s.completed ? (
							<div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center">
								<Check className="h-4 w-4 text-white" />
							</div>
						) : stepIdx === step ? (
							<div className="flex-shrink-0 h-6 w-6 rounded-full border-2 border-purple-600 flex items-center justify-center">
								<span className="text-xs font-medium text-purple-600">{s.id}</span>
							</div>
						) : (
							<div className="flex-shrink-0 h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
								<span className="text-xs font-medium text-gray-500">{s.id}</span>
							</div>
						)}
						<span className={`ml-2 text-sm ${s.current ? "text-purple-600 font-medium" : "text-gray-500"}`}>
							{s.name}
						</span>
						{stepIdx < steps.length - 1 && <div className="ml-4 w-8 border-t border-gray-300" />}
					</div>
				))}
			</nav>
		</div>
	)
}

