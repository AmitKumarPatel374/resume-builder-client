const HRExperienceFocusedTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-gray-900 text-sm">
      <header className="mb-5">
        <h1 className="text-3xl font-semibold">{data.personal_info?.full_name}</h1>
        <p className="text-gray-600">
          {data.personal_info?.email} | {data.personal_info?.phone}
        </p>
      </header>

      {data.professional_summary && (
        <section className="mb-4">
          <h2 className="font-semibold uppercase mb-1" style={{ color: accentColor }}>
            Summary
          </h2>
          <p>{data.professional_summary}</p>
        </section>
      )}

      {data.projects?.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
            Projects
          </h2>
          {data.projects.map((p, i) => (
            <div key={i} className="mb-3">
              <strong>{p.name}</strong>
              <ul className="list-disc list-inside">
                {p.description?.split("\n").map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {data.skills?.length > 0 && (
        <section>
          <h2 className="font-semibold uppercase mb-1" style={{ color: accentColor }}>
            Skills
          </h2>
          <p>{data.skills.join(", ")}</p>
        </section>
      )}
    </div>
  );
};

export default HRExperienceFocusedTemplate;
