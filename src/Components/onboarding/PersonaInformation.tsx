import React from 'react'
import TextInput from "../shared/TextInput"
import RadioSelect from "../sidebar/RadioSelect"
import DropDown from "../shared/DropDown"


function PersonaInformation() {
	return (
		<div>

			<DropDown options={[{ id: "id", name: "name name" }]} label="Country" />

			<TextInput label="City" placeHolder="Enter City" helperText="helper text" />
			<RadioSelect />
		</div>
	)
}

export default PersonaInformation