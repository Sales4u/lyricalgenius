// Track routes
const express = require('express');
const router = express.Router();

// Example track route
router.get('/', (req, res) => {
    res.send('Track route');
});

module.exports = router;