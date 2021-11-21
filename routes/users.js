
const express = require('express');

const router = express.Router();

const controller = require('../controller/user_controller');

router.get('/profile', controller.profile);
router.get('/posts',controller.posts);

module.exports = router;