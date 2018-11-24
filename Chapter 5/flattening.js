function flattening(arr){
	let newArr = [];

	newArr = arr.reduce(
			(accumulator, currentArr) => {return accumulator.concat(currentArr)}
		);

	return newArr;
}


let arr = [[1,2,3], [4,5,6], [10, 21, 13]];
console.log(flattening(arr));