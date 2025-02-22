// Importation des modules nécessaires const fs = require('fs'); const dotenv = require('dotenv'); const Joi = require('joi');

// Charger le fichier .env si disponible if (fs.existsSync('.env')) { dotenv.config(); }

// Validation des variables d'environnement const schema = Joi.object({ SESSION_ID: Joi.string().required(), OWNER_NUMBER: Joi.string().pattern(/^+?[0-9]+$/).required(), POSTGRESQL_URL: Joi.string().uri().required(), MAX_SIZE: Joi.number().integer().min(1).required(), MODE: Joi.string().valid('button', 'text').default('button'), STATUS_REPLY_MESSAGE: Joi.string().default('Your status seen just now by VAJIRA MD ✅'), ALIVE: Joi.string().default('VAJIRA MD'), DELETEMSGSENDTO: Joi.string().allow('').default('') });

const { error, value: envVars } = schema.validate(process.env); if (error) { console.error('Invalid environment variables:', error.details); process.exit(1); }

// Configuration de l'application const config = { SESSION_ID: envVars.SESSION_ID, OWNER_NUMBER: envVars.OWNER_NUMBER, POSTGRESQL_URL: envVars.POSTGRESQL_URL, MAX_SIZE: envVars.MAX_SIZE, MODE: envVars.MODE, STATUS_REPLY_MESSAGE: envVars.STATUS_REPLY_MESSAGE, ALIVE: envVars.ALIVE, DELETEMSGSENDTO: envVars.DELETEMSGSENDTO };

// Affichage des valeurs de configuration pour vérification console.log('Session ID:', config.SESSION_ID); console.log('Owner Number:', config.OWNER_NUMBER); console.log('PostgreSQL URL:', config.POSTGRESQL_URL);

// Fonction principale du bot function startBot() { console.log(${config.ALIVE} Bot is now running!); console.log(config.STATUS_REPLY_MESSAGE); }

// Démarrage du bot startBot();

// Fichier .env fs.writeFileSync('.env', SESSION_ID=VAJIRA-MD=tb8gXLhL#jDC3en5gXIz2akXZ8aycGLx9UKRhnysbCi3h8u890YE OWNER_NUMBER=+243898598530 POSTGRESQL_URL=postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech MAX_SIZE=500 MODE=button STATUS_REPLY_MESSAGE=Your status seen just now by VAJIRA MD ✅ ALIVE=VAJIRA MD DELETEMSGSENDTO= );

