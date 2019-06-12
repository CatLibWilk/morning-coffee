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

                    let dataArray = []
                    for(let i = 0; i < 5; i++){
                        const dataObj = {
                            title: response.data.news[i].title,
                            url: response.data.news[i].shareURL,
                            img: response.data.news[i].images[0].portraetgross8x9.imageurl,
                            description: response.data.news[i].firstSentence
                        }
                        dataArray.push(dataObj)
                    }
                    res.json(dataArray)

                })
    },
    makinghiphop: function(req, res){
        console.log('makinghiphop in dbcontroller found');
        axios.get('https://www.reddit.com/r/makinghiphop/rising.json?limit=5')
                .then(response => {
                    console.log(response)
                    let dataArray = []
                    for(let i = 0; i < 5; i++){
                        const dataObj = {
                            title: '',
                            url: '',
                            img: '',
                            description: ''
                        }
                        dataArray.push(dataObj)
                    }
                    res.json(response.data)

                })
    },

}