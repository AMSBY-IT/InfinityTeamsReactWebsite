"use client"

import { useState } from "react"
import { Job } from "@/lib/type"
import CandidateCard from "./CandidateCard"

interface JobListProps {
  jobs: Job[]
}

export default function SearchList({ jobs }: JobListProps) {
  const [sortBy, setSortBy] = useState("newest")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          <span className="text-black">{jobs.length.toLocaleString()}</span> Jobs Found
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <option value="newest">Newest Post</option>
            <option value="oldest">Oldest Post</option>
            <option value="salary-high">Highest Salary</option>
            <option value="salary-low">Lowest Salary</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <CandidateCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
