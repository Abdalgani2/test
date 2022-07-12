const express = require('express');

const router = express.Router();

const signUpControllers = require('../../controllers/user/signUp');

router.post('/signUp',signUpControllers.signUp);
router.post('/isValid',signUpControllers.verifiedToken);

module.exports = router;
