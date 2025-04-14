/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"

import { ChevronUp, ChevronDown,  } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import Checkbox from "../shared/Checkbox"
import { Button } from "../ui/button"

interface FilterSectionProps {
  selectedFilters: {
    employmentTypes: string[]
    seniorityLevels: string[]
    minSalary: number
    maxSalary: number
  }
  onFilterChange: (filterType: string, value: any) => void
}

export default function FilterSection({ selectedFilters, onFilterChange }: FilterSectionProps) {
  const [expandedSections, setExpandedSections] = useState({
    employment: true,
    seniority: true,
    salary: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleEmploymentTypeChange = (type: string) => {
    const currentTypes = selectedFilters.employmentTypes
    if (currentTypes.includes(type)) {
      onFilterChange(
        "employmentTypes",
        currentTypes.filter((t) => t !== type),
      )
    } else {
      onFilterChange("employmentTypes", [...currentTypes, type])
    }
  }

  const handleSeniorityLevelChange = (level: string) => {
    const currentLevels = selectedFilters.seniorityLevels
    if (currentLevels.includes(level)) {
      onFilterChange(
        "seniorityLevels",
        currentLevels.filter((l) => l !== level),
      )
    } else {
      onFilterChange("seniorityLevels", [...currentLevels, level])
    }
  }

  // const handleSalaryChange = (values: number[]) => {
  //   onFilterChange("minSalary", values[0])
  //   onFilterChange("maxSalary", values[1])
  // }

  const employmentTypes = [
    { id: "full-time", label: "Full Time Jobs", count: 159 },
    { id: "part-time", label: "Part Time Jobs", count: 38 },
    { id: "remote", label: "Remote Jobs", count: 50 },
    { id: "training", label: "Training Jobs", count: 15 },
  ]

  const seniorityLevels = [
    { id: "student", label: "Student Level", count: 48 },
    { id: "entry", label: "Entry Level", count: 51 },
    { id: "mid", label: "Mid Level", count: 150 },
    { id: "senior", label: "Senior Level", count: 30 },
    { id: "directors", label: "Directors", count: 20 },
    { id: "vp", label: "VP or Above", count: 15 },
  ]

  return (
    <div className="w-full md:w-72 space-y-6">
      {/* Employment Type Filter */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("employment")}>
          <h3 className="font-medium">Type of Employment</h3>
          {expandedSections.employment ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>

        {expandedSections.employment && (
          <div className="mt-4 space-y-3">
            {employmentTypes.map((type) => (
              <div key={type.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={type.id}
                    checked={selectedFilters.employmentTypes.includes(type.id)}
                    onCheckedChange={() => handleEmploymentTypeChange(type.id)}
                  />
                  <label
                    htmlFor={type.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {type.label}
                  </label>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-md">{type.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Seniority Level Filter */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("seniority")}>
          <h3 className="font-medium">Seniority Level</h3>
          {expandedSections.seniority ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>

        {expandedSections.seniority && (
          <div className="mt-4 space-y-3">
            {seniorityLevels.map((level) => (
              <div key={level.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={level.id}
                    checked={selectedFilters.seniorityLevels.includes(level.id)}
                    onCheckedChange={() => handleSeniorityLevelChange(level.id)}
                  />
                  <label
                    htmlFor={level.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {level.label}
                  </label>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-md">{level.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Salary Range Filter */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("salary")}>
          <h3 className="font-medium">Salary Range</h3>
          {expandedSections.salary ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>

        {expandedSections.salary && (
          <div className="mt-6 space-y-6">
            {/* <Sliders
              defaultValue={[selectedFilters.minSalary]}
              max={500000}
              step={1000}
              onValueChange={handleSalaryChange}
              className="my-6"
            /> */}

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">MIN</p>
                <div className="border rounded-md p-2 w-24">
                  <input
                    type="text"
                    value={formatCurrency(selectedFilters.minSalary)}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value.replace(/\D/g, ""))
                      if (!isNaN(value)) {
                        onFilterChange("minSalary", value)
                      }
                    }}
                    className="w-full text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="border-t w-4 h-0"></div>

              <div>
                <p className="text-xs text-gray-500 mb-1">MAX</p>
                <div className="border rounded-md p-2 w-24">
                  <input
                    type="text"
                    value={formatCurrency(selectedFilters.maxSalary)}
                    onChange={(e) => {
                      const value = Number.parseInt(e.target.value.replace(/\D/g, ""))
                      if (!isNaN(value)) {
                        onFilterChange("maxSalary", value)
                      }
                    }}
                    className="w-full text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-black text-white hover:bg-gray-800">APPLY</Button>
              <Button variant="outline" className="flex-1">
                RESET
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
