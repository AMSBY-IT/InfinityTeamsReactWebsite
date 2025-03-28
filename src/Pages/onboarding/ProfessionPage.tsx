import BoardingContainer from "@/components/onboarding/BoardingContainer"
import ProfessionalInformation from "@/components/onboarding/ProfessionalInformation"
import React from 'react'


function ProfessionPage() {
  return (
    <BoardingContainer step={2} stepTitle="Professional Information">
      <ProfessionalInformation />
    </BoardingContainer>
  )
}

export default ProfessionPage