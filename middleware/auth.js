// Étape 3 : Démarrer le middleware
// Ajout d’authorize pour la validation des tokens.
// SOURCE (cours) : Passez au Full Stack avec Node.js, Express et MongoDB
// Configurez le middleware d'authentification
// Implémentez le middleware d'authentification
require('dotenv').config();
const jwt = require('jsonwebtoken');

// EXPORT
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token,process.env.RANDOM_SECRET_TOKEN);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'id utilisateur invalide';
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: new Error('requête invalide!') });
  }
};