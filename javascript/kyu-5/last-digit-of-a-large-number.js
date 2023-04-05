var lastDigit = function(str1, str2){
	if (str2 === '0') {
		return 1;
	}

	let check1 = str1.slice(-1);

	if (check1 === '0') {return 0;}
	if (check1 === '1') {return 1;}
	if (check1 === '2') {
		if (+str2 % 4 === 1) {
			return 2;
		} else if (+str2 % 4 === 2) {
			return 4;
		} else if (+str2 % 4 === 3) {
			return 8;
		} else {
			return 6;
		}
	}
	if (check1 === '3') {
		if (+str2 % 4 === 1) {
			return 3;
		} else if (+str2 % 4 === 2) {
			return 9;
		} else if (+str2 % 4 === 3) {
			return 7;
		} else {
			return 1;
		}
	}
	if (check1 === '4') {
		if (+str2 % 2 === 1) {
			return 4;
		} else {
			return 6;
		}
	}
	if (check1 === '5') {return 5;}
	if (check1 === '6') {return 6;}
	if (check1 === '7') {
		if (+str2 % 4 === 1) {
			return 7;
		} else if (+str2 % 4 === 2) {
			return 9;
		} else if (+str2 % 4 === 3) {
			return 3;
		} else {
			return 1;
		}
	}
	if (check1 === '8') {
		if (+str2 % 4 === 1) {
			return 8;
		} else if (+str2 % 4 === 2) {
			return 4;
		} else if (+str2 % 4 === 3) {
			return 2;
		} else {
			return 6;
		}
	}
	if (check1 === '9') {
		if (+str2 % 2 === 1) {
			return 9;
		} else {
			return 1;
		}
	}
}

console.log(lastDigit('3715290469715693021198967285016729344580685479654510946723', '68819615221552997273737174557165657483427362207517952651'));