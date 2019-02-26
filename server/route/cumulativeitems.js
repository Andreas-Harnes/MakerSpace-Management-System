const express = require('express');
const CumulativeItemsController = require('../controller/cumulativeitems.controller');
const router = express.Router();

router.get('/', CumulativeItemsController.fetchCumulativeItems);

module.exports = router;
