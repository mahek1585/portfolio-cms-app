import React from 'react';

const JourneyHero = () => {
  return (
    <div className="text-center mb-16 pt-50">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#38bdf8] to-white bg-clip-text text-transparent mb-4">
        My Journey
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent mx-auto mb-6"></div>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
        From curiosity to expertise - here's my professional timeline
      </p>
    </div>
  );
};

export default JourneyHero;