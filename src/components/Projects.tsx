"use client";

import { useState } from "react";

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: "Work Permit Management System",
      tech: [".NET", "C#", "ASP.NET", "SQL Server", "REST APIs"],
      description: "Digitized and streamlined permit approval workflow within an organization.",
      highlights: [
        "Automated notification system for permit submission",
        "Role-based approval workflow with status tracking",
        "Interactive dashboard for permit statistics",
        "Reduced manual paperwork and approval delays",
      ],
    },
    {
      name: "ANDON Issue Management System",
      tech: [".NET", "C#", "ASP.NET", "SQL Server", "JavaScript"],
      description: "Real-time production floor monitoring and issue management system.",
      highlights: [
        "Hierarchical acknowledgment and resolution workflow",
        "Real-time ANDON board display system",
        "Machine status monitoring (Running/Stopped/No Plan)",
      ],
    },
    {
      name: "Genius Minds - PPE Detection",
      tech: ["HTML", "Bootstrap", "C#", "SQL", "JavaScript"],
      description: "AI-powered PPE compliance tracking and violation detection system.",
      highlights: [
        "Real-time video stream analysis for PPE compliance",
        "Accurate identification of PPE violations",
        "Instant alerts to supervisors and safety personnel",
      ],
    },
    {
      name: "PDF Annotation Tool",
      tech: ["HTML", "Bootstrap", "C#", "SQL", "Fabric.js"],
      description: "Web-based PDF annotation tool for documents.",
      highlights: [
        "Signature formatting in multiple styles and sizes",
        "PDF upload from local storage",
        "Image, text, and highlight annotations",
      ],
    },
    {
      name: "Line Monitoring System",
      tech: ["HTML", "Bootstrap", "C#", "SQL", "JavaScript"],
      description: "Production line monitoring with targets and actual data tracking.",
      highlights: [
        "Daily, monthly, yearly monitoring dashboards",
        "Production standards improvement visibility",
      ],
    },
  ];

    return (
      <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-white/40 font-semibold text-xs uppercase tracking-[0.2em]">Portfolio</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Selected Projects
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[400px,1fr] gap-12 lg:gap-20">
          <div className="space-y-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  activeProject === index
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-white transition-transform duration-500 ${activeProject === index ? 'scale-y-100' : 'scale-y-0'}`}></div>
                <h3 className={`text-lg font-bold transition-colors duration-500 ${activeProject === index ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                  {project.name}
                </h3>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] min-h-[500px] flex flex-col">
              <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                  {projects[activeProject].name}
                </h3>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  {projects[activeProject].description}
                </p>
              </div>

              <div className="mt-auto pt-10 border-t border-white/5">
                <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6">Key Outcomes</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {projects[activeProject].highlights.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-white/60 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
