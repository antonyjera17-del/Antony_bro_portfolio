"use client";

export function Footer() {
    return (
      <footer className="py-20 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border  overflow-hidden">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/bc7f329b-5dfc-405e-aa0c-7021152da735/WhatsApp-Image-2026-01-21-at-7.27.44-PM-1768995001426.jpeg?width=100&height=100&resize=contain"
                  alt="Antony Jera"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">ANTONY JERA.</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Architecting high-performance backend systems with precision and scalability. Based in Bangalore.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 lg:gap-24">
            <div>
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-6">Navigation</p>
              <ul className="space-y-4">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-white/50 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-6">Socials</p>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Antony Jera — All Rights Reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-[10px] text-white/20 hover:text-white uppercase tracking-widest font-bold transition-all"
          >
            Back to top
            <svg className="w-3 h-3 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
