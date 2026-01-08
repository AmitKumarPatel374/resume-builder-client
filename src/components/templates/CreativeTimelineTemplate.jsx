import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Briefcase,
  GraduationCap,
  FolderGit2,
} from "lucide-react";

const CreativeTimelineTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-gray-800">
      {/* Header */}
      <header className="p-8 border-b-4" style={{ borderColor: accentColor }}>
        <h1 className="text-4xl font-bold" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-gray-600 mt-1">
          {data.personal_info?.profession || "Professional Title"}
        </p>

        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && <span>{data.personal_info.location}</span>}
          {data.personal_info?.linkedin && <span>{data.personal_info.linkedin}</span>}
          {data.personal_info?.website && <span>{data.personal_info.website}</span>}
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8 p-8">
        {/* Left */}
        <aside className="col-span-1 space-y-8">
          {/* Skills */}
          {data.skills?.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold uppercase mb-3" style={{ color: accentColor }}>
                Skills
              </h2>
              <ul className="text-sm space-y-1">
                {data.skills.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {data.education?.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold uppercase mb-3" style={{ color: accentColor }}>
                Education
              </h2>
              <div className="space-y-4 text-sm">
                {data.education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-xs text-gray-500">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* Right */}
        <main className="col-span-2 space-y-8">
          {/* Summary */}
          {data.professional_summary && (
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
                Professional Summary
              </h2>
              <p className="text-gray-700">{data.professional_summary}</p>
            </section>
          )}

          {/* Experience Timeline */}
          {data.experience?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-4" style={{ color: accentColor }}>
                Experience
              </h2>
              <div className="space-y-6 border-l-2 pl-6" style={{ borderColor: accentColor }}>
                {data.experience.map((exp, i) => (
                  <div key={i}>
                    <span className="text-xs text-gray-500">
                      {formatDate(exp.start_date)} –{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                    {exp.description && (
                      <p className="text-sm mt-2 whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects?.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-4" style={{ color: accentColor }}>
                Projects
              </h2>
              <div className="space-y-4">
                {data.projects.map((proj, i) => (
                  <div key={i}>
                    <h3 className="font-medium">{proj.name}</h3>
                    {proj.description && (
                      <p className="text-sm text-gray-700">{proj.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default CreativeTimelineTemplate;
