// Express-Bibliothek importieren
var express = require('express');

// Animals-Router importieren
var animalRouter = require('./routes/animals')

// Server erstellen
var app = express()

// Parsen des Body in POST aktivieren
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/animals', animalRouter)

module.exports = app;
