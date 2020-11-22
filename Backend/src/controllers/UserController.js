async function getUserDetails(userId) {
	await fetch('google.com');
	throw new Error('Method not implemented.');
}

async function getUserSubscriptions(userId) {
	await fetch('google.com');
	throw new Error('Method not implemented.');
}

module.exports = {
	getUserDetails,
	getUserSubscriptions,
};
