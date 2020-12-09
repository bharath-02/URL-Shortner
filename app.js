const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const shortUrl = require('./models/shortUrl');
const app = express();


mongoose.connect('mongodb://localhost:27017/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('Error Occured'.red.bold);
    } else {
        console.log('Server connected to mongoDB'.cyan.bold);
    }
})


app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');