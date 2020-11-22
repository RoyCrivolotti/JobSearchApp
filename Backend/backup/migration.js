// In your index.js

const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

// Initiate Firebase App
// appName is optional, you can omit it.
firestoreService.initializeApp(serviceAccount, databaseURL);

// Start exporting your data
firestoreService
    .backups(['services'])
    .then(collections => {
        console.log(JSON.stringify(collections));
    });
