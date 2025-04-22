import BoardingContainer from "@/component/onboarding/BoardingContainer"
import ProfessionalInformation from "@/component/onboarding/ProfessionalInformation"



function ProfessionPage() {
  return (
    <BoardingContainer step={2} stepTitle="Professional Information">
      <ProfessionalInformation />
    </BoardingContainer>
  )
}

export default ProfessionPage