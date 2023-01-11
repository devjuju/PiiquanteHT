// Étape 2 : Construire le parcours utilisateur
// Modèle d'utilisateur
// SOURCE (cours) : Passez au Full Stack avec Node.js, Express et MongoDB
// Comprenez le stockage de mot de passe sécurisé
// Créez un modèle de données
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');// mongoose-unique-validator  améliore les messages d'erreur lors de l'enregistrement de données uniques.

const userSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);