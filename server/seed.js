// Run once:  npm run seed   (re-running it resets the portfolio content, not the messages)
import "dotenv/config";
import mongoose from "mongoose";
import { Project, Experience, SkillGroup, Education } from "./models.js";

const withOrder = (arr) => arr.map((x, i) => ({ ...x, order: i }));

const experience = withOrder([
  { role: "MERN Stack Trainee", company: "GRASS Solutions Pvt. Ltd.", location: "Jaipur, Rajasthan", period: "March 2026 – Present",
    bullets: [
      "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js in a training program.",
      "Built responsive React.js interfaces using custom CSS and reusable components.",
      "Worked with REST APIs, authentication, authorization, and middleware in Node.js and Express.js.",
      "Designed MongoDB schemas with Mongoose and implemented CRUD operations.",
      "Tested and debugged APIs using Postman.",
      "Used Git and GitHub for source code management.",
    ] },
  { role: "React.js Developer Intern", company: "Sigma Work Company", location: "Jhotwara, Jaipur, Rajasthan", period: "March 2026 – June 2026",
    bullets: [
      "Developed responsive user interfaces using React.js, JavaScript, HTML5, and CSS3.",
      "Created reusable React components to improve code maintainability.",
      "Used React Hooks and state management to handle component and application state.",
      "Integrated frontend applications with REST APIs to fetch and display dynamic data.",
      "Implemented form validation and interactive UI features.",
      "Debugged UI issues and worked on improving application performance.",
      "Collaborated with team members during development.",
    ] },
]);

const skills = withOrder([
  { title: "Frontend", items: ["React.js", "React Hooks", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive Web Design"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization", "Middleware"] },
  { title: "Database", items: ["MongoDB", "MongoDB Atlas", "Mongoose"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
]);

const projects = withOrder([
  { title: "JobPortal-Pro", githubUrl: "https://github.com/virendrajangir563/JobPortal-Pro",
    description: "Full-stack MERN application with a separate React.js frontend and Node.js/Express.js backend. Includes signup, login and profile pages with JWT-based authentication and protected routes.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"] },
  { title: "Cineora Movie Ticket Booking", githubUrl: "https://github.com/virendrajangir563/Cineora",
    description: "Full-stack movie ticket booking application with a React.js frontend and Node.js/Express.js backend, with separate pages for Admin, Customer and Theater Owner.",
    tags: ["React.js", "Node.js", "Express.js"] },
  { title: "Task Manager Application",
    description: "Task management web application with task creation, filtering and status updates.",
    tags: [] },
]);

const education = withOrder([
  { title: "Master of Computer Applications (MCA)", org: "Apex University, Jaipur, Rajasthan", period: "2024 – 2026", type: "degree" },
  { title: "MERN Stack Web Development Certification (Pursuing)", org: "GRASS Solutions Pvt. Ltd., Jaipur", period: "March 2026 – Present", type: "certification" },
  { title: "O/A Level Computer Programming Diploma", org: "Netcom College of IT & Management, Sikar", period: "2023 – 2025", type: "certification" },
]);

await mongoose.connect(process.env.MONGO_URI);
await Promise.all([Project.deleteMany(), Experience.deleteMany(), SkillGroup.deleteMany(), Education.deleteMany()]);
await Promise.all([Project.insertMany(projects), Experience.insertMany(experience), SkillGroup.insertMany(skills), Education.insertMany(education)]);
console.log("Seeded: %d projects, %d experience, %d skill groups, %d education items", projects.length, experience.length, skills.length, education.length);
await mongoose.disconnect();
