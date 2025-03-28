
import Header from "../shared/Header"
import Sidebar from "../sidebar/Sidebar"
import ProgressSteps from "./ProgresStep"



type Props = {
	children: React.ReactNode
	step: number
	stepTitle: string
}


export default function BoardingContainer({ children, step, stepTitle }: Props) {
	return (
		<div className="flex h-screen bg-gray-50">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<Header title={stepTitle} />
				<main className="flex-1 overflow-auto p-6">
					<div className="text-center mt-6">
						<h1 className="text-2xl font-semibold">Welcome, Just few steps</h1>
						<p className="text-gray-500 mt-1">Create a new Profile!</p>
					</div>
					<div className="max-w-3xl mx-auto mt-6">
						<ProgressSteps step={step} />
						<div className="mt-8">
							<h2 className="text-sm text-gray-500">Step {step}</h2>
							<h3 className="text-xl font-semibold mt-1">{stepTitle}</h3>

							<div className="mt-8 space-y-8">
								{/* <EmploymentTypeSection /> */}
								{/* <SalarySection /> */}
								{children}
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

