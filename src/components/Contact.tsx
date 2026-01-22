"use client";

import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/antonyjeraaj@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-white/40 font-semibold text-xs uppercase tracking-[0.2em]">Connection</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-10 tracking-tight">
              Ready to build <br />
              <span className="text-white/40">the next big thing?</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed font-light mb-12">
              I am currently available for selective backend architectural consulting and development projects. 
              Whether you have a specific project in mind or just want to explore possibilities, let&apos;s connect.
            </p>

            <div className="space-y-8">
              {[
                { label: "Email", value: "antonyjeraaj@gmail.com", href: "mailto:antonyjeraaj@gmail.com" },
                { label: "Phone", value: "+65 8164 5231", href: "tel:+658164523" },
                { label: "Location", value: "Bangalore, India", href: null }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 transition-colors"></div>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg text-white/80 transition-colors hover:text-white">{item.value}</a>
                    ) : (
                      <p className="text-lg text-white/80">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02]">
            <h3 className="text-xl font-bold text-white mb-8 tracking-tight uppercase tracking-widest text-xs">Direct Inquiry</h3>
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-white/50">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 rounded-none focus:border-white transition-all placeholder:text-white/20 text-white outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 rounded-none focus:border-white transition-all placeholder:text-white/20 text-white outline-none"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 rounded-none focus:border-white transition-all placeholder:text-white/20 text-white resize-none outline-none"
                    placeholder="Message"
                  ></textarea>
                </div>
                
                {error && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or email directly.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-5 bg-white text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full mt-4 overflow-hidden transition-all duration-300 active:scale-95 disabled:opacity-70"
                >
                  <span className={`inline-flex items-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                    Send Message
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
