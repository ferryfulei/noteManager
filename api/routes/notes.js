const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Note = require('../models/note');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const NotesController = require('../controllers/notes');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/', checkAuth, NotesController.notes_get_all);

router.post('/', checkAuth, upload.single("attachedFile"), NotesController.notes_post);

router.get('/:folderName', );

router.delete('/:noteId', checkAuth, NotesController.notes_delete);

router.patch('/:noteId', checkAuth, NotesController.notes_patch);
module.exports = router;