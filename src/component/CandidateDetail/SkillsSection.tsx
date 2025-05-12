




const SkillsSection = () => {
    
    return (
        <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Business",
                "Marketing",
                "Development",
                "Founder",
                "Entrepreneur",
                "Html",
                "Interface Design",
                "University",
                "Engineering",
                "Mobile Apps",
              ].map((skill) => (
                <div key={skill} className="bg-gray-100 py-1 px-2 rounded-md">
                  {skill}
                </div>
              ))}
            </div>
          </div>
    )
}

export default SkillsSection;