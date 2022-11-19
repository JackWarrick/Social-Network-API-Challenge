const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

// Got this from the index.js next to the api folder in the mini project
//Exports out for use by the server (index.js)