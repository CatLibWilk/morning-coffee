const router = require('express').Router();
const dbController = require('../../controllers/dbController');

//localhost:3000/api
router.route('/')
        .get(dbController.test)
router.route('/tagesschau')
        .get(dbController.tagesschau)
router.route('/makinghiphop')
        .get(dbController.makinghiphop)


module.exports = router;
           