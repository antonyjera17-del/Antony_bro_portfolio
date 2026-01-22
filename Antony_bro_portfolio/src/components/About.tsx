export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <span className="text-white/40 font-semibold text-xs uppercase tracking-[0.2em]">Background</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-10 tracking-tight">
              A decade of engineering <br />
              <span className="text-white/40">digital infrastructure.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/60 leading-relaxed font-light">
                Results-driven Backend Developer with extensive experience at Oviya Technologies and Softdesigners, 
                specializing in high-performance API design and robust database architectures.
              </p>
              <p className="text-lg text-white/60 leading-relaxed font-light">
                I focus on building scalable systems that solve complex business challenges through clean code 
                and agile methodologies. My approach combines technical excellence with strategic project management.
              </p>
            </div>
            
            <div className="mt-12">
              <a
                href="mailto:antonyjeraaj@gmail.com"
                className="inline-flex items-center gap-4 text-white hover:text-white/70 transition-all group font-bold uppercase tracking-widest text-xs"
              >
                <span className="w-12 h-px bg-white/20 group-hover:w-16 transition-all"></span>
                antonyjeraaj@gmail.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years Exp.", value: "04+", sub: "Engineering" },
              { label: "Completed", value: "05+", sub: "Major Projects" },
              { label: "Companies", value: "02", sub: "Collaborated" },
              { label: "Degree", value: "M.S.", sub: "Comp Science" }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] group hover:bg-white/[0.04] transition-all duration-500">
                <p className="text-3xl font-bold text-white mb-2 tracking-tight group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                <p className="text-[10px] text-white/20 uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
