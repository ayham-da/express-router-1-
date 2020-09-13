// Pseudo-DB-Bibliothek importieren
var { DataStore } = require('notarealdb')

var express = require('express')
var router = express.Router()

// Pseudo-DB erstellen
var store = new DataStore('./data')

// Collection für Tiere
var animals = store.collection('animals')

router.get('/', (req, res) => {
    res.json(animals.list())
})

router.post('/', (req, res) => {
    var data = req.body
    // Neues Tier in die DB hinzufügen
    animals.create(data)
    // Alles aus der DB-Collection ausgeben
    res.json(animals.list())
})

module.exports = router