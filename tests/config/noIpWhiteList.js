/* HoloWeather Test
 *
 * config sample noIpWhitelist
 *
 * By Jake Adducci
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["x.x.x.x"],

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