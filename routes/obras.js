const express = require('express');
const router = express.Router();
const obras = require('../controllers/obras');

router.get('/museus/:museuId/obras', obras.listObras);

module.exports = router;

