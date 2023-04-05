function score( dice ) {
	let set = {
		1: {
			res:	[],
			x3:		1000,
			x1:		100,
		},
		2: {
			res:	[],
			x3:		200,
			x1:		0,
		},
		3: {
			res:	[],
			x3:		300,
			x1:		0,
		},
		4: {
			res:	[],
			x3:		400,
			x1:		0,
		},
		5: {
			res:	[],
			x3:		500,
			x1:		50,
		},
		6: {
			res:	[],
			x3:		600,
			x1:		0,
		},

	};

	let result = 0;

	for (let i = 1; i <= 6; i++) {
		let idx = dice.indexOf(i);

		while (idx != -1) {
			set[i]['res'].push(idx);
			idx = dice.indexOf(i, idx + 1);
		}

		if (set[i]['res'].length >= 3) {
			result += set[i]['x3'];

			for (let j = 1; j <= 3; j++) {
				set[i]['res'].shift();
			}
		}

		result += set[i]['res'].length * set[i]['x1'];
	}

	return result;
}

console.log(score( [1, 1, 1, 1, 1] ));
// console.log(score( [2, 3, 4, 6, 2] ));