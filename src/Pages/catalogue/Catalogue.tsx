/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchBar from "@/components/Catalouge/SearchBar"
import React, { useState } from 'react'

import FilterSection from "@/components/Catalouge/FilterSection"
import SearchList from "@/components/Catalouge/SearchList"
import { Job } from "@/lib/type"

export const jobData: Job[] = [
  {
    id: "1",
    title: "UX UI Designer",
    company: {
      name: "MAGIC UNICORN",
    },
    location: {
      city: "ESTONIA",
      country: "TALIN",
    },
    level: "Student-Entry",
    type: "Remote Job",
    salary: 10520,
    description:
      "In this position, you will work closely with cross-functional peers, including Product Managers, Data Analysts, and Engineers to make offers, bundles, and messaging efficient and seamless.",
    tags: ["Design", "UX", "UI"],
    postedDate: "24 March 2024",
  },
  {
    id: "2",
    title: "UI Artist",
    company: {
      name: "BUSINESS CORPORATE GROUP",
    },
    location: {
      city: "DENMARK",
      country: "COPENHAGEN",
    },
    level: "Mid-Senior",
    type: "Remote Job",
    salary: 62100,
    description:
      "With design ingrained at all levels of our organization, including senior leadership, your impact will be valued and recognized. Join a well-established design organization.",
    tags: ["Design", "Senior", "Remote"],
    postedDate: "24 March 2024",
  },
  {
    id: "3",
    title: "Senior Product Designer",
    company: {
      name: "GUY",
    },
    location: {
      city: "CZECH REPUBLIC",
      country: "PRAGUE",
    },
    level: "Senior",
    type: "Full-Time",
    salary: 100000,
    description:
      "We've adopted a hybrid workplace model where 2 days in office are recommended but not enforced. It's up to you and your team to decide on the exact days you'll spend working together.",
    tags: ["Design", "Product", "Remote"],
    postedDate: "23 March 2024",
  },
  {
    id: "4",
    title: "Senior Product Designer",
    company: {
      name: "SXTRA GROUP",
    },
    location: {
      city: "ALBANIA",
      country: "TIRANA",
    },
    level: "Mid-Senior",
    type: "Full-Time",
    salary: 60520,
    description:
      "Since our inception in 2014, founded by a team of scientists from CERN, we have dedicated ourselves to providing free and open-source technology to millions worldwide and freedom online.",
    tags: ["Design", "Senior", "AI"],
    postedDate: "28 March 2024",
  },
  {
    id: "5",
    title: "UI Designer",
    company: {
      name: "MOON ACTIVE",
    },
    location: {
      city: "ARGENTINA",
      country: "BUENOS AIRES",
    },
    level: "Senior",
    type: "Full-Time",
    salary: 84800,
    description:
      "We're a growing, ambitious HealthTech business building the essential digital health partner of tomorrow to empower women, girls with the knowledge and support they need to live better.",
    tags: ["Design", "Senior", "Full-Time"],
    postedDate: "28 March 2024",
  },
  {
    id: "6",
    title: "Lead Product Designer",
    company: {
      name: "GUY",
    },
    location: {
      city: "BELGIUM",
      country: "BRUSSELS",
    },
    level: "Lead",
    type: "Full-Time",
    salary: 101100,
    description:
      "In July, we secured a $200M investment led by General Atlantic to help revolutionize women's health, and became the first purely digital consumer women's health app to achieve unicorn status!",
    tags: ["Design", "Lead", "Full-Time"],
    postedDate: "26 March 2024",
  },
  {
    id: "7",
    title: "Senior Product Designer",
    company: {
      name: "COWI",
    },
    location: {
      city: "FINLAND",
      country: "HELSINKI",
    },
    level: "Senior",
    type: "Full-Time",
    salary: 100500,
    description:
      "In this position, you will work closely with cross-functional peers, including Product Managers, Data Analysts, and Engineers to make offers, bundles, and messaging efficient and seamless.",
    tags: ["Design", "Senior", "Full-Time"],
    postedDate: "22 March 2024",
  },
  {
    id: "8",
    title: "Senior Game Designer",
    company: {
      name: "LITTIT GROUP",
    },
    location: {
      city: "ITALIA",
      country: "ROME",
    },
    level: "Senior",
    type: "Full-Time",
    salary: 100800,
    description:
      "We've adopted a hybrid workplace model where 2 days in office are recommended but not enforced. It's up to you and your team to decide on the exact days you'll spend working together.",
    tags: ["Design", "Game", "Full-Time"],
    postedDate: "22 March 2024",
  },
  {
    id: "9",
    title: "Senior Concept Artist, Generalist",
    company: {
      name: "BEHANCE",
    },
    location: {
      city: "GERMANY",
      country: "BERLIN",
    },
    level: "Senior",
    type: "Remote Job",
    salary: 102100,
    description:
      "With design ingrained at all levels of our organization, including senior leadership, your impact will be valued and recognized. Join a well-established design organization.",
    tags: ["Design", "Senior", "Remote"],
    postedDate: "22 March 2024",
  },
]





const Catalogue = () => {
	const [jobs] = useState(jobData)
	const [selectedFilters, setSelectedFilters] = useState({
	  keywords: ["Product Designer", "Artist", "Game Designer", "Designer"],
	  country: "All Countries",
	  jobType: "",
	  salaryRange: "",
	  employmentTypes: [],
	  seniorityLevels: [],
	  minSalary: 0,
	  maxSalary: 500000,
	})
  
	const handleSearch = () => {
	  // In a real app, this would filter the jobs based on the selected filters
	  console.log("Searching with filters:", selectedFilters)
	}
  
	const handleFilterChange = (filterType: string, value: any) => {
	  setSelectedFilters((prev) => ({
		...prev,
		[filterType]: value,
	  }))
	}

  return (
	<div className="max-w-[100rem]  mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <SearchBar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} onSearch={handleSearch} />

        <div className="flex flex-col md:flex-row gap-6">
          <FilterSection selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />

          <div className="flex-1">
            <SearchList jobs={jobs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogue