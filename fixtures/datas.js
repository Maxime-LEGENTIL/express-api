// fixtures/seed.js
const sequelize = require('../config/database');
const User = require('../models/User');
const Product = require('../models/Product');

const datas = async () => {
    await sequelize.sync({ force: true }); // Remettre à zéro la base de données

    const users = [
        { firstname: 'Jacques', lastname: 'BREL', email: 'jacques@brel.com' },
        { firstname: 'Marie', lastname: 'CURIE', email: 'marie@curie.com' },
        { firstname: 'Albert', lastname: 'CAMUS', email: 'albert@camus.com' },
        { firstname: 'Simone', lastname: 'DE BEAUVOIR', email: 'simone@debeauvoir.com' },
        { firstname: 'Jean-Paul', lastname: 'SARTRE', email: 'jeanpaul@sartre.com' },
        { firstname: 'Edith', lastname: 'PIAF', email: 'edith@piaf.com' },
        { firstname: 'Georges', lastname: 'BRASSENS', email: 'georges@brassens.com' },
        { firstname: 'Francoise', lastname: 'SAGAN', email: 'francoise@sagan.com' },
        { firstname: 'Serge', lastname: 'GAINSBOURG', email: 'serge@gainsbourg.com' },
        { firstname: 'Juliette', lastname: 'BINOCHE', email: 'juliette@binoche.com' },
        { firstname: 'Gérard', lastname: 'DEPARDIEU', email: 'gerard@depardieu.com' },
        { firstname: 'Catherine', lastname: 'DENEUVE', email: 'catherine@deneuve.com' },
        { firstname: 'Jean', lastname: 'RENO', email: 'jean@reno.com' },
        { firstname: 'Marion', lastname: 'COTILLARD', email: 'marion@cotillard.com' },
        { firstname: 'Omar', lastname: 'SY', email: 'omar@sy.com' },
    ];

    const products = [
        { name: 'iPhone 15 Pro Max', price: 1200, description: 'Le dernier iPhone de la marque Apple !' },
        { name: 'Samsung Galaxy S22', price: 1000, description: 'Le smartphone phare de Samsung avec un écran AMOLED.' },
        { name: 'MacBook Pro 14"', price: 2400, description: 'Le nouveau MacBook Pro avec puce M1 Pro.' },
        { name: 'Dell XPS 13', price: 1500, description: 'Le célèbre ultrabook de Dell avec un écran InfinityEdge.' },
        { name: 'Apple Watch Series 7', price: 400, description: 'La dernière montre connectée d\'Apple avec des fonctionnalités avancées.' },
        { name: 'Sony WH-1000XM4', price: 350, description: 'Les écouteurs sans fil avec réduction de bruit active de Sony.' },
        { name: 'Nintendo Switch', price: 300, description: 'La console de jeu hybride de Nintendo.' },
        { name: 'PlayStation 5', price: 500, description: 'La dernière console de jeu de Sony.' },
        { name: 'Xbox Series X', price: 500, description: 'La console de jeu de nouvelle génération de Microsoft.' },
        { name: 'iPad Pro 12.9"', price: 1100, description: 'La tablette haut de gamme d\'Apple avec un écran Liquid Retina.' },
        { name: 'Amazon Echo Dot', price: 50, description: 'L\'assistant vocal intelligent d\'Amazon.' },
        { name: 'GoPro HERO10', price: 500, description: 'La dernière caméra d\'action de GoPro avec une résolution 5K.' },
        { name: 'Kindle Paperwhite', price: 130, description: 'La liseuse électronique d\'Amazon avec un écran haute résolution.' },
        { name: 'Bose SoundLink Revolve', price: 200, description: 'L\'enceinte Bluetooth portable de Bose avec un son à 360 degrés.' },
        { name: 'Razer Blade 15', price: 2200, description: 'Le puissant ordinateur portable de jeu de Razer.' },
    ];
    

    try {
        await User.bulkCreate(users);
        await Product.bulkCreate(products);
        console.log('La base de données a été peuplée avec succès.');
    } catch (error) {
        console.error('Erreur lors du peuplement de la base de données :', error);
    }
};

datas()
    .then(() => {
        console.log('Fin du script de fixtures.');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Erreur lors de l\'exécution du script de fixtures :', error);
        process.exit(1);
    });
