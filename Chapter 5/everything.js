function every(array, test) {
  for(let i=0; i<array.length; i++){
  	if(!test(array[i]))
  		return false;
  }
  return true;
}

function every2(arr, test){
	return !arr.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true