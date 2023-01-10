// Étape 4 : Construire la route Sauce de l’API
// La Route Sauce
// SOURCE (cours) : Passez au Full Stack avec Node.js, Express et MongoDB 
// Modifiez les routes pour prendre en compte les fichiers
// Modifiez la route POST
// Modifiez la route PUT
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllThings);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;
