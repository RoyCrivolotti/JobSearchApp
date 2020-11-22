import * as firebase from 'firebase/app';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
