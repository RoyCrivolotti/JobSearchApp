const path = require('path');
const fs = require('fs');

const firestoreBackup = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');
const databaseData = require('./firebase');

// Initiate Firebase App
firestoreBackup.initializeApp(serviceAccount, process.env.DATABASE_URL);

// Start exporting your data
const exportFirestore = async () => {
	await firestoreBackup.backups()
		.then(collections => {
			// console.log(JSON.stringify(collections));

			const data = JSON.stringify(collections, null, 4);
			fs.writeFileSync(path.resolve(__dirname, 'collections.json'), data);
		});
};

// JSON To Firestore
const importFirestore = async () => {
	try {
		console.log('Initialzing Firebase');
		await firestoreBackup.initializeApp(serviceAccount, databaseData);
		console.log('Firebase Initialized');

		await firestoreBackup.restore('./data-clean/firebase/users.json');
		console.log('Upload Success');
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	exportFirestore,
	importFirestore,
};
