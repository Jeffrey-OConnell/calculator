const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	// ADDITION
	if (mathSymbol === "+"){
		console.log(num1 + num2);
	}
	// SUBTRACTION
	else if (mathSymbol === "-"){
		console.log(num1 - num2);
	}
	// MULTIPLICATION
	else if (mathSymbol === "*"){
		console.log(num1 * num2);
	}
	// DIVISION
	else if (mathSymbol === "/"){
		console.log(num1 / num2);
	}
	// SQUAREROOT
	else if (mathSymbol === "s"){
		console.log(Math.sqrt(num1))
	}



	
	// This line closes the connection to the command line interface.
	reader.close()

});
