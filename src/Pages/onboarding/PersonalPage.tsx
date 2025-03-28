import React from 'react'
import BoardingContainer from "@/components/onboarding/BoardingContainer"
import PersonaInformation from "@/components/onboarding/PersonaInformation"

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