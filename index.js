const express = require('express')
const app = express()
const port = 3000



const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const User = require('./models/User');
const Product = require('./models/Product');

// Middleware
app.use(bodyParser.json());

// Synchronize models
sequelize.sync()
    .then(() => {
        console.log('Database synchronisée.');
    })
    .catch(err => {
        console.log('Erreur lors de la synchronisation de la database:', err);
    });

app.get('/', (req, res) => {
    res.send('Route GET ' + req)
})

app.post('/', (req, res) => {
    res.send('Route POST ' + req)
})

app.put('/', (req, res) => {
    res.send('Route PUT ' + req)
})

app.delete('/', (req, res) => {
    res.send('Route DELETE ' + req)
})

app.listen(port, () => {
    console.log(`Le serveur est ouvert sur le port ${port}`)
})