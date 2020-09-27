require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err;
    console.log('Base de datos ONLINE...');
});

/* 
    MongoDB Atlas:
    User: jjvasquezr666
    Pass: 3622QeetPlu90uBx
    URL: mongodb+srv://jjvasquezr666:3622QeetPlu90uBx@cluster0.0wn84.mongodb.net/cafe
*/

app.listen(process.env.PORT, () => console.log('Escuchando el puerto: ', process.env.PORT));