import { UploadCloud, XIcon, LoaderCircleIcon } from "lucide-react"

const UploadResumeModal = ({
  title,
  setTitle,
  resume,
  setResume,
  isLoading,
  onClose,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-lg border bg-white p-6 shadow-lg"
      >
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Upload existing resume
          </h2>
          <p className="text-sm text-slate-500">
            Upload a PDF resume to enhance it using the builder.
          </p>
        </div>

        {/* Title input */}
        <input
          type="text"
          placeholder="e.g. My current resume"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-green-600 focus:outline-none mb-4"
          required
        />

        {/* File upload */}
        <label
          htmlFor="resume-input"
          className="block text-sm text-slate-700"
        >
          Resume file (PDF)

          <div
            className="mt-2 flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 p-6 py-10 text-slate-400 hover:border-green-500 hover:text-green-600 transition cursor-pointer"
          >
            {resume ? (
              <p className="text-sm text-green-700">{resume.name}</p>
            ) : (
              <>
                <UploadCloud className="size-10 stroke-1" />
                <p className="text-sm">Click to upload PDF</p>
              </>
            )}
          </div>
        </label>

        <input
          type="file"
          id="resume-input"
          accept=".pdf"
          hidden
          onChange={(e) => setResume(e.target.files[0])}
        />

        {/* Action button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 w-full flex items-center justify-center gap-2 rounded-md bg-green-600 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-70 transition"
        >
          {isLoading && (
            <LoaderCircleIcon className="size-4 animate-spin" />
          )}
          {isLoading ? "Uploading..." : "Upload resume"}
        </button>

        {/* Close */}
        <XIcon
          className="absolute top-4 right-4 size-5 cursor-pointer text-slate-400 hover:text-slate-600"
          onClick={onClose}
        />
      </div>
    </form>
  )
}

export default UploadResumeModal
