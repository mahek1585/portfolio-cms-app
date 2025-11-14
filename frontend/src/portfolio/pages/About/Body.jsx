

import React from 'react';

const Body = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-[#1e293b]">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Intro */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-6">
            I'm a passionate full-stack developer with a creative eye and a strong foundation in modern web technologies. 
            I believe great design and functionality go hand-in-hand to create memorable digital experiences.
          </h2>
          
          <div className="inline-block">
            <span className="text-[#0f172a] bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] px-6 py-3 text-sm font-semibold rounded-full shadow-lg">
              Design with logic. Code with creativity.
            </span>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="bg-[#0f172a] rounded-2xl p-8 md:p-10 border border-[#334155] mb-12 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-transparent bg-clip-text mb-6">
            What I Bring to the Table
          </h3>
          <p className="text-base md:text-lg text-[#cbd5e1] leading-7 mb-6">
            I specialize in building full-stack applications using <span className="text-[#38bdf8] font-semibold">React</span>, <span className="text-[#38bdf8] font-semibold">Node.js</span>, <span className="text-[#38bdf8] font-semibold">MongoDB</span>, and modern tools. 
            From database design to user interfaces, I create end-to-end solutions that are scalable, secure, and user-friendly.
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git','GitHub','MySql','Supabase','VS-Code'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-[#1e293b] text-[#38bdf8] text-sm font-medium rounded-lg border border-[#334155] hover:border-[#38bdf8] transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Philosophy Card */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 md:p-10 border border-[#334155] mb-12 shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-[#38bdf8] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">My Philosophy</h4>
              <p className="text-[#cbd5e1] text-base leading-7">
                Every project is an opportunity to learn and innovate. I approach each challenge with curiosity and dedication, constantly pushing myself to deliver better solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Card */}
        <div className="bg-gradient-to-br from-[#5d5fdd] to-[#656dbd] rounded-2xl p-8 md:p-10 mb-12 shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
              🚀
            </div>
            <div className="flex-1">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Want to know more about my journey?</h4>
              <p className="text-white/90 text-base leading-7 mb-6">
                Explore my complete timeline — from education to projects, internships to milestones. See how I evolved as a developer!
              </p>
              <button
                onClick={() => {
                  window.location.href = '/journey';
                }}
                className="px-6 py-3 bg-white text-[#6366f1] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-md hover:cursor-pointer"
              >
                View My Journey →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#0f172a] rounded-2xl p-8 md:p-10 border-2 border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.2)]">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Let's Work Together
          </h3>
          <p className="text-base md:text-lg text-[#cbd5e1] leading-7 mb-6">
            I'm open to <span className="text-[#38bdf8] font-semibold">freelance projects</span>, <span className="text-[#38bdf8] font-semibold">internships</span>, and <span className="text-[#38bdf8] font-semibold">collaborations</span>. Whether it's a portfolio website, a startup idea, or a redesign — I'm excited to contribute with passion and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const navbarHeight = 80; // Navbar height
                  const elementPosition = contactSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                } else {
                  // If contact section not found on current page, go to home
                  // window.location.href = '/#contact';
                }
              }}
              className="px-6 py-3 bg-[#38bdf8] text-[#0f172a] font-semibold rounded-lg hover:bg-[#0ea5e9] transition-all duration-300 hover:scale-105 text-center shadow-lg cursor-pointer"
            >
              Get In Touch
            </button>
             <a 
              href="/Mahek Shaikh.pdf" 
              download="Mahek_Shaikh_Resume.pdf"
              className="px-6 py-3 border-2 border-[#38bdf8] text-[#38bdf8] font-semibold rounded-lg hover:bg-[#38bdf8] hover:text-[#0f172a] transition-all duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
          
          <p className="text-[#cbd5e1] text-base mt-8 font-medium">
            💡 Let's connect and bring your ideas to life!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Body;