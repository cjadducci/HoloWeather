const helpers = require("./global-setup");
const path = require("path");
const request = require("request");
const expect = require("chai").expect;
const describe = global.describe;
const it = global.it;
const beforeEach = global.beforeEach;
const afterEach = global.afterEach;

describe("Check configuration without modules", function () {
	helpers.setupTimeout(this);

	var app = null;

	beforeEach(function () {
		return helpers.startApplication({
			args: ["js/electron.js"]
		}).then(function (startedApp) { app = startedApp; })
	});

	afterEach(function () {
		return helpers.stopApplication(app);
	});

	before(function () {
		// Set config sample for use in test
        process.env.HOLO_CONFIG_FILE = "tests/configs/without_modules.js";
	});

	it("Show the message HoloWeather title", function () {
		return app.client.waitUntilWindowLoaded()
			.getText("#module_1_helloworld .module-content").should.eventually.equal("HoloWeather");
	});

	it("Show the text to Jake's Github", function () {
		return app.client.waitUntilWindowLoaded()
			.getText("#module_5_helloworld .module-content").should.eventually.equal("www.github.com/cjadducci");
	});
});