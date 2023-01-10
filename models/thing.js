// SOURCE (cours) : Passez au Full Stack avec Node.js, Express et MongoDB 
// Créez un schéma de données
// Créez un schéma Thing
// nous créons un schéma de données qui contient les champs souhaités pour chaque Thing, indique leur type ainsi que leur caractère (obligatoire ou non). Pour cela, on utilise la méthode Schema mise à disposition par Mongoose. Pas besoin de mettre un champ pour l'Id puisqu'il est automatiquement généré par Mongoose ;
const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({ //La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});
// ensuite, nous exportons ce schéma en tant que modèle Mongoose appelé « Thing », le rendant par là même disponible pour notre application Express.
// La méthode  model  transforme ce modèle en un modèle utilisable.
module.exports = mongoose.model('Thing', thingSchema);

// Ce modèle vous permettra non seulement d'appliquer notre structure de données, mais aussi de simplifier les opérations de lecture et d'écriture dans la base de données, comme vous le verrez dans les chapitres suivants.