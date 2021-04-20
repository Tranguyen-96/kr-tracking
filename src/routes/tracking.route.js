const express = require('express');
const { trackingCon, trackingUninstallCon } = require('../controllers/tracking.controller');

const router = express.Router();

router.post('/tracking', (req, res) => trackingCon(req, res));
router.get('/tracking', (req, res) => trackingUninstallCon(req, res));

module.exports = router;