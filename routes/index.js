const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api')
const dbController = require('../controllers/dbController')

router.use('/api', apiRoutes);
router.route('/')
        .get((req, res) => {
            res.json( {'msg': 'OK home OK'} )
        });

module.exports = router