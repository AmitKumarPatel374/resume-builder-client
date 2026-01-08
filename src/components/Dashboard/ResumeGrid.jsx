import ResumeCard from "./ResumeCard"

const ResumeGrid = ({ resumes, colors, onOpen, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
      {resumes.map((resume, index) => (
        <ResumeCard
          key={resume._id}
          resume={resume}
          color={colors[index % colors.length]}
          onOpen={onOpen}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default ResumeGrid
