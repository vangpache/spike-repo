const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const bookRouter = require('./routes/book.router');
require('dotenv').config();
process.env.API_KEY

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/books', bookRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});