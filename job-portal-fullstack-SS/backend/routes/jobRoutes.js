const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
});

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;
