"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "experience", "projects", "education", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full px-4 max-w-4xl`}>
        <div className={`
            flex items-center justify-between gap-4 px-3 py-2 rounded-full border border-white/10 
            bg-slate-900/40 backdrop-blur-xl shadow-2xl transition-all duration-500
            ${scrolled ? 'scale-[0.98] border-white/20 bg-slate-900/80' : ''}
        `}>
          <a href="#" className="flex items-center gap-2 pl-2 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/bc7f329b-5dfc-405e-aa0c-7021152da735/WhatsApp-Image-2026-01-21-at-7.27.44-PM-1768995001426.jpeg?width=100&height=100&resize=contain"
                alt="Antony"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-bold text-sm tracking-tight hidden sm:block">ANTONY</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full
                  ${activeSection === link.href.slice(1)
                    ? "text-white bg-white/10"
                    : "text-white/40"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="px-6 py-2 bg-white text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full transition-all hidden sm:block"
              >
                Hire Me
              </a>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 md:hidden text-white/60 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </nav>
  
        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 z-[40] bg-slate-900 transition-all duration-500 md:hidden
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-bold text-white/40 transition-all uppercase tracking-tighter"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 px-10 py-4 bg-white text-slate-900 text-sm font-bold uppercase tracking-widest rounded-full"
            >
              Hire Me
            </a>
          </div>
        </div>
    </>
  );
}
