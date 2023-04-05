// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // 2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // 0

function cakes(recipe, available) {
	let portions = [];

	for (let item in recipe) {
		if (!(item in available)) {
			return 0;
		}

		let quantity = parseInt(available[item] / recipe[item]);
		if (quantity < 1) {
			return 0;
		} else {
			portions.push(quantity);
		}
	}

	return Math.min.apply(null, portions);
}