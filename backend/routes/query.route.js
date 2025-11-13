const { addQuery } = require("../controllers/query.controller");

const queryRouter = require("express").Router();

queryRouter.post("/", addQuery);

module.exports = queryRouter;

