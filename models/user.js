// Étape 2 : Construire le parcours utilisateur
// Modèle d'utilisateur
// SOURCE (cours) : Passez au Full Stack avec Node.js, Express et MongoDB
// Comprenez le stockage de mot de passe sécurisé
// Créez un modèle de données
// On importe les packages
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator"); 

// On créé notre schéma utilisateur
const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);