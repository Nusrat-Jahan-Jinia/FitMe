const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();
// db connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Dtabase connection successful!'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
