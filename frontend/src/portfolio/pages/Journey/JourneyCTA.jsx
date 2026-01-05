import React from 'react';
import { useNavigate } from 'react-router-dom';

const JourneyCTA = () => {
  const navigate = useNavigate();

  
  return (
    <div className="mt-24 mb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] p-12 rounded-2xl border-2 border-[#38bdf8]/30 text-center relative overflow-hidden">
          
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-[#38bdf8]/5 blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something Together!
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? 
              I'd love to hear from you!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
               onClick={() => navigate('/', { state: { scrollTo: 'work' } })}
                className="px-4 py-3 md:px-8 md:py-4 bg-[#38bdf8] text-[#0f172a] font-semibold rounded-lg hover:bg-[#0ea5e9] transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#38bdf8]/50 min-w-[200px]"
              >
                View My Projects
              </button>
              
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
                className="px-4 py-3 md:px-8 md:py-4 border-2 border-[#38bdf8] text-[#38bdf8] font-semibold rounded-lg hover:bg-[#38bdf8] hover:text-[#0f172a] transition-all duration-300 hover:scale-110 min-w-[200px]"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyCTA;