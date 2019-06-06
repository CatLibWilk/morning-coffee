const db = require('../models');
const axios = require("axios");

module.exports = {
    test: function(req, res){
        console.log(`test function in dbController fired`)
            res.json( {'msg': 'OK sending JSON OK'} )

    },
    tagesschau: function(req, res){
        console.log('tagesschau in dbcontroller found');
        axios.get('https://www.tagesschau.de/api2')
                .then(response => {
                    res.json(response.data.news)
                })
    }
}