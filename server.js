// Étape 1 : Démarrer le serveur backend
// Projet initialisé
// SOURCE (cours) : Passez au Full Stack avec Node.js, Express et MongoDB 
const http = require('http');
const app = require('./app');
const helmet = require("helmet");
app.use(
  helmet({
    referrerPolicy: { policy: "no-referrer" },
    referrerPolicy: { policy: ["origin", "unsafe-url"] },
    frameguard: { action: "deny" },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "example.com"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: { policy: "credentialless" },
    crossOriginOpenerPolicy: true,
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
    crossOriginOpenerPolicy: { policy: "unsafe-none" },
    crossOriginResourcePolicy: true,
    crossOriginResourcePolicy: { policy: "same-site" },
    crossOriginResourcePolicy: { policy: "cross-origin" },
    expectCt: { maxAge: 86400, enforce: true },
    hsts: { maxAge: 63072000, preload: true },
    dnsPrefetchControl: { allow: true },
    permittedCrossDomainPolicies: { permittedPolicies: "none" },
  })
);

app.use(helmet.noSniff("dont-sniff-mimetype"));
app.use(helmet.originAgentCluster());
app.use(helmet.ieNoOpen("ienoopen"));
app.use(helmet.hidePoweredBy("hide-powered-by"));
app.use(helmet.xssFilter("x-xss-protection"));
// Ajouter la normalisation de port, la gestion d'erreur et du logging basique à votre serveur Node le rend plus constant et plus facile à déboguer.
const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
// la fonction normalizePort renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne ;
const port = normalizePort(process.env.PORT ||'3000');
app.set('port', port);
// la fonction errorHandler recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur ;
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => { // un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);

// Notre serveur de développement Node est à présent opérationnel. Vous pouvez ainsi ajouter les fonctionnalités appropriées à l'application Express.
