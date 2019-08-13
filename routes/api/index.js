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

router.route('/quotes')
        .get(dbController.quotes)

router.route('/todos')
        .get(dbController.getTodos)

router.route('/todos')
        .post(dbController.addTodo)

router.route('/todos/delete')
        .post(dbController.deleteTodo)

module.exports = router;
           