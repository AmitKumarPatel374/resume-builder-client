import {
  Share2Icon,
  EyeIcon,
  EyeOffIcon,
  DownloadIcon,
} from "lucide-react"
import ResumePreview from "./ResumePreview"

const RightPanel = ({
  resumeData,
  handleShare,
  changeResumeVisibility,
  downloadResume,
}) => {
  return (
    <div className="lg:col-span-7 max-lg:mt-10">
      <div className="relative w-full">
        {/* Floating actions */}
        <div className="absolute -top-12 right-0 -translate-x-1/2 flex items-center gap-2 z-20 print:hidden">
          {resumeData.public && (
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 text-xs
              bg-gradient-to-br from-blue-100 to-blue-200
              text-blue-600 rounded-lg hover:ring ring-blue-300 transition"
            >
              <Share2Icon className="size-4" />
              Share
            </button>
          )}

          <button
            type="button"
            onClick={changeResumeVisibility}
            className="flex items-center gap-2 px-4 py-2 text-xs
            bg-gradient-to-br from-purple-100 to-purple-200
            text-purple-600 rounded-lg hover:ring ring-purple-300 transition"
          >
            {resumeData.public ? (
              <EyeIcon className="size-4" />
            ) : (
              <EyeOffIcon className="size-4" />
            )}
            {resumeData.public ? "Public" : "Private"}
          </button>

          <button
            type="button"
            onClick={downloadResume}
            className="flex items-center gap-2 px-6 py-2 text-xs
            bg-gradient-to-br from-green-100 to-green-200
            text-green-600 rounded-lg hover:ring ring-green-300 transition"
          >
            <DownloadIcon className="size-4" />
            Download
          </button>
        </div>

        {/* Resume preview */}
        <div id="resume-preview" className="relative">
          <ResumePreview
            data={resumeData}
            template={resumeData.template}
            accentColor={resumeData.accent_color}
          />
        </div>
      </div>
    </div>
  )
}

export default RightPanel
