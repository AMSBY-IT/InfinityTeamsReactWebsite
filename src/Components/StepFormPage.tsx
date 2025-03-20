import { useEffect } from "react"
import StepBar from "./ui/stepbar"
import { Outlet, useLocation, useNavigate } from "react-router-dom";



const steps = [
    { id: 0, title: "Personal Information", subtitle:"basic information", path: "/onboarding/personal" },
    { id: 1, title: "Profession",subtitle:"basic information", path: "/onboarding/professional" },
    { id: 2, title: "Skills & CV",subtitle:"basic information", path: "/onboarding/cv-skills" },
  ];

export default function StepFormPage() {
    const navigate = useNavigate();
  const location = useLocation();
  const totalSteps = steps.length;
  
  // Sync step with URL
  const currentStep = steps.findIndex((step) => step.path === location.pathname);

  useEffect(() => {
    if (currentStep === -1) {
      navigate(steps[0].path); // Redirect to first step if URL is incorrect
    }
  }, [currentStep, navigate]);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      navigate(steps[currentStep + 1].path);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      navigate(steps[currentStep - 1].path);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="p-6">
          {/* Horizontal Step Bar */}
          <StepBar steps={steps} currentStep={currentStep} />

          {/* Current step content */}
          <Outlet />

          {/* Navigation buttons */}
          <div className="buttons">
        {currentStep > 0 && <button onClick={prevStep}>Previous</button>}
        {currentStep < totalSteps - 1 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={() => alert("Form Submitted!")}>Complete Registration</button>
        )}
      </div>
        </div>
      </div>
    </div>
  )
}