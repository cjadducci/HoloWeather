/* HoloWeather Test
 *
 * config sample ipWhitelist
 *
 * By Jake Adducci
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: [],

	language: "en",
	timeFormat: 24,
	units: "metric",
	electronOptions: {
		webPreferences: {
			nodeIntegration: true,
		},
	},

	modules: [
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}