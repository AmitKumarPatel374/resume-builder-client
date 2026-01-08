import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import PersonalInfoForm from "./PersonalInfoForm"
import ProfessionalSummarForm from "./ProfessionalSummarForm"
import ExperienceForm from "./ExperienceForm"
import EducationForm from "./EducationForm"
import ProjectForm from "./ProjectForm"
import SkillsForm from "./SkillsForm"
import TemplateSelector from "./TemplateSelector"
import ColorPicker from "./ColorPicker"
import toast from "react-hot-toast"

const LeftPanel = ({
  resumeData,
  setResumeData,
  activeSection,
  activeSectionIndex,
  setActiveSectionIndex,
  sections,
  removeBackGround,
  setRemoveBackGround,
  saveResume,
}) => {
  return (
    <div className="relative lg:col-span-5 rounded-lg overflow-hidden print:hidden">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
        <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />
        <hr
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-2000"
          style={{
            width: `${(activeSectionIndex * 100) / (sections.length - 1)}%`,
          }}
        />

        <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
          <div className="flex items-center gap-2">
            <TemplateSelector
              selectedTemplate={resumeData.template}
              onChange={(template) =>
                setResumeData((prev) => ({ ...prev, template }))
              }
            />
            <ColorPicker
              selectedColor={resumeData.accent_color}
              onChange={(color) =>
                setResumeData((prev) => ({ ...prev, accent_color: color }))
              }
            />
          </div>

          <div className="flex items-center">
            {activeSectionIndex !== 0 && (
              <button
                onClick={() => setActiveSectionIndex((p) => p - 1)}
                className="flex items-center gap-1 p-3 text-sm text-gray-600"
              >
                <ChevronLeft className="size-4" /> Previous
              </button>
            )}
            <button
              onClick={() => setActiveSectionIndex((p) => p + 1)}
              disabled={activeSectionIndex === sections.length - 1}
              className="flex items-center gap-1 p-3 text-sm text-gray-600"
            >
              <ChevronRight className="size-4" /> Next
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {activeSection.id === "personal" && (
            <PersonalInfoForm
              data={resumeData.personal_info}
              onChange={(data) =>
                setResumeData((p) => ({ ...p, personal_info: data }))
              }
              removeBackground={removeBackGround}
              setRemoveBackground={setRemoveBackGround}
            />
          )}

          {activeSection.id === "summary" && (
            <ProfessionalSummarForm
              data={resumeData.professional_summary}
              onChange={(data) =>
                setResumeData((p) => ({ ...p, professional_summary: data }))
              }
              setResumeData={setResumeData}
            />
          )}

          {activeSection.id === "experience" && (
            <ExperienceForm
              data={resumeData.experience}
              onChange={(data) =>
                setResumeData((p) => ({ ...p, experience: data }))
              }
            />
          )}

          {activeSection.id === "education" && (
            <EducationForm
              data={resumeData.education}
              onChange={(data) =>
                setResumeData((p) => ({ ...p, education: data }))
              }
            />
          )}

          {activeSection.id === "projects" && (
            <ProjectForm
              data={resumeData.projects}
              onChange={(data) =>
                setResumeData((p) => ({ ...p, projects: data }))
              }
            />
          )}

          {activeSection.id === "skills" && (
            <SkillsForm
              data={resumeData.skills}
              onChange={(data) =>
                setResumeData((p) => ({ ...p, skills: data }))
              }
            />
          )}
        </div>

        <button
          onClick={() => toast.promise(saveResume, { loading: "Saving..." })}
          className="bg-gradient-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring rounded-md px-6 py-2 mt-6 text-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default LeftPanel
