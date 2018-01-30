/* HoloWeather
 *
 * Test config sample module helloworld
 *
 * By Jake Adducci
 * MIT Licensed.
 */

var config = {
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

    language: "en",
    timeFormat: 24,
    units: "metric",
    electronOptions: {
        webPreferences: {
            nodeIntegration: true,
        },
    },

    modules: [
        {
            module: "helloworld",
            position: "bottom_bar",
            config: {
                text: "Testing HelloWorld Module"
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }