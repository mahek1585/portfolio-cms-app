import { journeyUrl } from "../utils/urls";

export const journeyService = {
  // Get all timeline data
  getTimeline: async () => {
    try {
      const response = await fetch(journeyUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching timeline:", error);
      throw error;
    }
  },

  // Get single timeline item
  getTimelineById: async (id) => {
    try {
      const response = await fetch(`${journeyUrl}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching timeline item:", error);
      throw error;
    }
  },

  // Create timeline item (admin only)
  createTimeline: async (timelineData) => {
    try {
      const response = await fetch(journeyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timelineData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating timeline item:", error);
      throw error;
    }
  },

  // Update timeline item (admin only)
  updateTimeline: async (id, timelineData) => {
    try {
      const response = await fetch(`${journeyUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timelineData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating timeline item:", error);
      throw error;
    }
  },

  // Delete timeline item (admin only)
  deleteTimeline: async (id) => {
    try {
      const response = await fetch(`${journeyUrl}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error deleting timeline item:", error);
      throw error;
    }
  },
};