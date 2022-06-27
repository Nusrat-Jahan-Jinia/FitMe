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
async function getSingleFood(req, res) {
    try {
        const food = await Food.findById(req.params.id);
        res.json(food);
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
}

async function updateSingleFood(req, res) {
    try {
        const food = await Food.findById(req.params.id);
        food.name = req.body.name;
        const f1 = await food.save();
        res.json(f1);
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
}
async function deleteSingleFood(req, res) {
    try {
        const food = await Food.findById(req.params.id);
        await food.delete();
        console.log('deleted');
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
}
async function postFood(req, res) {
    const food = new Food({
        name: req.body.name,
        s_name: req.body.name,
        des: req.body.des,
        value: req.body.value,
    });
    try {
        const f1 = await food.save();
        res.json(f1);
    } catch (error) {
        console.error(error);
        res.send('Error');
    }
}

module.exports = {
    getFoods,
    postFood,
    getSingleFood,
    updateSingleFood,
    deleteSingleFood,
};
