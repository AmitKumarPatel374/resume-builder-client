const HRProfessionalTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-gray-900 text-sm leading-relaxed">
      
      {/* HEADER */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold">
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <p className="text-gray-600">
          {data.personal_info?.email} | {data.personal_info?.phone} |{" "}
          {data.personal_info?.location}
        </p>

        {(data.personal_info?.linkedin || data.personal_info?.github) && (
          <p className="text-gray-600">
            {data.personal_info?.linkedin}{" "}
            {data.personal_info?.github && `| ${data.personal_info.github}`}
          </p>
        )}
      </header>

      <hr className="my-4" />

      {/* SUMMARY */}
      {data.professional_summary && (
        <section className="mb-4">
          <h2 className="font-semibold uppercase mb-1" style={{ color: accentColor }}>
            Summary
          </h2>
          <p>{data.professional_summary}</p>
        </section>
      )}

      {/* SKILLS */}
      {data.skills?.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold uppercase mb-1" style={{ color: accentColor }}>
            Skills
          </h2>
          <p>{data.skills.join(", ")}</p>
        </section>
      )}

      {/* PROJECTS */}
      {data.projects?.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
            Projects
          </h2>

          {data.projects.map((proj, index) => (
            <div key={index} className="mb-3">
              <strong>{proj.name}</strong>
              {proj.tech && (
                <p className="text-gray-600 text-xs">{proj.tech}</p>
              )}
              {proj.description && (
                <ul className="list-disc list-inside mt-1">
                  {proj.description.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
            Experience
          </h2>

          {data.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <strong>{exp.position}</strong>
              <p className="text-gray-600">
                {exp.company} | {exp.start_date} –{" "}
                {exp.is_current ? "Present" : exp.end_date}
              </p>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* EDUCATION */}
      {data.education?.length > 0 && (
        <section>
          <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
            Education
          </h2>

          {data.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <strong>{edu.degree}</strong>
              <p className="text-gray-600">
                {edu.institution} | {edu.graduation_date}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default HRProfessionalTemplate;
