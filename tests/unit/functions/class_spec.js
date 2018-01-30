var chai = require("chai");
var expect = chai.expect;
var jsClass = require("../../../js/class.js");

describe("File js/class", function() {
	describe("Test function cloneObject", function() {
		var cloneObject = jsClass._test.cloneObject;

		it("should return equals object", function() {
			var expected = {name: "Jake", web: "https://www.google.com", project: "HoloWeather"};
			var obj = {};
			obj = cloneObject(expected);
			expect(expected).to.deep.equal(obj);
		});

		it("should return equals int", function() {
			var expected = 1;
			var obj = {};
			obj = cloneObject(expected);
			expect(expected).to.equal(obj);
		});

		it("should return equals string", function() {
			var expected = "Perfect stranger";
			var obj = {};
			obj = cloneObject(expected);
			expect(expected).to.equal(obj);
		});

		it("should be return equals undefined", function() {
			var expected = undefined;
			var obj = {};
			obj = cloneObject(expected);
			expect(undefined).to.equal(obj);
		});
		/*
		context("Test lockstring code", function() {
			it("should be return equals object", function() {
				var expected = {name: "Module", lockStrings: "stringLock"};
				var obj = {};
				obj = cloneObject(expected);
				expect(expected).to.deep.equal(obj);
			});
		});
		*/
	});
});

