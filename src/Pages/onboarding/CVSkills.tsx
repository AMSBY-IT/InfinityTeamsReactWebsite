import BoardingContainer from "@/components/onboarding/BoardingContainer"
import CvSkills from "@/components/onboarding/CvSkills"


function CVSkills() {
  return (
    <BoardingContainer step={3} stepTitle="Resume & Skills ">
      <CvSkills />
    </BoardingContainer>
  )
}

export default CVSkills