var ones = ["one", "two", "three", "four", "five", 
"six", "seven", "eight", "nine", "ten", "eleven", "twelve", "ghirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var numberOrders = ["thousand", "million", "billion", "trillion"];

function buildNumeral(numericText){
	
	var numeral = "";
	
	var numericValue = parseInt(numericText);
	var length = numericText.length;

	if(numericValue == 0)
		return numeral;

	if(length == 1){
		return ones[numericValue-1];
	}
  
	if (numericValue < 20) {
		numeral = ones[numericValue-1];
	}
	else{//refactor and bugfix needed
		var tmp = numericText.substring(length-2, length);
		var onesDigit = parseInt(tmp[1]);
		var tensDigit = parseInt(tmp[0]);

		if (tensDigit > 0)
			numeral = tens[tensDigit-2];

		if (onesDigit > 0)
			numeral = numeral + "-" + ones[onesDigit-1];

		if (numericValue > 99) {
			var hundreds = parseInt(numericText[0]);
			if (hundreds > 0)
				numeral = ones[hundreds-1] + " hundred" + " " + numeral;
		}
	}
	
	return numeral;

	// if(n < 20)
	// 	numeral = ones[n-1];
	// else{
	// 	digit = parseInt(numericText[2]);
	// 	if (digit > 0)
	// 		numeral = ones[digit-1];
	// 	digit = parseInt(numericText[1]);

	// 	if (digit > 0)
	// 		numeral = tens[digit-2] + " " + numeral;
	// }

	// digit = parseInt(numericText[0]);
	// if (digit > 0)
	// 	numeral = ones[digit-1] + " hundred" + " " + numeral;
  
  //var n = parseInt(numericText);
	//document.getElementById("numeral").innerHTML = numeral; //number;
};

function caller(){
	var number = document.getElementById("numberInput").value;

	var numberLength = number.length;
	var threes = numberLength/3 - ((numberLength/3) % 1); //change for parseInt
	
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