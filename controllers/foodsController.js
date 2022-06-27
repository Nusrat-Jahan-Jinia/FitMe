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

async function postFood(req, res) {
    const food = new Food({
        name: req.body.name,
        s_name: req.body.name,
        des: req.body.des,
    });
    try {
        const f1 = await food.save();
        res.json(f1);
    } catch (error) {
        res.send('Error');
    }
}

module.exports = {
    getFoods,
    postFood,
};
