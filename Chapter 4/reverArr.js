function reverseArr(arr){
	let newArr = [];
	for(let i=0; i<arr.length; i++)
		newArr.unshift(arr[i]);
	return newArr;
}

function reverseArrInPlace(arr){
	let tmp;
	for(let i=0; i<Math.floor(arr.length/2); i++){
		tmp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = tmp;
	}

	return arr;
}


console.log(reverseArr([1,2,3,4,5]));
console.log(reverseArrInPlace([6,7,8,9,10]));