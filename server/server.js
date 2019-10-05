const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const fileupload = require('express-fileupload');

const cors = require('cors');

const bookRouter = require('./routes/book.router');
// const calendarRouter = require('./routes/calendar.router');
const fileRouter = require('./routes/file.router');

require('dotenv').config();
process.env.API_KEY

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('build'));
app.use(cors())
app.use(fileupload({
    useTempFiles: true
}));

/** ---------- ROUTES ---------- **/
app.use('/books', bookRouter);
// app.use('/calendar', calendarRouter);
app.use('/files', fileRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});