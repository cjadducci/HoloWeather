/* global Module */

/* HoloWeather
 * Module: HelloWorld
 *
 * By Jake Adducci
 * MIT Licensed.
 */

Module.register("helloworld",{

	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	getTemplate: function () {
		return "helloworld.njk"
	},

	getTemplateData: function () {
		return this.config
	}
});
