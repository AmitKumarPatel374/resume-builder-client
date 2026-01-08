import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeftIcon } from "lucide-react"
import apiInstance from "../configs/api"
import toast from "react-hot-toast"

import LeftPanel from "../components/resumeBuilder/LeftPanel"
import RightPanel from "../components/resumeBuilder/RightPanel"

const ResumeBuilder = () => {
  const { resumeId } = useParams()

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    projects: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  })

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [removeBackGround, setRemoveBackGround] = useState(false)

  const sections = [
    { id: "personal", name: "personal Info" },
    { id: "summary", name: "Summary" },
    { id: "experience", name: "Experience" },
    { id: "education", name: "Education" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
  ]

  const activeSection = sections[activeSectionIndex]

  const loadExistingResume = async () => {
    try {
      const { data } = await apiInstance.get(`/resume/get/${resumeId}`)
      if (data.resume) {
        setResumeData(data.resume)
        document.title = data.resume.title
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    loadExistingResume()
  }, [])

  const changeResumeVisibility = async () => {
    try {
      const formData = new FormData()
      formData.append("resumeId", resumeId)
      formData.append("resumeData", JSON.stringify({ public: !resumeData.public }))

      const { data } = await apiInstance.put(`/resume/update`, formData)
      setResumeData({ ...resumeData, public: !resumeData.public })
      toast.success(data.message)
    } catch (error) {
      console.log(error)
    }
  }

  const handleShare = () => {
    const frontendurl = window.location.href.split("/app/")[0]
    const resumeUrl = frontendurl + "/view/" + resumeId

    if (navigator.share) {
      navigator.share({ url: resumeUrl, text: "My Resume" })
    } else {
      alert("share is not supported on this browser")
    }
  }

  const downloadResume = () => {
    window.print()
  }

  const saveResume = async () => {
    try {
      let updatedResumeData = structuredClone(resumeData)

      if (typeof resumeData.personal_info.image === "object") {
        delete updatedResumeData.personal_info.image
      }

      const formData = new FormData()
      formData.append("resumeId", resumeId)
      formData.append("resumeData", JSON.stringify(updatedResumeData))

      removeBackGround && formData.append("removeBackground", "true")
      typeof resumeData.personal_info.image === "object" &&
        formData.append("image", resumeData.personal_info.image)

      const { data } = await apiInstance.put(`/resume/update`, formData)
      setResumeData(data.resume)
      toast.success(data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6 print:hidden">
        <Link
          to="/app"
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <LeftPanel
            resumeData={resumeData}
            setResumeData={setResumeData}
            activeSection={activeSection}
            activeSectionIndex={activeSectionIndex}
            setActiveSectionIndex={setActiveSectionIndex}
            sections={sections}
            removeBackGround={removeBackGround}
            setRemoveBackGround={setRemoveBackGround}
            saveResume={saveResume}
          />

          <RightPanel
            resumeData={resumeData}
            resumeId={resumeId}
            handleShare={handleShare}
            changeResumeVisibility={changeResumeVisibility}
            downloadResume={downloadResume}
          />
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder
