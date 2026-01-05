import React from 'react';
import TimelineItem from './TimelineItem';
import { useJourney } from '../../../hooks/useJourney';

const Timeline = () => {
  const { timelineData, loading, error, refetch } = useJourney();
 
  console.log("Timeline Data:", timelineData);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#38bdf8] border-r-transparent"></div>
        <p className="text-gray-300 mt-4 text-lg">Loading timeline...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-400 text-lg">{error}</p>
        <button 
          onClick={refetch}
          className="mt-4 px-6 py-2 bg-[#38bdf8] text-[#0f172a] rounded-md hover:bg-[#0ea5e9] transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (timelineData.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-300 text-lg">No timeline data available</p>
      </div>
    );
  }

  return (
    <div className="relative mb-20">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#38bdf8] via-[#38bdf8]/50 to-transparent"></div>

      {/* Timeline Items */}
      <div className="space-y-14 md:space-y-20">
        {timelineData.map((item) => (
          <TimelineItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
