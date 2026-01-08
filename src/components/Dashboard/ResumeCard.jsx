import {
  FilePenLineIcon,
  TrashIcon,
  PencilIcon,
} from "lucide-react"

const ResumeCard = ({ resume, color, onOpen, onDelete, onEdit }) => {
  return (
    <button
      type="button"
      onClick={() => onOpen(resume._id)}
      className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center gap-2
      rounded-lg border transition-all duration-300 group hover:shadow-md"
      style={{
        background: `linear-gradient(135deg, ${color}10, ${color}40)`,
        borderColor: `${color}40`,
      }}
    >
      {/* Icon */}
      <FilePenLineIcon
        className="size-7"
        style={{ color }}
      />

      {/* Title */}
      <p
        className="text-sm px-2 text-center font-medium truncate w-full"
        style={{ color }}
        title={resume.title}
      >
        {resume.title}
      </p>

      {/* Date */}
      <p
        className="absolute bottom-2 text-[11px]"
        style={{ color: `${color}90` }}
      >
        Updated {new Date(resume.updatedAt).toLocaleDateString()}
      </p>

      {/* Actions */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 hidden group-hover:flex gap-1"
      >
        <button
          type="button"
          onClick={() => onEdit(resume._id, resume.title)}
          className="rounded p-1.5 hover:bg-white/50 transition"
          title="Edit title"
        >
          <PencilIcon className="size-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(resume._id)}
          className="rounded p-1.5 hover:bg-white/50 transition"
          title="Delete resume"
        >
          <TrashIcon className="size-4" />
        </button>
      </div>
    </button>
  )
}

export default ResumeCard
