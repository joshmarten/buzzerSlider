var serial;

var portName = '/dev/cu.usbmodem1411';

var options = {
	baudrate: 9600
}


///////////////////////////////////////////////////////////////


function setup() {
	createCanvas(windowWidth, windowHeight);
	serial = new p5.SerialPort();

	serial.on('connected', serverConnected); // callback for connecting to the server
	serial.on('open', portOpen); // callback for the port opening
	serial.on('data', serialEvent); // callback for when new data arrives
	serial.on('error', serialError); // callback for errors
	serial.on('close', portClose); // callback for the port closing
	serial.open(portName, options); // open a serial port

	slider = createSlider(0, 5000, 0, 500);
	slider.position(width / 3, height / 2);
	slider.style('width', '200px');
}


///////////////////////////////////////////////////////////////


function draw() {

	var val = slider.value();
	serial.write(val);

}


///////////////////////////////////////////////////////////////


function serverConnected() {
	println('connected to server.');
}

function portOpen() {
	println('the serial port opened.');
}

function serialEvent() {

}

function serialError(err) {
	println('Something went wrong with the serial port. ' + err);
}

function portClose() {
	println('The serial port closed.');
}