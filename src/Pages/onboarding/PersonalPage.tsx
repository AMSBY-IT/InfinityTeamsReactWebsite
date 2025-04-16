
import BoardingContainer from "@/component/onboarding/BoardingContainer"
import PersonaInformation from "@/component/onboarding/PersonaInformation"

function PersonalPage() {
  return (
    <div>
      <BoardingContainer step={1} stepTitle="Personal Information">
        <PersonaInformation />
      </BoardingContainer>
    </div>
  )
}

export default PersonalPage