import { Mail, Phone, MapPin } from "lucide-react";

const SplitModernTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white text-gray-800">
      {/* Header */}
      <header
        className="p-8 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-4xl font-bold">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="opacity-90">
          {data.personal_info?.profession || "Software Developer"}
        </p>

        <div className="flex gap-6 mt-4 text-sm">
          {data.personal_info?.email && <span><Mail size={14} /> {data.personal_info.email}</span>}
          {data.personal_info?.phone && <span><Phone size={14} /> {data.personal_info.phone}</span>}
          {data.personal_info?.location && <span><MapPin size={14} /> {data.personal_info.location}</span>}
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8 p-8">
        {/* Left */}
        <aside className="col-span-1">
          <h2 className="font-semibold mb-3" style={{ color: accentColor }}>
            Skills
          </h2>
          <ul className="text-sm space-y-1">
            {data.skills?.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </aside>

        {/* Right */}
        <main className="col-span-2 space-y-6">
          {data.professional_summary && (
            <section>
              <h2 className="font-semibold mb-2" style={{ color: accentColor }}>
                Summary
              </h2>
              <p className="text-sm">{data.professional_summary}</p>
            </section>
          )}

          {data.projects?.length > 0 && (
            <section>
              <h2 className="font-semibold mb-3" style={{ color: accentColor }}>
                Projects
              </h2>
              {data.projects.map((p, i) => (
                <div key={i} className="mb-3">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.description}</p>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default SplitModernTemplate;
