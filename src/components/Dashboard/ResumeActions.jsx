import { PlusIcon, UploadCloudIcon } from "lucide-react"

const ResumeActions = ({ onCreate, onUpload }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Create resume */}
      <button
        type="button"
        onClick={onCreate}
        className="w-full sm:max-w-36 h-48 flex flex-col items-center justify-center gap-2 rounded-lg
        border border-dashed border-slate-300 bg-white text-slate-600
        hover:border-indigo-500 hover:shadow-md transition-all duration-300 group"
      >
        <PlusIcon className="size-11 p-2.5 rounded-full text-white bg-gradient-to-br from-indigo-400 to-indigo-600" />
        <p className="text-sm font-medium group-hover:text-indigo-600">
          Create resume
        </p>
        <span className="text-xs text-slate-400 text-center px-2">
          Start from scratch
        </span>
      </button>

      {/* Upload resume */}
      <button
        type="button"
        onClick={onUpload}
        className="w-full sm:max-w-36 h-48 flex flex-col items-center justify-center gap-2 rounded-lg
        border border-dashed border-slate-300 bg-white text-slate-600
        hover:border-purple-500 hover:shadow-md transition-all duration-300 group"
      >
        <UploadCloudIcon className="size-11 p-2.5 rounded-full text-white bg-gradient-to-br from-purple-400 to-purple-600" />
        <p className="text-sm font-medium group-hover:text-purple-600">
          Upload resume
        </p>
        <span className="text-xs text-slate-400 text-center px-2">
          Improve an existing PDF
        </span>
      </button>
    </div>
  )
}

export default ResumeActions
