function duplicateEncode(word){
	let indexes = [];
	let arr = word.toLowerCase().split('');
	let result = [];
	
	for (let i = 0; i < arr.length; i++) {
		if (result[i] !== '(' || result[i] !== ')') {
			let element = arr[i];
			let idx = arr.indexOf(element);

			while (idx != -1) {
				indexes.push(idx);
				idx = arr.indexOf(element, idx + 1);
			}

			if (indexes.length === 1) {
				result[i] = '(';
			} else {
				for (let index of indexes) {
					result[index] = ')';
				}
			}

			indexes = [];
		}
	}
	
	return result.join('');
}

console.log(duplicateEncode('(( @'));