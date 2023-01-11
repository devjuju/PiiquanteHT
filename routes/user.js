// Étape 2 : Construire le parcours utilisateur
// Parcours utilisateur
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const passwordVal = require('../middleware/password-validator');

router.post("/signup", passwordVal, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;