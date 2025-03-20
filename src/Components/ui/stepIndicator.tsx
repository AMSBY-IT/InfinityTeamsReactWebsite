interface StepIndicatorProps {
    currentStep: number
    totalSteps: number
  }
  
  export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <div className="mb-6">
          {/* Step Dots */}
          <div className="flex justify-center space-x-2 mb-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index + 1 === currentStep ? "bg-blue-500" :
                  index + 1 < currentStep ? "bg-gray-400" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
    
          {/* Step Text */}
          <div className="text-center font-medium text-gray-600">
            Step {currentStep} of {totalSteps}
          </div>
    
          {/* Progress Bar */}
          <div className="relative pt-4">
            <div className="w-full h-1 bg-gray-200 rounded-full">
              <div
                className="h-1 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      );
  }