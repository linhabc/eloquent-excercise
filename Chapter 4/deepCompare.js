function deepEqual(v1, v2){
	if(typeof v1 == 'object' && v1!=null && typeof v2 == 'object' && v2!=null){
		if(Object.keys(v1).length != Object.keys(v2).length)
			return false;
		else{
			for(let pros in v1){
				console.log(pros);
				console.log(v1[pros]+' '+v2[pros]);
				if(v1[pros] !== v2[pros]){
					return false;
				}
			}
		}
		
		return true;
	}

	return v1 === v2;
}

//main
let cat = {
	name: 'tom',
	age: 5,
	eat: 'chicken'
}

let cat2 = cat;

console.log(deepEqual(cat2,cat));
