const Note = require("../models/note");
const mongoose = require('mongoose');
exports.notes_get_all = (req, res, next) => {
    Note.find()
    .select("folder text _id")
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            notes: docs
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

exports.notes_post = (req, res, next) => {
    const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        text: req.body.text,
        folder: req.body.folder
    });
    note.save().then(result => {
        res.status(201).json({
            message: 'Created note',
            createdProduct: {
                _id: result._id,
                text: result.text,
                folder: result.folder
            }
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });  
};

exports.notes_get_folder = (req, res, next) => {
    const folderName = req.params.folderName;
    Note.find({folder: folderName})
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            notes: docs
        }
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
};

exports.notes_delete = (req, res, next) => {
    const id = req.params.noteId;
    Note.remove({
        _id: id
    })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Note deleted',
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

exports.notes_patch = (req, res, next) => {
    const id = req.params.noteId;
    Note.update(
        {_id: id}, 
        {$set: {
            text: req.body.text
        }}
        )
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Updated note'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};
