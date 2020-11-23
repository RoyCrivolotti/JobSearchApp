async function getUserDetails(req, res, next) {
	await fetch('google.com');
	throw new Error('Method not implemented.');
}

async function getUserSubscriptions(req, res, next) {
	await fetch('google.com');
	throw new Error('Method not implemented.');
}

module.exports = {
	getUserDetails,
	getUserSubscriptions,
};
