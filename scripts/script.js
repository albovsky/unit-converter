function convert() {
	determineUnit();
	var text = document.getElementById("number").value;
	number = parseFloat(text);
	number = number * 100;
	document.getElementById("result").value = number;
}

function determineUnit() {
	var index = document.getElementById("mySelect").selectedIndex;
	alert(index);
}