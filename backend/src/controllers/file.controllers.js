const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const FileModel = require('../models/file.model');
const FolderModel = require('../models/folder.model');

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    if (!req.body.folderId)
      return res.status(400).json({ error: 'Folder ID is required' });

    const folder = await FolderModel.findById(req.body.folderId);
    if (!folder) return res.status(404).json({ error: 'Folder not found' });

    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto', folder: folder.name },
      async (error, uploadedFile) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: error.message });
        }

        const file = new FileModel({
          name: uploadedFile.original_filename,
          url: uploadedFile.secure_url,
          public_id: uploadedFile.public_id,
          folder: folder._id,
          size: uploadedFile.bytes,
          type: uploadedFile.format,
        });

        await file.save();
        res.json(file);
      },
    );

    stream.end(req.file.buffer);
  } catch (err) {
    console.error('Upload file error:', err);
    res.status(500).json({ error: err.message });
  }
};

const filesByFolder = async (req, res) => {
  try {
    const files = await FileModel.find({
      folder: req.params.folderId,
    }).populate('folder');
    res.json(files);
  } catch (err) {
    console.error('Files by folder error:', err);
    res.status(500).json({ error: err.message });
  }
};
const deleteFile = async (req, res) => {
  try {
    const file = await FileModel.findById(req.params.id);
    if (!file) return res.status(404).json({ error: 'File not found' });

    // ✅ Will now work because public_id is stored
    await cloudinary.uploader.destroy(file.public_id);

    await FileModel.findByIdAndDelete(req.params.id);

    res.json({ message: 'File deleted successfully' });
  } catch (err) {
    console.error('Delete file error:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { uploadFile, filesByFolder, upload, deleteFile };
