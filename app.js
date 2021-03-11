const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require('path');
const layout = require('./views/layout.js');
const { db, Page, User } = require('./models');
const userRouter = require('./routes/users');
const wikiRouter = require('./routes/wiki');


// Static middleware
app.use(express.static(path.join(__dirname, 'views')));
// Body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Loggin middleware
app.use(morgan('dev'));

app.use('/wiki', wikiRouter);

app.get('/', async(req, res, next) => {
  res.redirect('/wiki');
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


const port = 3000;

const init = async () => {
  // console.log(db);
  await db.sync({force: true});
  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
}
init();



