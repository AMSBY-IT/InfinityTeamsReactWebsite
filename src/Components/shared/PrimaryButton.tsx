import React from 'react'
import { Button } from "../ui/button"

type Props = {
	btnText: string
	onClick: () => void
}

const PrimaryButton = ({ btnText = "Btn Text ", onClick }: Props) => {
	return (
		<div className="mt-2 w-full  ">

			<Button size={"lg"} className="w-full bg-purple-800 hover:bg-purple-900" onClick={onClick} >{btnText}</Button>
		</div>
	)
}

export default PrimaryButton