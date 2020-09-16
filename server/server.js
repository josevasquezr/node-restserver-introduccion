require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('get request');
});

app.get('/usuario/:id/:depto', (req, res) => {
    let id = req.params.id || '';
    let depto = req.params.depto || '';

    if (id !== '' && depto !== '') {
        res.json({
            id,
            depto
        });
    } else {
        res.status(400).json({
            ok: false,
            mensaje: 'Los parametros id y depto son obligatorios'
        });
    }

});

app.post('/usuario', (req, res) => {
    let nombre = req.body.nombre;
    let edad = req.body.edad;
    let telefono = req.body.telefono;

    if (nombre && edad && telefono) {
        res.json({
            nombre,
            edad,
            telefono
        });
    } else {
        res.status(400).json({
            ok: false,
            mensaje: 'Todos los parametros son obligatorios'
        });
    }
});

app.listen(process.env.PORT, () => console.log('Escuchando el puerto: ', process.env.PORT));