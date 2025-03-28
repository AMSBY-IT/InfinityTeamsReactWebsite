import { Popover, PopoverTrigger } from "@radix-ui/react-popover"
import React from 'react'
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { PopoverContent } from "../ui/popover"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Value } from "react-calendar/dist/esm/shared/types.js"

function DatePicker({ label = "label date", startdate,setStartDate}: { label: string, startdate: Date, setStartDate: React.Dispatch<React.SetStateAction<Date>>}) {

	const handleDateSelect = (val: Value) => {
		setStartDate(val as Date)
		
	}
	return (
		<div className="pt-3">
			<h4 className="text-sm font-medium mb-2">{label}</h4>

			<Popover>
				<PopoverTrigger className="w-full">
					<div className="w-full">
						<Button
							variant={"outline"}
							className={cn(
								"w-full  py-6  justify-start text-left font-normal border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500",
								!startdate && "text-muted-foreground"
							)}
						>
							<div className="flex space-x-2 items-center py-2">

								<CalendarIcon />
								<div>

									{startdate ? startdate.toDateString() : <span>Pick a date</span>}
								</div>
							</div>
						</Button>
					</div>
				</PopoverTrigger>
				<PopoverContent>
					<Calendar onChange={handleDateSelect} value={startdate} />
				</PopoverContent>
			</Popover>
		</div>
	)
}

export default DatePicker