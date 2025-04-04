import { CandidateContext } from "@/Provider/CandidateContext";
import { useContext } from "react";

export default function TechnicalSkills() {
  const { profile } =useContext(CandidateContext);
    return (
      <div className="bg-white rounded-lg border p-4">
        <h2 className="text-xl font-semibold mb-6">Technical skills</h2>
  
        <div className="mb-6">
          <h3 className="font-medium mb-3">Top 3 skills</h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100">
              <span className="w-5 h-5 flex items-center justify-center bg-cyan-400 rounded-full text-white text-xs">
                ⚛
              </span>
              <span>React</span>
              <span className="text-gray-500">· 5 yrs</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100">
              <span className="w-5 h-5 flex items-center justify-center bg-gray-800 rounded-full text-white text-xs">
                ⬢
              </span>
              <span>Redux</span>
              <span className="text-gray-500">· 3 yrs</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100">
              <span className="w-5 h-5 flex items-center justify-center bg-emerald-600 rounded-full text-white text-xs">
                V
              </span>
              <span>Vue.js</span>
              <span className="text-gray-500">· 3 yrs</span>
            </div>
          </div>
        </div>
  
        <div>
          <h3 className="font-medium mb-3">Other skills</h3>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((s)=>(
              <div className="px-3 py-1.5 rounded-md bg-gray-100">
              <span>{s.name}</span>
              {/* <span className="text-gray-500">· 5 yrs</span> */}
            </div>
            ))}
            
            {/* <div className="px-3 py-1.5 rounded-md bg-gray-100">
              <span>JavaScript</span>
              <span className="text-gray-500">· 5 yrs</span>
            </div>
            <div className="px-3 py-1.5 rounded-md bg-gray-100">
              <span>HTML/CSS</span>
              <span className="text-gray-500">· 6 yrs</span>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
  
  