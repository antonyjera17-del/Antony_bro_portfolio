export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.02] blur-[120px] rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid gap-12 lg:gap-24 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Available for new projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tighter">
              ANTONY JERA          
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-10">
              <p className="text-xl text-white/80 font-medium">
                Backend Architect
              </p>
              <div className="hidden sm:block w-12 h-px bg-white/20"></div>
              <p className="text-xl text-white/40 font-medium">
                API Specialist
              </p>
            </div>

            <p className="text-lg text-white/50 max-w-xl mb-12 leading-relaxed font-light">
              Designing and implementing high-performance backend systems with a focus on scalability, security, and clean architecture. Based in India, working globally.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="#contact"
                  className="px-8 py-4 bg-white text-slate-900 transition-all duration-300 rounded-full font-semibold text-sm uppercase tracking-wider"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="group flex items-center gap-2 text-white/60 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
              >
                Selected Works
                <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10 border-t border-white/5">
              <div>
                <p className="text-2xl font-bold text-white mb-1">04+</p>
                <p className="text-xs text-white/30 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">12+</p>
                <p className="text-xs text-white/30 uppercase tracking-widest">Happy Clients</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-2xl font-bold text-white mb-1">08+</p>
                <p className="text-xs text-white/30 uppercase tracking-widest">Digital Products</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
