// index.js
const express = require('express');
const app = express();
const port = 3000;

const sequelize = require('./config/database');
const User = require('./models/User');
const Product = require('./models/Product');

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// Synchronize models
sequelize.sync()
    .then(() => {
        console.log('Database synchronisée.');
    })
    .catch(err => {
        console.log('Erreur lors de la synchronisation de la database:', err);
    });

app.get('/users', async(req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});

app.post('/users', async (req, res) => {
    console.log('Received body:', req.body); // Ajoutez ceci pour voir ce qui est reçu
    try {
        console.log('ok')
        res.send("req")
    }
    catch (error) {
        console.log('err')
    }
    /*try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        console.error('Error creating user:', err); // Ajoutez ceci pour voir les erreurs en détail
        res.status(400).json({ message: err.message });
    }*/
});


app.listen(port, () => {
    console.log(`Le serveur est ouvert sur le port ${port}`);
});
