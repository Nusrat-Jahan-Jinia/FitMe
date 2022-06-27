const express = require('express');
const { getUsers } = require('../controllers/usersController');

const router = express.Router();

// get users list
router.get('/', getUsers);
module.exports = router;
