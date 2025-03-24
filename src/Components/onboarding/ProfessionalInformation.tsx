import React from 'react'
import PrimaryButton from "../shared/PrimaryButton"
import IconBtn from "../shared/IconBtn"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"


function ProfessionalInformation() {
  const navigate = useNavigate()

  const handleNextPage = () => {
    navigate('/onboarding/cv-skills')

  }

  return (
    <div>



      <div className="flex items-center space-x-2">
        <PrimaryButton btnText="Save " onClick={() => { }} />
        <IconBtn Icons={<ArrowRight />} onClick={handleNextPage} />
      </div>
    </div>
  )
}

export default ProfessionalInformation