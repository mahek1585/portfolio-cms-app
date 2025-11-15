const { 
  getTimeline, 
  getTimelineById, 
  createTimeline, 
  updateTimeline, 
  deleteTimeline 
} = require("../controllers/journey.controller");

const journeyRouter = require("express").Router();

journeyRouter.get("/timeline", getTimeline);
journeyRouter.get("/timeline/:id", getTimelineById);
journeyRouter.post("/timeline", createTimeline);
journeyRouter.put("/timeline/:id", updateTimeline);
journeyRouter.delete("/timeline/:id", deleteTimeline);

module.exports = journeyRouter;