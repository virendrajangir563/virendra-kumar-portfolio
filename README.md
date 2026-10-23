# Virendra Kumar - MERN Portfolio

React (Vite + Tailwind) frontend, Express backend, MongoDB database.

## Folders
- `client/`  React website. Personal details are at the top of `src/App.jsx` (the `ME` object).
- `server/`  Express API + MongoDB models. `seed.js` fills the database from your resume.

## Run it on your computer
1. Install Node.js (v18 or newer) and create a free MongoDB Atlas database (or install MongoDB locally).
2. Backend:
   ```
   cd server
   npm install
   copy .env.example to .env and put your MONGO_URI, ADMIN_KEY
   npm run seed     # fills the database (run once)
   npm run dev      # starts http://localhost:5000
   ```
3. Frontend (new terminal):
   ```
   cd client
   npm install
   npm run dev      # opens http://localhost:5173
   ```

## Database collections
projects, experiences, skillgroups, educations (portfolio content) and messages (contact form).
To change content, edit `server/seed.js` and run `npm run seed` again, or edit the data in Atlas.
Messages are saved in the `messages` collection. You can also read them at
`GET /api/messages` with header `x-admin-key: <your ADMIN_KEY>`.

## Add live demo links
In `seed.js`, add `liveUrl: "https://..."` to a project and run `npm run seed`. The "Live Demo" button appears only when a link exists.

## Deploy
- Backend: Render or Railway. Set MONGO_URI, ADMIN_KEY and CLIENT_URL (your frontend URL).
- Frontend: Vercel or Netlify. Set `VITE_API_URL` to your backend URL. Build command `npm run build`, folder `dist`.
