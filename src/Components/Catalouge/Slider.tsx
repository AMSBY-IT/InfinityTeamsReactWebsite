"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MoreVertical, MapPin, X, Heart } from "lucide-react"
import { Badge } from "../ui/badge"
import { Job } from "@/lib/type"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
              {job.company.logo ? (
                <img
                  src={job.company.logo || "/placeholder.svg"}
                  alt={job.company.name}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <span className="text-lg font-bold">{job.company.name.charAt(0)}</span>
              )}
            </div>

            <div>
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-xs text-gray-500 uppercase">{job.company.name}</p>
            </div>
          </div>

          <div className="relative">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowOptions(!showOptions)}>
              <MoreVertical size={16} />
            </Button>

            {showOptions && (
              <div className="absolute right-0 mt-1 w-48 bg-white shadow-lg rounded-md z-10 py-1">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Share Job</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Report Job</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Hide Job</button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
          <MapPin size={14} />
          <span>
            {job.location.city}, {job.location.country}
          </span>
        </div>

        <div className="mt-3">
          <div className="text-sm font-medium">{job.level}</div>
          <div className="flex justify-between items-center mt-1">
            <div className="text-sm">{job.type}</div>
            <div className="font-bold text-right">${job.salary.toLocaleString()} PA</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600 line-clamp-3">{job.description}</div>

        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">{job.postedDate}</div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? <Heart size={16} fill="red" className="text-red-500" /> : <Heart size={16} />}
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8">
              <X size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
