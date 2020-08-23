const express = require('express');

const router = express.Router();
const PlanetController = require('./controllers/PlanetController');

router.post('/planet', PlanetController.create);
router.get('/planets', PlanetController.list);
router.get('/planet', PlanetController.listOne);
router.delete('/planet/:id', PlanetController.delete);

module.exports = router;
