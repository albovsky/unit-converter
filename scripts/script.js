
var number;
var indexOfInput;
var indexOfOutput;

function convert() {
	text = document.getElementById("userInputNumber").value;
	number = parseFloat(text);
	number = new Big(number);
	determineUnit();
	convertUnit();
	document.getElementById("result").value = number.toString();
}

function determineUnit() {
	indexOfInput = document.getElementById("mySelect1").selectedIndex;
	if (indexOfInput === 0) {
	number = number.times(1000);
	} else if (indexOfInput === 1) {
		number = number.times(1);
	} else if (indexOfInput === 2) {
		number = number.times(0.01);
	} else {
		number = number.times(0.001);
	}
	

	// document.getElementById("par").value = number; //for input tests
}

function convertUnit() {
	indexOfOutput = document.getElementById("mySelect2").selectedIndex;
	if (indexOfOutput === 0) {
	number = number.times(0.001);
	} else if (indexOfOutput === 1) {
		number = number.times(1);
	} else if (indexOfOutput === 2) {
		number = number.times(100);
	} else {
		number = number.times(1000);
	}
	
}

var x = Big(0.3);
var y = x.minus(0.1);
var z = y.toString();


