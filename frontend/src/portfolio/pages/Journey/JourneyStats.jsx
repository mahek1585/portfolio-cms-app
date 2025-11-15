import React, { useState, useEffect, useRef } from 'react';

const JourneyStats = () => {
  const statsData = [
    { id: 1, label: "Years Learning", target: 2 },
    { id: 2, label: "Projects Completed", target: 10 },
    { id: 3, label: "Technologies Learned", target: 15 }
  ];

  const [stats, setStats] = useState(
    statsData.map(stat => ({ ...stat, current: 0 }))
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    stats.forEach((stat, index) => {
      const duration = 12000; // 12 seconds
      const steps = 60;
      const increment = stat.target / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(currentStep * increment, stat.target);
        
        setStats(prevStats => {
          const newStats = [...prevStats];
          newStats[index] = { ...newStats[index], current: Math.floor(newValue) };
          return newStats;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 max-w-[1500px] md:grid-cols-3 gap-6 mt-20 mx-auto px-4">
      {stats.map((stat) => (
        <div 
          key={stat.id}
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-lg text-center border border-[#334155] hover:border-[#38bdf8] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#38bdf8]/20"
        >
          <div className="text-5xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] bg-clip-text text-transparent">
            {stat.current}+
          </div>
          <div className="text-gray-300 mt-3 text-lg font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default JourneyStats;