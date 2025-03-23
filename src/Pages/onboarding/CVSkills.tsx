import BoardingContainer from "@/components/onboarding/BoardingContainer"
import CvSkills from "@/components/onboarding/CvSkills"
import React from 'react'

function CVSkills() {
  return (
    <BoardingContainer step={3} stepTitle="Resume & Skills ">
      <CvSkills />
    </BoardingContainer>
  )
}

export default CVSkills