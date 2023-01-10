// SOURCE (cours) : Passez au Full Stack avec Node.js, Express et MongoDB 
// Créez une application Express
// Le framework Express est installé et enregistré dans le  package.json  avec   npm install express  .
// Créez un fichier app.js , où vous placerez votre application Express :
// Cette application Express contient quatre éléments de middleware :
const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

// MongoDB Atlas permet d'héberger gratuitement une base de données MongoDB.
// Le package Mongoose facilite les interactions entre votre application Express et votre base de données MongoDB.
// On définit l'accès à la bdd MongoDB (avec les vard'env pour ne pas transmettre les logs de connexion en clair)
/* Test de connexion à la base de données */
// getting-started.js
mongoose.connect('mongodb+srv://piiquante00user:78R99E9Z989E@cluster0.zogiiyb.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
 
const app = express(); 


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(express.json());
  
  app.use('/api/stuff', stuffRoutes);


  module.exports = app;