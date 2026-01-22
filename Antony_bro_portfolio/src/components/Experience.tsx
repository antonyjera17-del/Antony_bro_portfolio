export function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Softdesigners",
      location: "Bangalore",
      period: "2022 - 2024",
      responsibilities: [
        "Debugged complex systems and identified critical security vulnerabilities.",
        "Researched and implemented emerging backend development best practices.",
        "Created comprehensive documentation for APIs and database architectures.",
        "Collaborated with cross-functional teams for seamless system integration.",
        "Provided technical training for end-users on newly developed software.",
        "Consulted with global stakeholders on project milestones and technical roadmaps.",
      ],
    },
    {
      title: "Backend Developer",
      company: "Oviya Technologies",
      location: "Bangalore",
      period: "2020 - 2022",
      responsibilities: [
        "Engineered scalable backend solutions for high-traffic applications.",
        "Championed Agile development methodologies across multiple teams.",
        "Delivered critical software solutions within stringent budget and time constraints.",
        "Optimized MySQL database architectures and complex SQL queries.",
        "Improved system performance by 40% through query optimization.",
        "Mentored junior developers on best practices and system architecture.",
      ],
    },
  ];

    return (
      <section id="experience" className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="mb-20">
          <span className="text-white/40 font-semibold text-xs uppercase tracking-[0.2em]">Trajectory</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid lg:grid-cols-[200px,1fr] gap-8 items-start group">
              <div className="pt-2">
                <span className="text-sm font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                  {exp.period}
                </span>
              </div>
              
              <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{exp.title}</h3>
                    <p className="text-white/60 font-medium">{exp.company} — {exp.location}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {exp.responsibilities.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-white/50 leading-relaxed font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
