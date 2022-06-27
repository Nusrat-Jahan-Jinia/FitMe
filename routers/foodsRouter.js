const express = require('express');
const { getFoods, postFood } = require('../controllers/foodsController');

const router = express.Router();

// foods routes
router.get('/', getFoods);
router.post('/', postFood);
module.exports = router;
