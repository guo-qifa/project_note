const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
  res.render('index', { title: 'express',
    nav: {
      item1: "首页",
      item2: "详情"
    }
  })
  
});

module.exports = router;