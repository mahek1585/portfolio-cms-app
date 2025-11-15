import React from 'react';

const TimelineItem = ({ data }) => {
  const { year, title, organization, description, skills, position } = data;

  const pos = (position || "").toLowerCase().trim();

  // Parse skills
  let skillsArray = [];
  if (skills) {
    if (typeof skills === "string") {
      try {
        skillsArray = JSON.parse(skills);
      } catch {
        skillsArray = skills.split(",").map(s => s.trim());
      }
    } else if (Array.isArray(skills)) {
      skillsArray = skills;
    }
  }

  const isRight = pos === "right";

  return (
    <div className="relative">
      {/* Dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#38bdf8] rounded-full -ml-2 z-10 ring-4 ring-[#0f172a] shadow-lg shadow-[#38bdf8]/50"></div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div className={`${isRight ? '' : 'flex justify-end'}`}>
          {!isRight && (
            <div className=" mx-2.5 md:ml-0 md:pr-2 md:text-right max-w-[650px] w-full">
              <div className="bg-[#1e293b] p-6 rounded-lg shadow-xl border border-[#334155] hover:border-[#38bdf8] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#38bdf8]/20">
                
                <span className="text-[#38bdf8] font-semibold text-sm uppercase tracking-wide">
                  {year}
                </span>

                <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
                <p className="text-gray-400 mt-1 font-medium">{organization}</p>
                <p className="text-gray-300 mt-3 leading-relaxed">{description}</p>

                {skillsArray.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                    {skillsArray.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#38bdf8]/20 text-[#38bdf8] rounded-full text-sm font-medium hover:bg-[#38bdf8]/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className={`${isRight ? 'flex justify-start' : ''}`}>
          {isRight && (
            <div className="px-2.5 md:mr-0 md:pl-2 md:text-left max-w-[650px] w-full">
              <div className="bg-[#1e293b] p-6 rounded-lg shadow-xl border border-[#334155] hover:border-[#38bdf8] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#38bdf8]/20">
                
                <span className="text-[#38bdf8] font-semibold text-sm uppercase tracking-wide">
                  {year}
                </span>

                <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
                <p className="text-gray-400 mt-1 font-medium">{organization}</p>
                <p className="text-gray-300 mt-3 leading-relaxed">{description}</p>

                {skillsArray.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skillsArray.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#38bdf8]/20 text-[#38bdf8] rounded-full text-sm font-medium hover:bg-[#38bdf8]/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TimelineItem;