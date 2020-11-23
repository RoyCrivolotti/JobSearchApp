const db = require('../../database/firebase');

async function getServiceData(req, res, next) {
	const services = db.collection('services');

	try {
		const doc = await services.doc('Profile Update').get();

		res.json(doc.data());
	} catch (error) {
		let msg = '';

		if (error && error.code === 'permission-denied') {
			msg = `Code: ${error.code}, Origin: ${error.name}`;
			console.error(msg);

			res.status(403).send(msg || 'Unexpected error when trying to fetch data');
		} else res.status(500).send('An unexpected error occurred');
	}
}

module.exports = {
	getServiceData,
};
