import React from "react"
import { Zap } from "lucide-react"
import Title from "./Title"

const Feature = () => {
  const [isHover, setIsHover] = React.useState(false)

  return (
    <div
      id="features"
      className="flex flex-col items-center my-16 scroll-mt-16"
    >
      {/* Small badge */}
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
        <Zap width={14} />
        <span>Simple workflow</span>
      </div>

      {/* Section title */}
      <Title
        title="Build your resume step by step"
        description="A clean and guided process that helps you create a professional resume without confusion."
      />

      <div className="flex flex-col md:flex-row items-center xl:-mt-10">
        {/* Illustration */}
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Resume builder preview"
        />

        {/* Feature list */}
        <div
          className="px-4 md:px-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Feature 1 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div
              className={`p-6 flex gap-4 rounded-xl transition-colors border ${
                !isHover
                  ? "bg-violet-100 border-violet-300"
                  : "border-transparent group-hover:bg-violet-100 group-hover:border-violet-300"
              }`}
            >
              <svg
                className="size-6 stroke-violet-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path d="M12 20h9" />
                <path d="M12 4h9" />
                <path d="M4 9h16" />
                <path d="M4 15h16" />
              </svg>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Guided resume sections</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Fill personal details, experience, education, projects and skills in a clear
                  order.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              <svg
                className="size-6 stroke-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path d="M12 20h9" />
                <path d="M12 4h9" />
                <path d="M4 9h4" />
                <path d="M4 15h4" />
              </svg>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">AI writing assistance</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Improve summaries and job descriptions, or upload an existing PDF resume to get
                  AI-powered suggestions.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <svg
                className="size-6 stroke-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Download & share easily</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Download your resume as PDF or share a public link when needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Font (optional – you already use this globally) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Feature
