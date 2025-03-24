import React from 'react'
import TextInput from "../shared/TextInput"
import RadioSelect from "../sidebar/RadioSelect"
import DropDown from "../shared/DropDown"
import PrimaryButton from "../shared/PrimaryButton"
import IconBtn from "../shared/IconBtn"
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react"
import DatePicker from "../shared/DatePicker"


function PersonaInformation() {
	const [date, setDate] = React.useState<Date>(new Date())

	const navigate = useNavigate()
	const handleNextPage = () => {
		navigate('/onboarding/professional')
	}

	return (
		<div>

			<DropDown options={[{ id: "id", name: "name name" }]} label="Country" />

			<TextInput label="City" placeHolder="Enter City" helperText="helper text" />
			<RadioSelect />


			<DatePicker label="Starting Date " date={date} setDate={setDate} />

			<div className="flex items-center space-x-2">
				<PrimaryButton btnText="Save " onClick={() => { }} />
				<IconBtn Icons={<ArrowRight />} onClick={handleNextPage} />
			</div>
		</div>
	)
}

export default PersonaInformation