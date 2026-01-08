import React from "react"
import ClassicTemplate from "../templates/ClassicTemplate"
import MinimalImageTemplate from "../templates/MinimalImageTemplate"
import MinimalTemplate from "../templates/MinimalTemplate"
import ModernTemplate from "../templates/ModernTemplate"
import CreativeTemplate from "../templates/CreativeTemplate"
import CreativeSidebarTemplate from "../templates/CreativeSidebarTemplate"
import CreativeTimelineTemplate from "../templates/CreativeTimelineTemplate"
import ProfessionalTemplate from "../templates/ProfessionalTemplate"
import SplitModernTemplate from "../templates/SplitModernTemplate"
import ATSOnePageTemplate from "../templates/ATSOnePageTemplate"
import DarkCreativeTemplate from "../templates/DarkCreativeTemplate"
import HRProfessionalTemplate from "../templates/HRProfessionalTemplate"
import HRMinimalCorporateTemplate from "../templates/HRMinimalCorporateTemplate"
import HRClassicTwoColumnTemplate from "../templates/HRClassicTwoColumnTemplate"
import HRStrictATSResume from "../templates/HRStrictATSResume"
import HRExperienceFocusedTemplate from "../templates/HRExperienceFocusedTemplate"

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return (
          <ModernTemplate
            data={data}
            accentColor={accentColor}
          />
        )
      case "minimal":
        return (
          <MinimalTemplate
            data={data}
            accentColor={accentColor}
          />
        )
      case "minimal-image":
        return (
          <MinimalImageTemplate
            data={data}
            accentColor={accentColor}
          />
        )
      case "creative":
        return (
          <CreativeTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "creative-timeline":
        return (
          <CreativeTimelineTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "creative-sidebar":
        return (
          <CreativeSidebarTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "professional":
        return (
          <ProfessionalTemplate
            data={data}
            accentColor={accentColor}
          />
        )
      case "split-modern":
        return (
          <SplitModernTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "ats-one-page":
        return (
          <ATSOnePageTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "dark-creative":
        return (
          <DarkCreativeTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "hr-professional":
        return (
          <HRProfessionalTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "hr-minimal":
        return (
          <HRMinimalCorporateTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "hr-classic-2col":
        return (
          <HRClassicTwoColumnTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      case "hr-strict-ats":
        return <HRStrictATSResume data={data} />

      case "hr-experience":
        return (
          <HRExperienceFocusedTemplate
            data={data}
            accentColor={accentColor}
          />
        )

      default:
        return (
          <ClassicTemplate
            data={data}
            accentColor={accentColor}
          />
        )
    }
  }

  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={`border border-gray-200 print:shadow-none print:border-none ${classes}`}
      >
        {renderTemplate()}
      </div>
    </div>
  )
}

export default ResumePreview
