var text;
var number;
var index;
var index2;

document.getElementById("userInputNumber").addEventListener('input', convert);
document.getElementById("userInputNumber").addEventListener('change', convert);

function convert() {
	text = document.getElementById("userInputNumber").value;
	number = parseFloat(text);
	determineUnit();
	convertUnit();
	document.getElementById("result").value = number;
}

function determineUnit() {
	index = document.getElementById("mySelect1").selectedIndex;
	if (index === 0) {
	number = number * 1000;
	} else if (index === 1) {
		number = number * 1;
	} else if (index === 2) {
		number = number * 0.01;
	} else {
		number = number * 0.001;
	}
}

function convertUnit() {
	index2 = document.getElementById("mySelect2").selectedIndex;
	if (index2 === 0) {
	number = number * 0.001;
	} else if (index2 === 1) {
		number = number * 1;
	} else if (index2 === 2) {
		number = number * 100;
	} else {
		number = number * 1000;
	}
}

	document.getElementById("Reset").reset();
