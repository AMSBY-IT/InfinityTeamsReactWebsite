/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"


import { Button } from "@/components/ui/button"
import Select from "react-select"
import { Input } from "../ui/input"

interface SearchBarProps {
  selectedFilters: {
    keywords: string[]
    country: string
    jobType: string
    salaryRange: string
  }
  onFilterChange: (filterType: string, value: any) => void
  onSearch: () => void
}

export default function SearchBar({ selectedFilters, onFilterChange, onSearch }: SearchBarProps) {
  // const handleRemoveKeyword = (keyword: string) => {
  //   onFilterChange(
  //     "keywords",
  //     selectedFilters.keywords.filter((k) => k !== keyword),
  //   )
  // }

  const countryOptions = [
    { value: "All Countries", label: "All Countries" },
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Canada", label: "Canada" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
  ]

  const jobTypeOptions = [
    { value: "", label: "Job Type" },
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Remote", label: "Remote" },
    { value: "Contract", label: "Contract" },
  ]

  const salaryRangeOptions = [
    { value: "", label: "Salary Range" },
    { value: "0-50000", label: "$0 - $50,000" },
    { value: "50000-100000", label: "$50,000 - $100,000" },
    { value: "100000-150000", label: "$100,000 - $150,000" },
    { value: "150000+", label: "$150,000+" },
  ]

  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "1px solid #e2e8f0",
      borderRadius: "0.375rem",
      minHeight: "42px",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #cbd5e0",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "0 12px",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#64748b",
    }),
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex-1 flex items-center gap-2  border rounded-lg overflow-x-auto">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Input value={"Swafter developer "} className="border-0 shadow-none py-0 "/>
            
{/*             
            {selectedFilters.keywords.map((keyword) => (
              <Badge key={keyword} variant="secondary" className="flex items-center gap-1 py-1.5 px-2">
                {keyword}
                <X size={14} className="cursor-pointer" onClick={() => handleRemoveKeyword(keyword)} />
              </Badge>
            ))} */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:w-2/3">
          <Select
            options={countryOptions}
            styles={customSelectStyles}
            value={countryOptions.find((option) => option.value === selectedFilters.country)}
            onChange={(option) => onFilterChange("country", option?.value || "All Countries")}
            className="w-full border-0"
            placeholder="All Countries"
            isSearchable
          />

          <Select
            options={jobTypeOptions}
            styles={customSelectStyles}
            value={jobTypeOptions.find((option) => option.value === selectedFilters.jobType)}
            onChange={(option) => onFilterChange("jobType", option?.value || "")}
            className="w-full"
            placeholder="Job Type"
            isSearchable
          />

          <Select
            options={salaryRangeOptions}
            styles={customSelectStyles}
            value={salaryRangeOptions.find((option) => option.value === selectedFilters.salaryRange)}
            onChange={(option) => onFilterChange("salaryRange", option?.value || "")}
            className="w-full"
            placeholder="Salary Range"
            isSearchable
          />
        </div>

        <Button onClick={onSearch} className="bg-black text-white hover:bg-gray-800 px-6 py-2 h-auto">
          START SEARCHING
        </Button>
      </div>
    </div>
  )
}
