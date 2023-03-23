const db = uniCloud.database();
exports.main = async (event, context) => {
	const dbDemo = db.collection('dc-demo');
	//上传收集到的数据
	let uploadRes = dbDemo.add({
		api: 'upload',
		...event
	})
	return uploadRes;
};
