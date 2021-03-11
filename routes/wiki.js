const router = require('express').Router();
const main = require('../views/main');
const { addPage } = require('../views');
const { Page } = require('../models');


// GET /wiki/
router.get('/', async(req, res, next) => {
  try {
    res.send('Main Page');
  } catch(err) {
    next(err);
  }
})

// POST /wiki/
router.post('/', async(req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  try {
    const page = await Page.create({
      title: title,
      content: content
    });

    res.redirect('/');

  } catch(err) {
    next(err);
  }
})


// GET /wiki/add
router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch(err) {
    next(err);
  }
})

module.exports = router;
