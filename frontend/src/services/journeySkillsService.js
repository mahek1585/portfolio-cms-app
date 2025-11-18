import { journeySkillsUrl } from "../utils/urls";

export const journeySkillsService = {
  getJourneySkills: async () => {
    try {
      const response = await fetch(journeySkillsUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching journey skills:", error);
      throw error;
    }
  },
};