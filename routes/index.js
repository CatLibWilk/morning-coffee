const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api')
const dbController = require('../controllers/dbController')
const firebase = require('firebase')

router.use('/api', apiRoutes);
router.route('/')
        .get((req, res) => {
            res.json( {'msg': 'OK home OK'} )
        });
        //testing firebase with server get request
        // .get((req, res) => {
        //     firebase.database().ref('/TestMessages').set({TestMessage: 'GET Request'});
        // });

module.exports = router