export interface Job {
	id: string
	title: string
	company: {
	  name: string
	  logo?: string
	}
	location: {
	  city: string
	  country: string
	}
	level: string
	type: string
	salary: number
	description: string
	tags: string[]
	postedDate: string
  }
  