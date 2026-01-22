export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C#", "JavaScript", "HTML"],
    },
    {
      title: "Backend",
      skills: [".NET Framework", "ASP.NET", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL Server", "Database Configuration"],
    },
    {
      title: "Tools & Methods",
      skills: ["GitHub", "Agile/Scrum", "Build & Release"],
    },
  ];

  const additionalSkills = ["Web Development", "Team Management", "Technical Strategy", "Product Management"];

    return (
      <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-white/40 font-semibold text-xs uppercase tracking-[0.2em]">Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Technical Stack
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            A comprehensive suite of technologies leveraged to build scalable and robust backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
            >
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-8 group-hover:text-white transition-colors">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between group/item">
                    <span className="text-white/70 text-sm group-hover/item:text-white transition-colors">{skill}</span>
                    <div className="w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-white transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-white/30 text-xs font-bold uppercase tracking-widest mr-4">Complementary:</span>
            {additionalSkills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-white/10 text-white/60 text-xs font-medium hover:border-white/30 hover:text-white transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
