const db = require('../../database/firebase').default;

async function getAllServicesData(req, res, next) {
	console.log(db.collection('services'));
	res.send('here');
	// throw new Error('Method not implemented.');
}

module.exports = {
	getAllServicesData,
};
