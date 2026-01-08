import { Check, Layout } from "lucide-react"
import React, { useState } from "react"

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "A clean, traditional resume format with clear sections and professional typography",
    },
    {
      id: "modern",
      name: "Modern",
      preview: "Sleek design with strategic use of color and modern font choices",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a single image and clean typography",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra-clean design that puts your content front and center",
    },
    {
      id: "creative",
      name: "Creative",
      preview: "Two-column creative layout with highlighted sections",
    },
    {
      id: "creative-timeline",
      name: "Creative Timeline",
      preview: "Timeline-based creative resume layout",
    },
    {
      id: "creative-sidebar",
      name: "Creative Sidebar",
      preview: "Sidebar-focused modern resume",
    },
    {
      id: "professional",
      name: "Professional",
      preview: "Clean ATS-friendly resume for freshers and MERN developers",
    },
    { id: "split-modern", name: "Split Modern", preview: "Modern split layout" },
    { id: "ats-one-page", name: "ATS One Page", preview: "Strict ATS friendly resume" },
    { id: "dark-creative", name: "Dark Creative", preview: "Dark themed modern resume" },
    {
      id: "hr-professional",
      name: "HR Professional",
      preview: "Most preferred clean resume by HRs",
    },
    {
      id: "hr-minimal",
      name: "HR Minimal Corporate",
      preview: "ATS-safe corporate resume",
    },
    {
      id: "hr-classic-2col",
      name: "HR Classic Two Column",
      preview: "Two-column clean professional HR resume",
    },
    {
      id: "hr-strict-ats",
      name: "HR Strict ATS",
      preview: "Plain text ATS-safe resume (best for portals)",
    },
    {
      id: "hr-experience",
      name: "HR Experience Focused",
      preview: "Projects & experience focused resume",
    },
  ]
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1
  text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100
  ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Layout size={14} /> <span className="max-sm:hidden">Template</span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 w-72 z-20
  bg-white border border-gray-200 rounded-md shadow-lg
  max-h-80 overflow-y-auto"
        >
          {templates.map((template) => {
            return (
              <div
                key={template.id}
                onClick={() => {
                  onChange(template.id)
                  setIsOpen(false)
                }}
                className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? "border-blue-400 bg-blue-100"
                    : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
                }`}
              >
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2">
                    <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <h4 className="font-medium text-gray-800">{template.name}</h4>
                  <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">
                    {template.preview}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default TemplateSelector
