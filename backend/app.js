const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

const profileRouter = require("./routes/profile.route");
const skillRouter = require("./routes/skills.router");
const workRouter = require("./routes/works.router");
const queryRouter = require("./routes/query.route");
const linksRouter = require("./routes/links.route");
const journeyRouter = require("./routes/journey.route");
const journeySkillsRouter = require("./routes/journey_skills.route"); 


const app = express();

// Middleware
app.use(express.json());

// ✅ FIX: CORS — Only One Time
const corsOptions = {
  origin: [
    "https://i-am-mahek-shaikh-portfolio.onrender.com", // your frontend
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

// Swagger
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Test routes
app.get("/check-health", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/echo", (req, res) => {
  res.status(200).json({ youSent: req.body });
});

// Routes
app.use("/profile", profileRouter);
app.use("/skills", skillRouter);
app.use("/works", workRouter);
app.use("/queries", queryRouter);
app.use("/links", linksRouter);

app.use("/journey",journeyRouter);
app.use("/journey_skills", journeySkillsRouter);


app.use("/journey", journeyRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is running on PORT:${PORT}`);
});

module.exports = app;
