// In your index.js

import { initializeApp, backups } from 'firestore-export-import';
import serviceAccount from './serviceAccountKey.json';

// Initiate Firebase App
// appName is optional, you can omit it.
initializeApp(serviceAccount, databaseURL);

// Start exporting your data
void backups(['services'])
    .then(collections => {
        console.log(JSON.stringify(collections));
    });
