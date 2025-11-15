import { useState, useEffect } from "react";
import { journeyService } from "../services/JourneyService";

export const useJourney = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTimeline();
  }, []);

  const fetchTimeline = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await journeyService.getTimeline();
      
      if (result.data) {
        setTimelineData(result.data);
      } else {
        throw new Error(result.message || "Failed to fetch timeline");
      }
    } catch (err) {
      console.error("Error in useJourney:", err);
      setError("Failed to load timeline data");
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchTimeline();
  };

  return {
    timelineData,
    loading,
    error,
    refetch,
  };
};