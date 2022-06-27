const express = require('express');
const { getFoods } = require('../controllers/foodsController');

const router = express.Router();

// get foods page
router.get('/', getFoods);

module.exports = router;
