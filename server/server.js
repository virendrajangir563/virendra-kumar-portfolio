import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import { Project, Experience, SkillGroup, Education, Message } from "./models.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "10kb" }));

// Portfolio content for the website
app.get("/api/portfolio", async (_req, res) => {
  try {
    const [projects, experience, skills, education] = await Promise.all([
      Project.find().sort("order"), Experience.find().sort("order"),
      SkillGroup.find().sort("order"), Education.find().sort("order"),
    ]);
    res.json({ projects, experience, skills, education });
  } catch {
    res.status(500).json({ error: "Could not load portfolio data." });
  }
});

// Contact form: validates and saves the message in MongoDB
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: { error: "Too many messages. Please try again later." } });
app.post("/api/contact", limiter, async (req, res) => {
  const name = String(req.body.name || "").trim();
  const email = String(req.body.email || "").trim();
  const message = String(req.body.message || "").trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10)
    return res.status(400).json({ error: "Please enter your name, a valid email, and a message of at least 10 characters." });
  try {
    await Message.create({ name, email, message });
    res.status(201).json({ ok: true });
  } catch {
    res.status(500).json({ error: "Could not save your message. Please try again." });
  }
});

// Only you can read messages: send header  x-admin-key: <ADMIN_KEY>
app.get("/api/messages", async (req, res) => {
  if (!process.env.ADMIN_KEY || req.get("x-admin-key") !== process.env.ADMIN_KEY)
    return res.status(401).json({ error: "Unauthorized" });
  res.json(await Message.find().sort("-createdAt"));
});

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
  .catch((e) => { console.error("MongoDB connection failed:", e.message); process.exit(1); });
