function topThreeWords(text) {
	let rating = [[], []];
	let allowed = /[a-z']/g;

	text = text.trim();

	while (text.indexOf('  ') != -1) {
		text = text.replace(/\s\s/g, ' ');
	}

	let temp = text.toLowerCase().split(' ').map(function(item) {
		if (item.match(allowed)) {
			return item.match(allowed).join('');
		}
	});

	text = [];
	for (let item of temp) {
		if (item != undefined) text.push(item);
	}

	let counter = 0;

	for (let i = 0; i < text.length; i++) {
		if (text[i] != "'") {
			counter = text.filter(function(item) {
				return item == text[i];
			});
		}

		if (rating[0].indexOf(text[i]) == -1) {
			rating[0].push(text[i]);
			rating[1].push(counter.length);
		}
	}

	let sorted = [[], []];

	for (let i = 1; i <= 3; i++) {
		let idx = rating[1].indexOf(Math.max.apply(null, rating[1]));
		if (idx != -1) {
			sorted[0].push(rating[0].splice(idx, 1).join(''));
			sorted[1].push(rating[1].splice(idx, 1).join(''));
		}
	}

	return sorted[0];
}

console.log(topThreeWords("\'"));