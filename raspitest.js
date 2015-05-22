var raspi = require('raspi');
var gpio = require('raspi-gpio');

var raspiConnection = {
	init: function(){
		var that = this;
		raspi.init(function(){
			that.setOutput(new gpio.DigitalOutput('P1-11'));
			console.log("Initiated: "+that.output);
		})
	},
	setOutput: function(output) {
		this.output = output;
	},
	turnLightOn: function(){
		this.switch = 1;
		this.output.write(this.switch);
	},
	turnLightOff: function(){
		this.switch = 0;
		this.output.write(this.switch);
	},
	isLightOn: function(){
		return this.switch;
	}

}

module.exports = raspiConnection;
