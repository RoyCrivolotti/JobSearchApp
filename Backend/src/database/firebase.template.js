/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import * as firebase from 'firebase/app';
import 'firebase/firestore';

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
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
