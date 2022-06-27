// external imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// internal imports
const foodsRouter = require('./routers/foodsRouter');
const usersRouter = require('./routers/usersRouter');

const app = express();
dotenv.config();
app.set('view engine', 'ejs');
// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// db connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Dtabase connection successful!'))
    .catch((err) => console.log(err));

// routing setup
app.get('/', (req, res) => {
    res.send('Hello World!!!!!');
});
app.use('/foods', foodsRouter);
app.use('/users', usersRouter);

// app running
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
