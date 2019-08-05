require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const firebase = require('firebase');
const fconfig = require('./fconfig')
const PORT = process.env.PORT || 3001;
const db = require('./models');

app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

app.use(routes);
firebase.initializeApp(fconfig)
//true drops tables at startup, false will create if not extant
var syncOptions = { force: true };

//add firebase capability with this tut: https://medium.com/@csgsajeewa/restful-web-service-with-node-js-google-app-engine-and-firebase-48910b0b16a7

if( process.env.NODE_ENV === 'test'){
    syncOptions.force = true;
}

// db.sequelize.sync(syncOptions).then(function() {
//     app.listen(PORT, function(){
//         console.log(`App listening on PORT ${PORT}`);
//     });
// });


//connection test
app.listen(PORT, function(){
    console.log(`connect test, listening on port ${PORT}`)
})