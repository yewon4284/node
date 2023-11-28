const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

router.post('/img', afterUploadImage);
router.post('/', isLoggedIn, uploadPost);

module.exports = router;