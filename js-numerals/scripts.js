var ones = ["zero", "one", "two", "three", "four", "five", 
"six", "seven", "eight", "nine", "ten", "eleven", "twelve", "ghirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var hugeNumbers = ["thousand", "million", "milliard", "billion"];

function getHundredsTensOnes(numericText){
	var numeral = "";
	
	var numericValue = parseInt(numericText);
	var hundreds = parseInt((numericValue/100));

	if (hundreds > 0) {
		numeral = ones[hundreds] + " hundred";
	}

	var tensOnes = numericValue % 100;
	
	if(tensOnes == 0)
		return numeral;

	var tmp = "";
	if (tensOnes < 20) {
		tmp += ones[tensOnes];
	}
	else{
		var tensDigit = parseInt(tensOnes/10);
		var onesDigit = tensOnes % 10;

		if (tensDigit > 0)
			tmp = tens[tensDigit-2];

		if (onesDigit > 0)
			tmp = tmp + "-" + ones[onesDigit];
	}

	if(tmp.length > 0)
		numeral += " " + tmp;
	
	return numeral;
};

function buildPhrase(input){
	var number = parseInt(input);

	if (number == 0) {
		return "zero";
	}

	var isNegativeInput = number < 0;

	if(/^[+-]/.test(input))
		input = input.substring(1, input.length);
	var numberLength = input.length;

	var threes = parseInt(numberLength/3);
	if((numberLength % 3) != 0)
		threes += 1;

	var phrase = "";
	var to = numberLength;

	for(i = 0; i < threes; i++){
		
		var frm = to-3;
		if(frm < 0)
			frm = 0;

		var subNumber = input.substring(frm, to);
		var tmp = getHundredsTensOnes(subNumber);
		if(i > 0 && tmp.length > 0)
			tmp = tmp + " " + hugeNumbers[i-1];

		phrase = tmp + " " + phrase;
		to -= 3;
	}
	if (isNegativeInput) {
		phrase = "negative " + phrase;
	}
	return phrase;
};

function numberToText(){
	var maxLength = 15;
	var input = document.getElementById("numberInput").value;
	var result = "";

	if(!/^[+-]?\d+$/.test(input))
		result = "Please check your input";
	else{
		var isLongInput = input.length > maxLength;
		var isOneSymbolLonger = input.length == (maxLength+1);
		var isSigned = /^[+-]/.test(input);
		if(isLongInput && !(isOneSymbolLonger && isSigned)){
			result = "Ohh, it's too long... I don't even know the name for it. Are such big numbers really used anywhere?"
		}
		else{
			if(parseInt(input) == 0)
				result = ones[0];
			else{
				result = buildPhrase(input);
			}
		}
	}
	document.getElementById("number").innerHTML = result;
};