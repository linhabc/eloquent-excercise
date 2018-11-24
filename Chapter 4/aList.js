function listToArray(list){
	let arr = [];
	for (let node = list; node; node=node.rest){
		arr.push(node.value);
	}

	return arr;
}

function arrayToList(arr){
	let list = {};
	let tmp = {};
	for(let i=arr.length-1; i>=0; i--){
		if(list.hasOwnProperty('rest')){
			list.value = arr[i];
			list.rest = tmp;
			tmp = iterationCopy(list);
		}
		else{
			list.value = arr[i];
			list.rest = null;
			tmp = iterationCopy(list);
		}
	}

	return list;
}

function prepend(element, list){
	let tmp = {};
	tmp = iterationCopy(list);
	if(list.hasOwnProperty('rest')){
		list.value = element;
		list.rest = tmp;
	}else{
		list.value = arr[i];
		list.rest = null;
	}
	return list;
}

function nth(num, list){
	for (let node = list, i=0; node; node=node.rest, i++){
		if(i == num)
			return node.value
	}

	return undefined;
}

function iterationCopy(src) {
  let target = {};
  for (let prop in src) {
    if (src.hasOwnProperty(prop)) {
      target[prop] = src[prop];
    }
  }
  return target;
}

//main
let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
}

console.log(listToArray(list));
console.log(arrayToList([1,2,3,4]));
console.log(prepend(0,list));
console.log(nth(3,list));

