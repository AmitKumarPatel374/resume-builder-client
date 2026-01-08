import { XIcon } from "lucide-react"

const EditResumeModal = ({ title, setTitle, onClose, onSubmit }) => {
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
            Edit resume title
          </h2>
          <p className="text-sm text-slate-500">
            Update the title to better identify this resume.
          </p>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="e.g. Frontend Developer Resume"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-green-600 focus:outline-none mb-4"
          required
        />

        {/* Action */}
        <button
          type="submit"
          className="w-full rounded-md bg-green-600 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
        >
          Update title
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

export default EditResumeModal
