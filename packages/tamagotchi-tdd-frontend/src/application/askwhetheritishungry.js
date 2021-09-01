'use strict';

exports.AskWhetherItIsHungry = function construct(apiClient, presenter) {
	return async function execute(id) {
		const isHungry = await apiClient.isHungry(id);
		presenter.displayWhetherItIsHungry(isHungry);
		return isHungry;
	}
}
