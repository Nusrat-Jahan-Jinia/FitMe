const express = require('express');
const {
    getFoods,
    postFood,
    getSingleFood,
    updateSingleFood,
    deleteSingleFood,
} = require('../controllers/foodsController');

const router = express.Router();

// foods routes
router.get('/', getFoods);
router.post('/', postFood);
router.get('/:id', getSingleFood);
router.patch('/:id', updateSingleFood);
router.delete('/:id', deleteSingleFood);
module.exports = router;
