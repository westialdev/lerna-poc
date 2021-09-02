'use strict';

const assert = require("assert");
const sinon = require("sinon");
const {describe, it} = require("mocha");

const {FileSystemApiClient} = require("../../src/vendor/apiclient/filesystemapiclient");
const {AskWhetherItIsHungry} = require("../../src/application/askwhetheritishungry");

describe("Ask whether a Tamagotchi is hungry", () => {
	it("gets tamagotchi id 123 hungriness state", async () => {
		const apiClient = FileSystemApiClient("test/sample/fsapihungry.json");
		const presenter = sinon.fake();
		presenter.displayWhetherItIsHungry = sinon.fake();
		const askWhetherItIsHungry = AskWhetherItIsHungry(apiClient, presenter);
		assert.strictEqual(await askWhetherItIsHungry(123), true);
	});
});
