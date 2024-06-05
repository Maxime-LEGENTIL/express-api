// userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        if(users.length > 0) {
            res.json(users);
        }
        else {
            res.json({error: "Aucun utilisateur trouvé."})
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});

module.exports = router;