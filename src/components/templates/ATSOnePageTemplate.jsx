const ATSOnePageTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-gray-900 text-sm">
      <h1 className="text-2xl font-bold">
        {data.personal_info?.full_name}
      </h1>

      <p className="text-gray-600 mb-4">
        {data.personal_info?.email} | {data.personal_info?.phone} |{" "}
        {data.personal_info?.location}
      </p>

      {data.professional_summary && (
        <>
          <h2 className="font-semibold mt-4" style={{ color: accentColor }}>
            SUMMARY
          </h2>
          <p>{data.professional_summary}</p>
        </>
      )}

      {data.skills?.length > 0 && (
        <>
          <h2 className="font-semibold mt-4" style={{ color: accentColor }}>
            SKILLS
          </h2>
          <p>{data.skills.join(", ")}</p>
        </>
      )}

      {data.projects?.length > 0 && (
        <>
          <h2 className="font-semibold mt-4" style={{ color: accentColor }}>
            PROJECTS
          </h2>
          {data.projects.map((p, i) => (
            <div key={i}>
              <strong>{p.name}</strong>
              <p>{p.description}</p>
            </div>
          ))}
        </>
      )}

      {data.education?.length > 0 && (
        <>
          <h2 className="font-semibold mt-4" style={{ color: accentColor }}>
            EDUCATION
          </h2>
          {data.education.map((e, i) => (
            <p key={i}>
              {e.degree} – {e.institution}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default ATSOnePageTemplate;
