const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HiScoreSchema = new Schema({
  user: {
    type: String,
    required: true,
    default: "Moe Szyslak"
  },
  score: {
    type: Number,
    required: true
  },
});

module.exports = HiScore = mongoose.model('hiscore', HiScoreSchema);