const express = require('express');
const { trackingCon, trackingUninstallCon } = require('../controllers/tracking.controller');

const router = express.Router();

router.post('/kr-segment', (req, res) => trackingCon(req, res));
router.get('/kr-segment', (req, res) => trackingUninstallCon(req, res));

module.exports = router;