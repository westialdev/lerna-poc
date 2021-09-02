'use strict';

const fs = require("fs");
const util = require('util');

exports.FileSystemApiClient = function construct(filePath) {
	const readFile = util.promisify(fs.readFile);

	const isHungry = async (id) => {
		const response = JSON.parse(await readFile(filePath));
		return response.hungry;
	};
	return {isHungry};
};
