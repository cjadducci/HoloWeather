/* exported Utils */
/* HoloWeather
 * Utils
 *
 * By Jake Adducci
 * MIT Licensed.
 */

var colors = require("colors/safe");

var Utils = {
    colors: {
        warn: colors.yellow,
        error: colors.red,
        info: colors.blue
    }
};

if (typeof module !== "undefined") { module.exports = Utils; }