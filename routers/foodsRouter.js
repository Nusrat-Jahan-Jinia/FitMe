const express = require('express');
const { getFood } = require('../controllers/foodsController');
const Food = require('../models/Food');

const router = express.Router();

// get foods page
router.get('/foods', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
        // res.render('foods', {
        //     foods,
        // });
    } catch (err) {
        res.send(`Error${err}`);
    }
});
module.exports = router;
