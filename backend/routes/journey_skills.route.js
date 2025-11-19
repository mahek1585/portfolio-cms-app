const { getJourneySkills } = require("../controllers/journey_skills.controller");

const journeySkillsRouter = require("express").Router();

journeySkillsRouter.get("/", getJourneySkills);

module.exports = journeySkillsRouter;