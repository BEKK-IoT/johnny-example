var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});
var button;

board.on("ready", function() {
	button = new five.Button(0);

	//board.repl.inject({
	//	button:button
	//})

	button.on("down", function(){
		console.log("button down");
	});

  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
  });

});
