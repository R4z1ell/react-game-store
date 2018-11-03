const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: 1,
    maxlength: 100
  }
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = { Genre };
