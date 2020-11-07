const express = require('express');
const logger = require('morgan');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3333;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost/workout',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
);

// Routes

app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, () =>{
    console.log(`APP running on port ${PORT}`);
});