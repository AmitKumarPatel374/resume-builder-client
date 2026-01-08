const HRClassicTwoColumnTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 text-gray-900 text-sm">
      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{data.personal_info?.full_name}</h1>
        <p className="text-gray-600">
          {data.personal_info?.email} | {data.personal_info?.phone} |{" "}
          {data.personal_info?.location}
        </p>
      </header>

      <div className="grid grid-cols-3 gap-8">
        {/* LEFT */}
        <aside className="col-span-1">
          {data.skills?.length > 0 && (
            <section className="mb-6">
              <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
                Skills
              </h2>
              <ul className="space-y-1">
                {data.skills.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </section>
          )}

          {data.education?.length > 0 && (
            <section>
              <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
                Education
              </h2>
              {data.education.map((edu, i) => (
                <div key={i} className="mb-2">
                  <strong>{edu.degree}</strong>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
              ))}
            </section>
          )}
        </aside>

        {/* RIGHT */}
        <main className="col-span-2 space-y-6">
          {data.professional_summary && (
            <section>
              <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
                Summary
              </h2>
              <p>{data.professional_summary}</p>
            </section>
          )}

          {data.projects?.length > 0 && (
            <section>
              <h2 className="font-semibold uppercase mb-2" style={{ color: accentColor }}>
                Projects
              </h2>
              {data.projects.map((p, i) => (
                <div key={i} className="mb-3">
                  <strong>{p.name}</strong>
                  <p>{p.description}</p>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default HRClassicTwoColumnTemplate;
