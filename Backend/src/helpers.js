function firestoreCollectionToJson(firestoreDoc) {
	// Mapping the each document to its ID and returning an array of JSON objects
	const data = firestoreDoc.docs.map(doc => {
		const x = doc.data();
		if (x.id) x.id = doc.id;
		return x;
	});

	return data;
}

module.exports = {
	firestoreCollectionToJson,
};
