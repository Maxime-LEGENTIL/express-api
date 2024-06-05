// userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('', async (req, res) => {
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

router.post('', async (req, res) => {
    try {
        const datas = req.body;
        const user = await User.create(datas);
        if(user) {
            res.json(user);
        }
        else {
            res.json({error: "Erreur lors de l'ajout de l'utilisateur."})
        }
    } catch (error) {
        console.error("Erreur lors de la l'ajout de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur lors de la l'ajout de l'utilisateur :" });
    }
});

module.exports = router;