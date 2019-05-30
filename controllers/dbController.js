const db = require('../models')

module.exports = {
    test: function(req, res){
        console.log(`test function in dbController fired`)
            res.json( {'msg': 'OK sending JSON OK'} )

    }
}