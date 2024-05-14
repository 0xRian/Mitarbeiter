const express = require('express');
const data = require('./test');

const api = express();

const HOST = 'localhost';
const PORT = 8888;

api.get('/', (req, res) => {
    res.send("Willkommen zu dieser API.");
});

api.get('/mitarbeiter', (req, res) => {
res.status(200).json(data);
});

api.get('/mitarbeiter/:id', (req, res) => {
    const id = req.params.id;
    const person = data[id];
    if (person) {
        res.status(200).json(person);
    } else {
        res.status(404).send('Person nicht gefunden');
    }
    });

api.listen(PORT, () => console.log(`API läuft auf ${HOST}:${PORT}`));
console.log(data);