const express = require('express');

const router = express.Router();

const signInControllers = require('../../controllers/user/signIn');

router.post('/signIn',signInControllers.signIn);

module.exports = router;