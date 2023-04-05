// Codewars :: Unique In Order - Works properly

const testArr = 'AAAaaBbBBBAA';

let newArr = [];
let j = 0;
if (testArr.length > 0) {
	newArr[j] = testArr[j];

	for (let i = 0; i < testArr.length; i++) {
		if (newArr[j] != testArr[i]) {
			newArr.push(testArr[i]);
			++j;
		}
	}
}

console.log(newArr);