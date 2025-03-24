import React from 'react'
import { Button } from "../ui/button"

type Props = {
	Icons: JSX.Element
	onClick: () => void
}

function IconBtn({ Icons, onClick }: Props) {
	return (
		<div className="mt-2">
			<Button size={"lg"} className=" bg-purple-800" onClick={onClick}>{Icons}</Button>
		</div>
	)
}

export default IconBtn