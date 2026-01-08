import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import toast from "react-hot-toast"
import pdfToText from "react-pdftotext"
import apiInstance from "../configs/api"

import ResumeActions from "../components/Dashboard/ResumeActions"
import ResumeGrid from "../components/Dashboard/ResumeGrid"
import CreateResumeModal from "../components/Dashboard/CreateResumeModal"
import UploadResumeModal from "../components/Dashboard/UploadResumeModal"
import EditResumeModal from "../components/Dashboard/EditResumeModal"

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]

  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState("")
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const loadAllResumes = async () => {
    try {
      const { data } = await apiInstance.get("/resume/data")
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (e) => {
    e.preventDefault()
    try {
      const { data } = await apiInstance.post("/resume/create", { title })
      setTitle("")
      setShowCreateResume(false)
      navigate(`/app/builder/${data.resume._id}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const uploadResume = async (e) => {
    e.preventDefault()
    if (!resume) return toast.error("Please upload a PDF file")

    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await apiInstance.post("/ai/upload-resume", {
        title,
        resumeText,
      })
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const editTitle = async (e) => {
    e.preventDefault()
    try {
      const { data } = await apiInstance.put("/resume/update", {
        resumeId: editResumeId,
        resumeData: { title },
      })

      setAllResumes(
        allResumes.map((r) =>
          r._id === editResumeId ? { ...r, title } : r
        )
      )

      setEditResumeId("")
      setTitle("")
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const deleteResume = async (resumeId) => {
    if (!window.confirm("Are you sure you want to delete this resume?")) return
    try {
      const { data } = await apiInstance.delete(`/resume/delete/${resumeId}`)
      setAllResumes(allResumes.filter((r) => r._id !== resumeId))
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-800">
          Your Resumes
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Create, upload, and manage your resumes in one place.
        </p>
      </div>

      {/* Actions */}
      <div className="mb-6">
        <ResumeActions
          onCreate={() => setShowCreateResume(true)}
          onUpload={() => setShowUploadResume(true)}
        />
      </div>

      <hr className="border-slate-300 my-6 sm:w-[320px]" />

      {/* Resume List */}
      <div>
        {allResumes.length === 0 ? (
          <p className="text-sm text-slate-500 mt-10">
            You haven’t created any resumes yet.
          </p>
        ) : (
          <ResumeGrid
            resumes={allResumes}
            colors={colors}
            onOpen={(id) => navigate(`/app/builder/${id}`)}
            onDelete={deleteResume}
            onEdit={(id, title) => {
              setEditResumeId(id)
              setTitle(title)
            }}
          />
        )}
      </div>

      {/* Modals */}
      {showCreateResume && (
        <CreateResumeModal
          title={title}
          setTitle={setTitle}
          onClose={() => setShowCreateResume(false)}
          onSubmit={createResume}
        />
      )}

      {showUploadResume && (
        <UploadResumeModal
          title={title}
          setTitle={setTitle}
          resume={resume}
          setResume={setResume}
          isLoading={isLoading}
          onClose={() => setShowUploadResume(false)}
          onSubmit={uploadResume}
        />
      )}

      {editResumeId && (
        <EditResumeModal
          title={title}
          setTitle={setTitle}
          onClose={() => setEditResumeId("")}
          onSubmit={editTitle}
        />
      )}
    </div>
  )
}

export default Dashboard
