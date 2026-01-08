const DarkCreativeTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-5xl mx-auto bg-zinc-900 text-zinc-100 p-8">
      <h1 className="text-4xl font-bold mb-2" style={{ color: accentColor }}>
        {data.personal_info?.full_name}
      </h1>
      <p className="text-zinc-400 mb-6">
        {data.personal_info?.profession}
      </p>

      {data.professional_summary && (
        <p className="mb-6 text-zinc-300">
          {data.professional_summary}
        </p>
      )}

      <h2 className="font-semibold mb-3" style={{ color: accentColor }}>
        Projects
      </h2>
      {data.projects?.map((p, i) => (
        <div key={i} className="mb-4">
          <h3 className="font-medium">{p.name}</h3>
          <p className="text-sm text-zinc-400">{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DarkCreativeTemplate;
