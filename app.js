const express = require('express');
const pageRoute = require('./routes/pageRoute');
const mongoose = require('mongoose');
const courseRoute = require('./routes/courseRoute');

const app = express();

// Connect to DB
mongoose.connect(
  'mongodb+srv://eraykeskin:eray123@cluster0.b3kpp.mongodb.net/Smartedu',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
