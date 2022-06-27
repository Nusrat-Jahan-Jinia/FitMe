// external imports
// internal imports
const Food = require('../models/Food');

async function getFoods(req, res, next) {
    try {
        const foods = await Food.find();
        // res.json(foods);
        res.render('foods', {
            foods,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getFoods,
};
