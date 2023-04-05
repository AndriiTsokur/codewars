function rgb(r, g, b){
	let hexRes = '';
	let arr = [r, g, b];
	let equiv = [
		[10, 11, 12, 13, 14, 15],
		['A', 'B', 'C', 'D', 'E', 'F']
	];

	for (let i = 0; i < arr.length; i++) {
		let hex = '';
		let rem, dec;

		if (arr[i] <= 0) {
			hexRes += '00';
		} else {
			arr[i] > 255 ? dec = 255 : dec = arr[i];

			while (dec > 0) {
				rem = dec % 16;
				if (rem > 9) rem = equiv[1][equiv[0].indexOf(rem)];
				hex = rem + hex;
				dec = parseInt(dec / 16);
			}

			if (hex.length < 2) hex = '0' + hex;
			hexRes += hex;
		}
	}

	return hexRes;
}

console.log(rgb(214,94,8));