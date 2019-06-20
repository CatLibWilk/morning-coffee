const db = require('../models');
const axios = require("axios");
const weather_key = process.env.weather

module.exports = {
    test: function(req, res){
        console.log(`test function in dbController fired`)
            res.json( {'msg': 'OK sending JSON OK'} )

    },
    tagesschau: function(req, res){
        console.log('tagesschau in dbcontroller found');
        axios.get('https://www.tagesschau.de/api2/news')
                .then(response => {

                    let dataArray = []
                    for(let i = 0; i < 5; i++){
                        const dataObj = {
                            title: response.data.news[i].title ? response.data.news[i].title : '',
                            url: response.data.news[i].shareURL,
                            img: response.data.news[i].teaserImage.portraetgross8x9.imageurl,
                            description: response.data.news[i].firstSentence
                        }
                        dataArray.push(dataObj)
                    }
                    // res.json(response.data.news[0])
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
                            title: response.data.data.children[i].data.title,
                            url: response.data.data.children[i].data.url,
                            img: '',
                            description: `${response.data.data.children[i].data.selftext.substr(0,100)}...`
                        }
                        dataArray.push(dataObj)
                    }
                    // res.json(response.data.data.children[0].data)
                    res.json(dataArray)

                })
    },
    openweather: function(req, res){
        console.log('openweather in dbcontroller found')
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=${weather_key}`)
                .then(response => {
                    // console.log(response.data)
                    const weatherData = {
                        weather_flag: 'weather',
                        cloud_cover: response.data.clouds.all,
                        weather_description: response.data.weather[0].description,
                        temp: Math.floor((response.data.main.temp-273.15) * 9/4 + 32),
                        humidity: response.data.main.humidity
                    }
                    res.json(weatherData)
                })
    }

}