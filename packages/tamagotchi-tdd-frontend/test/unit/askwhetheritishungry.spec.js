'use strict';

const assert = require("assert");
const sinon = require("sinon");
const {describe, it} = require("mocha");

const {AskWhetherItIsHungry} = require("../../src/application/askwhetheritishungry");

describe("Ask whether a Tamagotchi is hungry", () => {
	it("shows the tamagotchi with id 123 is not hungry", async () => {
		const apiClient = sinon.fake();
		apiClient.isHungry = sinon.spy(_ => false);
		const presenter = sinon.fake();
		presenter.displayWhetherItIsHungry = sinon.spy(isHungry => undefined);
		const askWhetherItIsHungry = AskWhetherItIsHungry(apiClient, presenter);
		assert.strictEqual(await askWhetherItIsHungry(123), false);
		assert.strictEqual(apiClient.isHungry.calledOnce, true);
		assert.strictEqual(presenter.displayWhetherItIsHungry.calledWith(false), true);
	});
	it("shows the tamagotchi with id 123 is hungry", async () => {
		const apiClient = sinon.fake();
		apiClient.isHungry = sinon.spy(_ => true);
		const presenter = sinon.fake();
		presenter.displayWhetherItIsHungry = sinon.spy(isHungry => undefined);
		const askWhetherItIsHungry = AskWhetherItIsHungry(apiClient, presenter);
		assert.strictEqual(await askWhetherItIsHungry(123), true);
		assert.strictEqual(apiClient.isHungry.calledOnce, true);
		assert.strictEqual(presenter.displayWhetherItIsHungry.calledWith(true), true);
	});
});
