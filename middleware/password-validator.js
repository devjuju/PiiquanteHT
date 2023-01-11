
const passwordValidator = require("password-validator");
const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8) // Longueur minimale 8
  .is()
  .max(100) // Longueur maximale 100
  .has()
  .uppercase() // Doit avoir des lettres majuscules
  .has()
  .lowercase() // Doit contenir des lettres minuscules
  .has()
  .digits(2) // Doit avoir au moins 2 chiffres
  .has()
  .not()
  .spaces() // Ne devrait pas avoir d'espaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123", "Qwerty123", "Azerty123"]);

module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    return res.status(400).json({
      error:
        "Mot de passe faible, non accepté ! : " +
        passwordSchema.validate("req.body.password"),
    });
  }
};