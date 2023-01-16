const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/School')
  .then(() => console.log('Connected!'));

const bodyParser = require("body-parser");
const studentRoute= require("./route/route")
const port = 8080

app.use(express.urlencoded());


// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.use('/', studentRoute)

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   