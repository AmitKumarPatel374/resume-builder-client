import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const CreativeSidebarTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-4 bg-white text-gray-800">
      {/* Sidebar */}
      <aside
        className="col-span-1 p-6 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-2xl font-bold mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-sm opacity-90 mb-6">
          {data.personal_info?.profession || "Professional Title"}
        </p>

        <div className="space-y-2 text-sm">
          {data.personal_info?.email && <div>{data.personal_info.email}</div>}
          {data.personal_info?.phone && <div>{data.personal_info.phone}</div>}
          {data.personal_info?.location && <div>{data.personal_info.location}</div>}
          {data.personal_info?.linkedin && <div>{data.personal_info.linkedin}</div>}
          {data.personal_info?.website && <div>{data.personal_info.website}</div>}
        </div>

        {data.skills?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase mb-2">Skills</h2>
            <ul className="text-sm space-y-1">
              {data.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Main */}
      <main className="col-span-3 p-8 space-y-8">
        {data.professional_summary && (
          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
              Summary
            </h2>
            <p>{data.professional_summary}</p>
          </section>
        )}

        {data.experience?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-4" style={{ color: accentColor }}>
              Experience
            </h2>
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-6">
                <h3 className="font-semibold">{exp.position}</h3>
                <p className="text-sm text-gray-600">{exp.company}</p>
                {exp.description && (
                  <p className="text-sm mt-2 whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {data.projects?.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-4" style={{ color: accentColor }}>
              Projects
            </h2>
            {data.projects.map((proj, i) => (
              <div key={i} className="mb-4">
                <h3 className="font-medium">{proj.name}</h3>
                <p className="text-sm text-gray-700">{proj.description}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default CreativeSidebarTemplate;
