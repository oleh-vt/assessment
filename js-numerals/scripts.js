var ones = ["one", "two", "three", "four", "five", 
"six", "seven", "eight", "nine", "ten", "eleven", "twelve", "ghirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var numberOrders = ["thousand", "million", "billion", "trillion"];

function buildNumeral(numericText){
	
	var numeral = "";
	
	var numericValue = parseInt(numericText);

	if(numericValue == 0)
		return numeral;

	var hundreds = parseInt((numericValue/100));

	if (hundreds > 0) {
		numeral = ones[hundreds-1] + " hundred";
	}

	var tensOnes = numericValue % 100;
	
	if(tensOnes == 0)
		return numeral;

	var tmp = "";
	if (tensOnes < 20) {
		tmp += ones[tensOnes-1];
	}
	else{
		var tensDigit = parseInt(tensOnes/10);
		var onesDigit = tensOnes % 10;

		if (tensDigit > 0)
			tmp = tens[tensDigit-2];

		if (onesDigit > 0)
			tmp = tmp + "-" + ones[onesDigit-1];
	}

	if(tmp.length > 0)
		numeral += " " + tmp;
	
	return numeral;
};

function caller(){
	var number = document.getElementById("numberInput").value;
	var numberLength = number.length;

	var threes = parseInt(numberLength/3);
	if((numberLength % 3) != 0)
		threes += 1;

	var numeral = "";

	var to = numberLength;

	for(i = 0; i < threes; i++){
		
		var frm = to-3;
		if(frm < 0)
			frm = 0;

		var subNumber = number.substring(frm, to);
		var tmp = buildNumeral(subNumber);
		if(i > 0 && tmp.length > 0)
			tmp = tmp + " " + numberOrders[i-1];

		numeral = tmp + " " + numeral;
		to -= 3;
	}

	document.getElementById("numeral").innerHTML = numeral;
};