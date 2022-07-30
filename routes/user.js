const exp = require('constants');
const express = require('express');

const usercontroller = require('../controllers/user');


const router = express.Router()

router.post('/signup', usercontroller.signup);
router.post('/login',usercontroller.login);
router.get('/users',usercontroller.getUser);







module.exports = router