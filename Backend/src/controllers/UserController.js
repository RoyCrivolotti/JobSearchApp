const firebase = require('firebase').default;

async function getUserDetails(req, res, next) {
	await fetch('google.com');
	throw new Error('Method not implemented.');
}

async function getUserSubscriptions(req, res, next) {
	await fetch('google.com');
	throw new Error('Method not implemented.');
}

async function createUser(req, res, next) {
	const { email, password } = req.params;

	await firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => {
			res.status(200).send(`Successfully created user '${user.user.tenantId}' and signed in`);
		})
		.catch(async error => {
			const { code, message } = error;

			if (code === 'auth/email-already-in-use') await signInWithEmailAndPassword(res, email, password);
			else res.status(500).send(`Code: ${code}, Message: ${message}`);
		});
}

async function signInWithEmailAndPassword(res, email, password) {
	await firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => {
			res.status(200).send(`User '${user.user.tenantId}' already exists, successfilly signed in`);
		})
		.catch(error => {
			const { code, message } = error;

			res.status(500).send(`The user with email '${email}' already exists - Failed to sign in: Code ${code}, Message ${message}`);
		});
}

module.exports = {
	getUserDetails,
	getUserSubscriptions,
	createUser,
};
