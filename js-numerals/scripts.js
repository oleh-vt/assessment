var ones = ["one", "two", "three", "four", "five", 
"six", "seven", "eight", "nine", "ten", "eleven", "twelve", "ghirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var numberOrders = ["thousand", "million"];

function buildNumeral(number){
	
  
	var tmp = number.substring(1, 3);

	var numeral = "";
	var n = parseInt(tmp);
	var digit = 0;
	if(n < 20)
		numeral = ones[n-1];
	else{
		digit = parseInt(number[2]);
		if (digit > 0)
			numeral = ones[digit-1];
		digit = parseInt(number[1]);

		if (digit > 0)
			numeral = tens[digit-2] + " " + numeral;
	}

	digit = parseInt(number[0]);
	if (digit > 0)
		numeral = ones[digit-1] + " hundred" + " " + numeral;
  
  //var n = parseInt(number);
	//document.getElementById("numeral").innerHTML = numeral; //number;
	return numeral;
};

function caller(){
	var number = document.getElementById("numberInput").value;

	var numberLength = number.length;
	var threes = numberLength/3 - ((numberLength/3) % 1); //change for parseInt

	var numeral = "";

	var to = numberLength;

	for(i = 0; i < threes; i++){
		
		var frm = to-3;
		var subNumber = number.substring(frm, to);
		var tmp = buildNumeral(subNumber);
		if(i > 0)
			tmp = tmp + " " + numberOrders[i-1];

		numeral = tmp + " " + numeral;
		to -= 3;
	}

	document.getElementById("numeral").innerHTML = numeral;
};