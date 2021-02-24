const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
require('./config');

const sessions = require('./api/session');
const course  = require('./api/course');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 

app.use(cors());
app.use('/session', sessions);
app.use('/course', course);

app.use(function(req, res, next){
    res.status(404);
    res.type('txt').send('404 Page Not found');
});


app.listen(port, () => console.log(`Running at Port ${port}`));