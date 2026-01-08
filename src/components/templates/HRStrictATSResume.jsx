const HRStrictATSResume = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-gray-900 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold">{data.personal_info?.full_name}</h1>

      <p>
        {data.personal_info?.email} | {data.personal_info?.phone} |{" "}
        {data.personal_info?.location}
      </p>

      <hr className="my-3" />

      {data.professional_summary && (
        <>
          <strong>SUMMARY</strong>
          <p>{data.professional_summary}</p>
        </>
      )}

      {data.skills?.length > 0 && (
        <>
          <strong>SKILLS</strong>
          <p>{data.skills.join(", ")}</p>
        </>
      )}

      {data.projects?.length > 0 && (
        <>
          <strong>PROJECTS</strong>
          {data.projects.map((p, i) => (
            <p key={i}>
              <strong>{p.name}:</strong> {p.description}
            </p>
          ))}
        </>
      )}

      {data.education?.length > 0 && (
        <>
          <strong>EDUCATION</strong>
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

export default HRStrictATSResume;
