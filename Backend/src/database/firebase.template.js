const firebase = require('firebase').default;
// const admin = require('firebase-admin');

// Service Account Key
// Required for admin users, together with the 'admin' SDK
// const serviceAccount = require('./serviceAccountKey.json');

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'apiKey',
	authDomain: 'projectId.firebaseapp.com',
	databaseURL: 'https://projectId.firebaseio.com',
	projectId: 'projectId',
	storageBucket: 'projectId.appspot.com',
	messagingSenderId: 'messageSenderId',
	appId: 'appId',
	measurementId: 'measurementId',
};

// Initialize Firebase
// TODO: Replace the 'databaseURL' field with your app's information
// For Admin users to test
// admin.initializeApp({
// credential: admin.credential.cert(serviceAccount),
// databaseURL: 'https://projectId.firebaseio.com',
// });

// Initialize Firebase
// For non-admin users to test
firebase.initializeApp(firebaseConfig);

// admin.firestore required for admins
// const db = admin.firestore();
const db = firebase.firestore();

module.exports = db;
