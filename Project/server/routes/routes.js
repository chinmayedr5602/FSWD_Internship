const express = require('express');
const userModel = require('../userModel/userModel')
const control = require('../controller/userController');
const router = express.Router();

// router.get('/getUsers',control.getUsers);

router.post('/postUsers',control.postUsers);

// router.get('/getUser/:id', control.getById);

// router.delete('/deleteUser/:id', control.deleteUser);

module.exports = router;