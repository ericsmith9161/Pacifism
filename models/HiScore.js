const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HiScoreSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true
  },
});

module.exports = HiScore = mongoose.model('hiscore', HiScoreSchema);