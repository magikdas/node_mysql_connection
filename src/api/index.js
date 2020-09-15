const express = require('express');
const emojis = require('./emojis');
const teacher = require('./teacher');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/teacher', teacher);


module.exports = router;
