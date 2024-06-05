// userRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        if(products.length > 0) {
            res.json(products);
        }
        else {
            res.json({error: "Aucun produit trouvé."})
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
    }
});

module.exports = router;