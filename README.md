# 📂 FileManager App

📖 Introduction
The FileManager App is a modern full-stack web application that enables users to securely store, organize, and manage their files in the cloud.
It combines a Node.js + Express backend with a React + Vite frontend, offering a smooth and responsive user experience.

With JWT-based authentication, users can sign up, log in, and securely manage their personal files and folders.
File uploads are handled via Multer and stored in Cloudinary, ensuring fast and reliable cloud storage.

Whether you need to create folders, upload documents, or browse stored files, the FileManager App provides a clean, intuitive interface for effortless file management—accessible from anywhere.

- **Backend:** Node.js, Express, MongoDB, Multer, Cloudinary
- **Frontend:** React, Vite, TailwindCSS
- **Authentication:** JWT
- **File Uploads:** Cloudinary storage via Multer memory storage

---
GIT HUB LINK:https://github.com/narasimhaDln/FilemanagerApp/tree/main
## 🚀 Features

### Backend

- User authentication (JWT based)
- Role-based protected routes
- File uploads using Multer + Cloudinary
- Folder creation and file management
- MongoDB Atlas integration

### Frontend

- React (Vite) for fast development
- TailwindCSS for styling
- React Router for navigation
- Toast notifications for feedback

---

## 📂 Project Structure

fileManagerApp/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middlewares/
│ │ ├── models/
│ │ └── routes/
│ ├── .env
│ ├── .gitignore
│ ├── package.json
│ ├── package-lock.json
│ └── index.js
│
├── frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── FolderGrid.tsx
│ │ │ ├── Navbar.tsx
│ │ │ └── Sidebar.tsx
│ │ ├── config/
│ │ │ └── api.ts
│ │ ├── context/
│ │ │ ├── ThemeContext.tsx
│ │ │ └── UserContext.tsx
│ │ ├── pages/
│ │ │ ├── CreatePage.tsx
│ │ │ ├── FolderDetails.tsx
│ │ │ ├── Home.tsx
│ │ │ ├── LoginPage.tsx
│ │ │ └── SignUpPage.tsx
│ │ ├── App.tsx
│ │ ├── index.css
│ │ └── main.tsx
│ ├── .gitignore
│ ├── package.json
│ └── package-lock.json
│
├── node_modules/
├── .env
├── .gitignore
├── package.json
└── package-lock.json

### .env

PORT=5000
MONGO_URI=mongoDB_URl
JWT_SECRET=secrete_key
CLOUD_NAME=Your_cloud_name
CLOUD_KEY=Your_Cloud_apiKey
CLOUD_SECRET=Your_cloud_secrete
NODE_ENV=development or production

🗂️ API Endpoints

### User Routes

POST /api/user/register User signup
POST /api/user/login User login
POST /api/user/logout User logout
GET /api/user/all_users Get all users
GET /api/user/protected Protected route (role check)

### File Routes

POST /api/files/upload Upload a file
GET /api/files/:folderId List files by folder
DELETE /api/files/:id Delete a file

### Folder Routes

POST /api/folder/Create folder
GET /api/folder/get_folders Get all folders

▶️ Running the App
Development
Run backend & frontend separately.

Backend:

bash
npm run dev
Frontend:

bash

cd frontend
npm run dev
