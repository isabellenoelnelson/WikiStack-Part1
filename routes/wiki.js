const router = require('express').Router();
const main = require('../views/main');
const { addPage } = require('../views');


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
  try {
    res.json(req.body);
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
