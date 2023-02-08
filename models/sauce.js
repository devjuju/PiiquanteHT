// Étape 4 : Construire la route Sauce de l’API
// Le Modèle Sauce
// SOURCE frontend/src/app/sauce-form/TS
// SOURCE (cours) : Passez au Full Stack avec Node.js, Express et MongoDB 
// Créez un schéma de données
// Créez un schéma Thing
// nous créons un schéma de données qui contient les champs souhaités pour chaque Thing, indique leur type ainsi que leur caractère (obligatoire ou non). Pour cela, on utilise la méthode Schema mise à disposition par Mongoose. Pas besoin de mettre un champ pour l'Id puisqu'il est automatiquement généré par Mongoose ;
const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({ //La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number },
  dislikes: { type: Number},
  usersLiked: { type: [String]},
  usersDisliked: { type: [String]},
});
// ensuite, nous exportons ce schéma en tant que modèle Mongoose appelé « Thing », le rendant par là même disponible pour notre application Express.
// La méthode  model  transforme ce modèle en un modèle utilisable.
module.exports = mongoose.model('Sauce', sauceSchema);