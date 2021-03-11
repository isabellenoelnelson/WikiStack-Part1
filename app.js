const express = require("express");
const app = express();
const morgan = require('morgan');
// Static middleware
app.use(express.static(path.join(__dirname, 'public')));
// Body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Loggin middleware
app.use(morgan('dev'));
