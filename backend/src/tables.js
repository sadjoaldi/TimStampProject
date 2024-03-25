// Gestionnaires de données du registre pour les tableaux

// Import des modules gestionnaires responsables du traitement des opérations de données sur les tables

const AgendaManager = require("./models/AgendaManager");
const UsersManager = require("./models/UsersManager");
const WorkplaceManager = require("./models/WorkplaceManager");
// const AuthManager = require("./models/AuthManager");

const managers = [UsersManager, WorkplaceManager, AgendaManager];

// Création d'un objet vide pour contenir les gestionnaires de données pour différentes tables
const tables = {};

// Inscription de chaque gestionnaire comme point d’accès aux données pour sa table
managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();
  tables[manager.table] = manager;
});

// Utilisation d'un proxy pour personnaliser les messages d’erreur lorsque nous essayons d’accéder à une table inexistante

// Export de l’instance Proxy avec gestion des erreurs personnalisée
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Vérifie si la propriété (table) existe dans l’objet tables

    if (prop in obj) return obj[prop];

    // Si la propriété (table) n’existe pas, lance une ReferenceError avec un message d’erreur personnalisé

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
