function range(start, end, step=1){
	let arr = [];
	if(start > end)
		return null;
	for(let i = start; i<=end; i+=step)
		arr.push(i);
	return arr;
}

function sum(arr){
	return arr.reduce((total, num)=>num+total, 0);
}

console.log(sum(range(3,14,2)));