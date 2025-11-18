import React from 'react';
import { useJourneySkills } from '../../../hooks/useJourneySkills';

const JourneySkills = () => {
  const { journeySkillsData, loading, error } = useJourneySkills();

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#38bdf8] border-r-transparent"></div>
      </div>
    );
  }

  if (error) {
    return null;
  }

  if (journeySkillsData.length === 0) {
    return null;
  }

  return (
    <div className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#38bdf8] to-white bg-clip-text text-transparent mb-4">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent mx-auto"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {journeySkillsData.map((category) => {
          // Parse skills
          let skillsArray = [];
          if (category.skills) {
            if (typeof category.skills === 'string') {
              try {
                skillsArray = JSON.parse(category.skills);
              } catch (e) {
                skillsArray = [];
              }
            } else if (Array.isArray(category.skills)) {
              skillsArray = category.skills;
            }
          }

          return (
            <div 
              key={category.id}
              className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-lg border border-[#334155] hover:border-[#38bdf8] transition-all duration-300 hover:scale-105"
            >
              {/* Category Name */}
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#38bdf8]">◆</span>
                {category.category}
              </h3>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3">
                {skillsArray.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 rounded-full text-sm font-medium hover:bg-[#38bdf8]/20 hover:scale-110 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneySkills;