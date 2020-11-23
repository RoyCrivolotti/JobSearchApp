const db = require('../../database/firebase');

const { firestoreCollectionToJson } = require('../../helpers');

async function getAllServicesData(req, res, next) {
	const services = db.collection('services');

	try {
		const doc = await services.get();

		const data = firestoreCollectionToJson(doc);

		res.json(data);
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
	getAllServicesData,
};
