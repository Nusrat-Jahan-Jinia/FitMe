// external imports
const bcrypt = require('bcrypt');
const passport = require('passport');
const { body } = require('express-validator');
const initializePassport = require('../utility/passport-config');
// internal imports
const User = require('../models/User');

async function getLoggedIn(req, res) {
    const user = await User.findOne(req.params.email);
    console.log(user.name);
    try {
        initializePassport(
            passport,
            (email) => email === user.email,
            (id) => id === user.id
        );
        console.log(JSON.stringify(req.body));
        res.send('data');
    } catch (error) {
        console.error(error);
    }
}
async function getLogin(req, res, next) {
    console.log(res.data);
    try {
        res.send('hello login');
    } catch (err) {
        next(err);
    }
}
async function getRegistration(req, res) {
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: hashedPassword,
    });
    try {
        await user.save();
        res.json(req.body);
        console.log(req.body);
    } catch (err) {
        console.log(err);
        res.redirect('/register');
    }
    console.log(User);
}
module.exports = {
    getLogin,
    getLoggedIn,
    getRegistration,
};
