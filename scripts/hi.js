// Commands:
// hi - Hubot will respond with "Hello, from Krit!"
// hubot bye - Hubot will respond with "Goodbye, from Krit!"/

module.exports = function(robot) {

  robot.hear (/hi/i, function (msg) {
    msg.send("Hello, from Krit!");
  });

  robot.respond (/bye/i, function (msg) {
    msg.send("Goodbye, from Krit!");
  });
};
