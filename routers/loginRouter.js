/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
const express = require('express');

const passport = require('passport');

const { getLogin, getLoggedIn, getRegistration } = require('../controllers/loginController');

const router = express.Router();

router.use(passport.initialize());

// get users list
router.get('/login', getLogin);
// router.post('/login', passport.authenticate('local', {
//  successRedirect: '/',
//  failoreRedirect: '/login',
// }));

router.post('/login', getLoggedIn);
router.post('/registration', getRegistration);
module.exports = router;
