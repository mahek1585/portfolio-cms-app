import React from "react";

const LatestWork = ({ workList = [] }) => {
  return (
    <section className="py-20 px-6 md:px-24 bg-[#0f172a]">
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-transparent bg-clip-text mb-4">
        What I've Been Building
      </h2>
      <p className="text-center text-[#cbd5e1] mb-14 max-w-2xl mx-auto">
        Here are some of my recent projects that showcase my skills and passion for development.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {workList.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all duration-300 border border-[#334155] hover:border-[#38bdf8] p-5 flex flex-col group overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg mb-5 bg-[#0f172a] h-52 flex items-center justify-center">
              <img
                src={item.img_url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white group-hover:text-[#f0f3f5] transition-colors duration-300 mb-3 text-center">
              {item.title}
            </h3>

            {/* Link */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center text-[#7ed1f5] font-medium hover:text-[#0ea5e9] transition-colors duration-300 flex items-center justify-center gap-2 group/link"
            >
              {item.reponame || "View Project"}
              <svg 
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;