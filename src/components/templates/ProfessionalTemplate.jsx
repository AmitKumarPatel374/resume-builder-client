import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ProfessionalTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-gray-800">
      {/* ===== HEADER ===== */}
      <header className="mb-6">
        <h1
          className="text-3xl font-bold uppercase"
          style={{ color: accentColor }}
        >
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm mt-2 text-gray-600">
          {data.personal_info?.email && (
            <span className="flex items-center gap-1">
              <Mail size={14} /> {data.personal_info.email}
            </span>
          )}
          {data.personal_info?.phone && (
            <span className="flex items-center gap-1">
              <Phone size={14} /> {data.personal_info.phone}
            </span>
          )}
          {data.personal_info?.location && (
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {data.personal_info.location}
            </span>
          )}
          {data.personal_info?.github && (
            <span className="flex items-center gap-1">
              <Github size={14} /> {data.personal_info.github}
            </span>
          )}
          {data.personal_info?.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin size={14} /> {data.personal_info.linkedin}
            </span>
          )}
        </div>
      </header>

      {/* ===== SUMMARY ===== */}
      {data.professional_summary && (
        <section className="mb-6">
          <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
            Summary
          </h2>
          <p className="text-sm leading-relaxed">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* ===== SKILLS ===== */}
      {data.skills?.length > 0 && (
        <section className="mb-6">
          <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
            Skills
          </h2>
          <p className="text-sm">
            {data.skills.join(" | ")}
          </p>
        </section>
      )}

      {/* ===== PROJECTS ===== */}
      {data.projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="font-semibold uppercase mb-3" style={{ color: accentColor }}>
            Projects
          </h2>

          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-semibold text-sm">
                  {project.name}
                </h3>

                {project.tech && (
                  <p className="text-xs text-gray-600">
                    {project.tech}
                  </p>
                )}

                {project.description && (
                  <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                    {project.description.split("\n").map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== EXPERIENCE (Optional for Fresher) ===== */}
      {data.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="font-semibold uppercase mb-3" style={{ color: accentColor }}>
            Experience
          </h2>

          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-sm">{exp.position}</h3>
              <p className="text-xs text-gray-600">
                {exp.company} | {formatDate(exp.start_date)} –{" "}
                {exp.is_current ? "Present" : formatDate(exp.end_date)}
              </p>
              {exp.description && (
                <p className="text-sm mt-1">{exp.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* ===== EDUCATION ===== */}
      {data.education?.length > 0 && (
        <section>
          <h2 className="font-semibold uppercase mb-3" style={{ color: accentColor }}>
            Education
          </h2>

          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-sm">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-600">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-500">
                  {formatDate(edu.graduation_date)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
