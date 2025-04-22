import BoardingContainer from "@/component/onboarding/BoardingContainer"
import CvSkills from "@/component/onboarding/CvSkills"


function CVSkills() {
  return (
    <BoardingContainer step={3} stepTitle="Resume & Skills ">
      <CvSkills />
    </BoardingContainer>
  )
}

export default CVSkills