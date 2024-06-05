// index.js
const express = require('express');
const app = express();
const port = 3000;

// MySQL
const sequelize = require('./config/database');

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

// Importer les routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Utiliser les routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);


app.listen(port, () => {
    console.log(`Le serveur est ouvert sur le port ${port}`);
});