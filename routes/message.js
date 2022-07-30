const express = require('express');

const router = express.Router()

const auth = require('../controllers/auth')

const messageController = require('../controllers/message');

router.post('/message',auth.authenticate,messageController.message);

router.get('/getmessage',auth.authenticate,messageController.getmessage);



module.exports = router;