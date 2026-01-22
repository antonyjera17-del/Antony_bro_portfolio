export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "London School of Business and Finance",
      date: "2024 - 2026",
      gpa: "7.6",
      highlights: ["Achieved Distinction in core modules", "Specializing in Distributed Systems", "Singapore Computer Society Member"],
    },
    {
      degree: "B.E. in Computer Science",
      school: "K. Ramakrishnan College of Technology",
      date: "2016 - 2020",
      gpa: "7.19",
      highlights: ["Focus on Algorithm Design", "Final Year Project: Production Monitoring"],
    },
  ];

    return (
      <section id="education" className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="mb-20">
          <span className="text-white/40 font-semibold text-xs uppercase tracking-[0.2em]">Academics</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-6 block">{edu.date}</span>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">{edu.degree}</h3>
              <p className="text-white/60 font-medium mb-8">{edu.school}</p>
              
              <div className="flex items-center gap-2 mb-8">
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">GPA:</span>
                <span className="text-sm font-bold text-white">{edu.gpa}</span>
              </div>

              <div className="space-y-3">
                {edu.highlights.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0"></div>
                    <p className="text-xs text-white/40 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
