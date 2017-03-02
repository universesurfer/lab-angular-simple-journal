const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date()
  },
  title: {
    type: String,

  },
  content: {
    type: String
  }

});

module.exports = mongoose.model('journal', journalSchema);
