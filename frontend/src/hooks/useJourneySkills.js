import { useState, useEffect } from "react";
import { journeySkillsService } from "../services/journeySkillsService";

export const useJourneySkills = () => {
  const [journeySkillsData, setJourneySkillsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJourneySkills();
  }, []);

  const fetchJourneySkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await journeySkillsService.getJourneySkills();
      
      if (result.data) {
        setJourneySkillsData(result.data);
      } else {
        throw new Error(result.message || "Failed to fetch journey skills");
      }
    } catch (err) {
      console.error("Error in useJourneySkills:", err);
      setError("Failed to load journey skills data");
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchJourneySkills();
  };

  return {
    journeySkillsData,
    loading,
    error,
    refetch,
  };
};