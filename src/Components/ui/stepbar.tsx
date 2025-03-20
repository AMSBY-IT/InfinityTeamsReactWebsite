interface Step {
    id: number
    title: string
    subtitle: string
  }
  
  interface StepBarProps {
    steps: Step[]
    currentStep: number
  }
  
  export default function StepBar({ steps, currentStep }: StepBarProps) {
    return (
      <div className="w-full">
  
        {/* Horizontal step bar */}
        <div className="flex w-full border border-gray-200 rounded-md">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex-1 p-4 ${index !== steps.length - 1 ? "border-r border-gray-200" : ""}`}>
              <div className="flex items-start">
                <div className="flex-grow">
                  <div className="flex items-center">
                    <p className={`font-medium ${currentStep === step.id ? "text-gray-800" : "text-gray-600"}`}>
                      {step.id}. {step.title}
                    </p>
  
                    {/* Checkmark for completed steps */}
                    {/* {currentStep > step.id && (
                      <div className="ml-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="w-3 h-3 text-white"></div>
                      </div>
                    )} */}
                  </div>
                  <p className="text-sm text-gray-500">{step.subtitle}</p>
                </div>
              </div>
  
              {/* Blue indicator bar for current step */}
              {currentStep === step.id && <div className="h-1 bg-blue-500 mt-4 rounded-full" />}
            </div>
          ))}
        </div>
      </div>
    )
  }