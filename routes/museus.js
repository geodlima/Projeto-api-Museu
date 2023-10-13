const express = require('express');
const router = express.Router();
const museus = require('../controllers/museus');

router.get('/museus', museus.listMuseus);
router.get('/museus/:id', museus.getMuseuById);

module.exports = router;

