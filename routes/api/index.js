const router = require('express').Router();
const dbController = require('../../controllers/dbController');

//localhost:3000/api
router.route('/')
        .get(dbController.test)
        
router.route('/tagesschau')
        .get(dbController.tagesschau)
        
router.route('/makinghiphop')
        .get(dbController.makinghiphop)
        
router.route('/openweather')
        .get(dbController.openweather)


module.exports = router;
           