function isEven(num){
	if (num < 0) return null;
	if (num == 0) return 1;
	if (num == 1) return 0;

	return isEven(num-2);  
}

if(isEven(50))
	console.log("50 is Even");
else
	console.log("Odd");


if(isEven(51))
	console.log("Even");
else
	console.log("51 is Odd");