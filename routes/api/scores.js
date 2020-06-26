const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const HiScore = require('../../models/HiScore');



router.get("/scores", (req, res) => {
  HiScore.find()
    .sort({ score: -1})
    .then(scores => res.json(scores))
    .catch(err => res.status(404).json({ noscoresfound: 'No scores found' }));
});

router.post('/',
  (req, res) => {
    const newScore = new HiScore({
      user: req.body.user,
      score: req.body.score,
    });
    newScore.save().then(score => res.json(score));
  }
);

module.exports = router;