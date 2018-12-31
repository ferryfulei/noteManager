const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: {
        type: String
    },
    folder: {
        type: String,
        default: "allFolder"
    }
});
module.exports = mongoose.model('Note', noteSchema);