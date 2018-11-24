function countChar(str, c){
	let total = 0;
	for(let i=0; i<str.length; i++)
		if(str[i] == c)
			total++;
	return total;
}

console.log(countChar("bean bean", 'a'));