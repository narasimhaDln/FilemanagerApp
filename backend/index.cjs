const express = require('express');
const path = require('path');
const cors = require('cors');
const connection = require('./src/config/db');
const userRoutes = require('./src/routes/user.routes');
const fileRoutes = require('./src/routes/file.routes');

const folderRoutes = require('./src/routes/folder.routes');

const app = express();

require('dotenv').config({ path: '.env', debug: true }); // Added debug

// Validate environment variables
if (
  !process.env.CLOUD_NAME ||
  !process.env.CLOUD_KEY ||
  !process.env.CLOUD_SECRET
) {
  console.error('Missing Cloudinary environment variables');
  process.exit(1);
}

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);
require('dotenv').config();

app.use(express.json());
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'dist', 'index.html'));
  });
}
app.use('/api/user', userRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/folder', folderRoutes);
app.listen(process.env.PORT, () => {
  connection();
  console.log(`server is running on port ${process.env.PORT}`);
});
