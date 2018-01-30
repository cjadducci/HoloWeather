/* exported Log */

/* HoloWeather
 * Socket Connection
 *
 * By Jake Adducci
 * MIT Licensed.
 */

var HoloSocket = function (moduleName) {

    var self = this;

    if (typeof moduleName !== "string") {
        throw new Error("Please set the module name for the HoloSocket.");
    }

    self.moduleName = moduleName;

    self.socket = io("http://localhost:8080");
    self.socket.on("notification", function (data) {
        Holo.sendNotification(data.notification, data.payload, Socket);
    });

    return {
        sendMessage: function (notification, payload, sender) {
            Log.log("Send socket message: " + notification);
            self.socket.emit("notification", {
                notification: notification,
                sender: sender,
                payload: payload
            });
        }
    };
};