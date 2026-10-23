import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const Project = model("Project", new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  githubUrl: String,   // leave empty to hide the "Code" button
  liveUrl: String,     // leave empty to hide the "Live Demo" button
  order: { type: Number, default: 0 },
}));

export const Experience = model("Experience", new Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  period: { type: String, required: true },
  bullets: [String],
  order: { type: Number, default: 0 },
}));

export const SkillGroup = model("SkillGroup", new Schema({
  title: { type: String, required: true },
  items: [String],
  order: { type: Number, default: 0 },
}));

export const Education = model("Education", new Schema({
  title: { type: String, required: true },
  org: { type: String, required: true },
  period: String,
  type: { type: String, enum: ["degree", "certification"], default: "degree" },
  order: { type: Number, default: 0 },
}));

export const Message = model("Message", new Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, maxlength: 150 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
}, { timestamps: true }));
