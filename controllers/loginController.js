// external imports
const bcrypt = require('bcrypt');
const passport = require('passport');
const { body } = require('express-validator');
const initializePassport = require('../utility/passport-config');
// internal imports
const User = require('../models/User');

async function getLoggedIn(req, res) {
    // const user = await User.findByEmail(req.params.email);
    // console.log(user);
    try {
        initializePassport(
            passport,
            // (email) => users.find((user) => user.email === email),
            // (id) => users.find((user) => user.id === id)
            (email) => email === 'nusratcode14@gmail.com',
            (id) => id === '62b9e190f65f1f56f249964d',
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
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        User.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashedPassword,
        });
        res.redirect('/login');
    } catch (err) {
        console.err(err);
        res.redirect('/register');
    }
    console.log(User);
}
module.exports = {
    getLogin,
    getLoggedIn,
    getRegistration,
};
