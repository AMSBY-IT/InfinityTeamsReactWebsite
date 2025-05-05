const AboutSection = () => {
    return (
        <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">About the candidate</h2>
            <p className="text-gray-700 text-md leading-relaxed mb-6">
              Microsoft is an equal opportunity employer. All qualified applicants will receive consideration for
              employment without regard to age, ancestry, color, family or medical care leave, gender identity or
              expression, genetic information, marital status, medical condition, national origin, physical or mental
              disability, political affiliation, protected veteran status, race, religion, sex (including pregnancy),
              sexual orientation, or any other characteristic protected by applicable laws, regulations and ordinances.
              All qualified applicants will receive consideration for employment.
            </p>

            <div className="space-y-4">
              <h3 className="font-medium">Responsibilities:</h3>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2">
                <li>Deliver the project or solution as per the baseline scope, cost & schedule.</li>
                <li>Maintain high team & customer satisfaction levels.</li>
                <li>Ensure high quality delivery without any escalations.</li>
              </ul>
            </div>

            <button className="mt-4 text-blue-600 text-sm flex items-center">
              <span className="mr-1">See more</span>
              <span className="text-blue-600">•••</span>
            </button>
          </div>
    )
}

export default AboutSection;
