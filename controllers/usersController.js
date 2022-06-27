// external imports
// internal imports
const User = require('../models/User');

async function getUsers(req, res, next) {
    try {
        const users = await User.find();
        res.json(users);
        // res.render('foods', {
        //     foods,
        // });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUsers,
};
