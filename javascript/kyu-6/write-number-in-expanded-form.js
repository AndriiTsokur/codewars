function expandedForm(num) {
	let result = '';

	while (num > 0) {
		let divider = 1;
		for (let i = 1; i <= num.toString().length - 1; i++) {
			divider *= 10;
		}

		let block = parseInt(num / divider) * divider;
		if (block != 0) result += block;

		num -= block;
		if (num != 0) result += ' + ';
	}

	return result;
}

console.log(expandedForm(5500578));