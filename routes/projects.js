const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('projects.ejs');
});

module.exports = router;
